const PDFDocument = require('pdfkit');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const path = require('path');
const fs = require('fs');
const QRCode = require('qrcode');

exports.generateCertificate = async (userId, courseId, res) => {
    try {
        // 1. Validasi & Casting Input
        const uId = Number(userId);
        const cId = Number(courseId);

        if (isNaN(uId) || isNaN(cId)) {
            return res.status(400).json({ message: "ID User atau Course harus berupa angka" });
        }

        // 2. Ambil data dari Database
        const user = await prisma.user.findUnique({ where: { id: uId } });
        const course = await prisma.course.findUnique({ where: { id: cId } });

        if (!user || !course) {
            return res.status(404).json({ message: "Data User atau Course tidak ditemukan di database" });
        }

        // 3. Logika Auto-Generate Nomor Sertifikat
        let orderCount = 1;
        try {
            // Jika model di schema.prisma berbeda (misal: UserCourse), ganti nama di bawah ini
            orderCount = await prisma.courseEnrollment.count({
                where: { courseId: cId }
            });
            if (orderCount === 0) orderCount = 1;
        } catch (dbError) {
            console.warn("DB Count error, menggunakan nomor urut default.");
            orderCount = Math.floor(Math.random() * 900) + 100; 
        }

        const year = new Date().getFullYear();
        const formattedNumber = String(orderCount).padStart(3, '0');
        const certificateNo = `NO: ${formattedNumber}/ITD/IF/${year}`;

        // 4. Inisialisasi Dokumen PDF (Landscape A4)
        const doc = new PDFDocument({ 
            layout: 'landscape', 
            size: 'A4', 
            margin: 0,
            info: { Title: `Sertifikat ${course.name} - ${user.name}` } 
        });

        // Set response header agar browser langsung mendownload/menampilkan PDF
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=Sertifikat_${user.name.replace(/\s+/g, '_')}.pdf`);

        doc.pipe(res);

        const width = doc.page.width;
        const height = doc.page.height;

        // --- STYLING: BACKGROUND & BORDER ---
        doc.rect(0, 0, width, height).fill('#1A3C40'); // Dark Teal

        // Border Emas
        doc.rect(20, 20, width - 40, height - 40).lineWidth(2).stroke('#D4AF37');
        doc.rect(30, 30, width - 60, height - 60).lineWidth(1).stroke('#D4AF37');

        // Ornamen Sudut
        const cornerLen = 60;
        doc.lineWidth(2).strokeColor('#D4AF37');
        doc.moveTo(20, 20 + cornerLen).lineTo(20, 20).lineTo(20 + cornerLen, 20).stroke();
        doc.moveTo(width - 20 - cornerLen, 20).lineTo(width - 20, 20).lineTo(width - 20, 20 + cornerLen).stroke();

        // --- ASSETS: LOGO ---
        const logoPath = path.resolve(__dirname, '../../src/assets/LeveLearn.png');
        if (fs.existsSync(logoPath)) {
            doc.image(logoPath, 60, 50, { width: 180 }); 
        }

        // --- HEADER RIBBON (POJOK KANAN ATAS) ---
        const ribbonWidth = 180;
        const ribbonHeight = 110;
        const ribbonX = width - 240;

        const goldGradient = doc.linearGradient(ribbonX, 0, ribbonX + ribbonWidth, 0);
        goldGradient.stop(0, '#D4AF37').stop(0.5, '#F9E498').stop(1, '#B8860B');

        doc.rect(ribbonX, 0, ribbonWidth, ribbonHeight).fill(goldGradient);
        doc.rect(ribbonX, ribbonHeight, ribbonWidth, 4).fill('#8B6508');

        doc.fillColor('#1A3C40') 
           .fontSize(11).font('Helvetica-Bold').text('Certificate', ribbonX + 10, 30, { width: ribbonWidth - 20, align: 'center' })
           .fontSize(13).text('of', ribbonX + 10, 45, { width: ribbonWidth - 20, align: 'center' })
           .fontSize(11).text('Completion', ribbonX + 10, 65, { width: ribbonWidth - 20, align: 'center' });

        // --- TEXT CONTENT ---
        // Nomor Sertifikat
        doc.fillColor('#D4AF37').fontSize(14).font('Helvetica-Bold').text(certificateNo, 0, 145, { align: 'center' });

        // Nama Penerima
        doc.fillColor('#FFFFFF').fontSize(16).font('Helvetica').text('Diberikan kepada', 0, 190, { align: 'center' });

        // Gunakan font kustom jika ada di folder assets/fonts/
        const customFontPath = path.resolve(__dirname, '../../src/assets/fonts/Cinzel-Bold.ttf');
        if (fs.existsSync(customFontPath)) {
            doc.font(customFontPath);
        } else {
            doc.font('Times-BoldItalic');
        }

        doc.fontSize(48).fillColor('#D4AF37')
           .text(user.name.toUpperCase(), 0, 230, { align: 'center', characterSpacing: 2 });

        doc.moveTo(width / 4, 290).lineTo((width / 4) * 3, 290).lineWidth(1).stroke('#D4AF37');

        // Keterangan Course
        doc.fillColor('#FFFFFF').fontSize(16).font('Helvetica').text('Atas kelulusannya pada kelas', 0, 310, { align: 'center' });
        doc.fontSize(32).font('Helvetica-Bold').fillColor('#FFFFFF').text(course.name, 0, 350, { align: 'center' });

        // --- FOOTER (TANDA TANGAN & TANGGAL) ---
        const footerX = 80;
        const footerY = 410; 

        const tgl = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
        doc.fillColor('#D4AF37').fontSize(14).font('Helvetica-Bold').text(tgl, footerX, footerY);

        const signPath = path.resolve(__dirname, '../../src/assets/signature.png');
        if (fs.existsSync(signPath)) {
            doc.image(signPath, footerX + 30, footerY + 5, { width: 150 });
        }

        doc.fillColor('#FFFFFF').fontSize(15).font('Helvetica-Bold')
           .text('Ranty Deviana Siahaan, S.Kom., M.Eng.', footerX, footerY + 100);
        doc.fontSize(11).font('Helvetica').fillColor('#CCCCCC')
           .text('Chief Academic Officer LeveLearn', footerX, footerY + 118);

        // --- QR CODE VERIFIKASI ---
        const qrX = width - 140;
        const qrY = height - 140;
        const verificationUrl = `https://levelearn.com/verify/${cId}-${uId}`;

        try {
            const qrDataUrl = await QRCode.toDataURL(verificationUrl, {
                color: { dark: '#FFFFFF', light: '#00000000' },
                margin: 1
            });
            doc.image(qrDataUrl, qrX, qrY, { width: 70 });
        } catch (err) {
            doc.rect(qrX, qrY, 70, 70).lineWidth(1).strokeColor('#D4AF37').stroke();
        }
        
        doc.fillColor('#FFFFFF').fontSize(7).font('Helvetica-Bold')
           .text('VERIFIKASI DIGITAL', qrX - 15, qrY + 75, { width: 100, align: 'center' });

        // SELESAIKAN DOKUMEN
        doc.end();

    } catch (error) {
        console.error("CRITICAL ERROR GENERATING PDF:", error);
        // Pastikan tidak mengirim respons dua kali
        if (!res.headersSent) {
            res.status(500).json({ 
                error: "Gagal memproses sertifikat", 
                detail: error.message 
            });
        }
    }
};