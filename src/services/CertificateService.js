const PDFDocument = require('pdfkit');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const path = require('path');
const fs = require('fs');
const QRCode = require('qrcode');

exports.generateCertificate = async (userId, courseId, res) => {
    try {
        const uId = Number(userId);
        const cId = Number(courseId);

        // 1. Ambil data User, Course, dan Validasi Penilaian Tugas
        const user = await prisma.user.findUnique({ where: { id: uId } });
        const course = await prisma.course.findUnique({ 
            where: { id: cId },
            include: {
                chapters: {
                    include: {
                        assignments: true,
                        userProgress: {
                            where: { userId: uId }
                        }
                    }
                }
            }
        });

        if (!user || !course) {
            return res.status(404).json({ message: "Data User atau Course tidak ditemukan" });
        }

        // --- LOGIKA KRUSIAL: CEK APAKAH SEMUA ASSIGNMENT SUDAH DINILAI ---
        const chaptersWithAssignments = course.chapters.filter(ch => ch.assignments.length > 0);
        
        const isAllGraded = chaptersWithAssignments.every(ch => {
            const progress = ch.userProgress[0];
            // Syarat: progress record ada DAN assignmentScore lebih besar dari 0
            return progress && progress.assignmentScore > 0;
        });

        if (!isAllGraded) {
            return res.status(403).json({ 
                message: "Sertifikat belum dapat diunduh. Pastikan semua tugas Anda telah dinilai oleh instruktur." 
            });
        }
        // ----------------------------------------------------------------

        // 2. Logika Auto-Generate Nomor Sertifikat
        let orderCount = 1;
        try {
            // Menggunakan userCourse sesuai dengan skema prisma Anda
            orderCount = await prisma.userCourse.count({
                where: { courseId: cId, isCompleted: true }
            });
            if (orderCount === 0) orderCount = 1;
        } catch (dbError) {
            console.error("Gagal menghitung nomor sertifikat, menggunakan fallback.");
            orderCount = Math.floor(Math.random() * 100) + 1;
        }

        const year = new Date().getFullYear();
        const formattedNumber = String(orderCount).padStart(3, '0');
        const certificateNo = `NO: ${formattedNumber}/ITD/IF/${year}`;

        // 3. Inisialisasi Dokumen PDF
        const doc = new PDFDocument({ 
            layout: 'landscape', 
            size: 'A4', 
            margin: 0,
            info: { Title: `Sertifikat ${course.name} - ${user.name}` } 
        });

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=Sertifikat_${course.name.replace(/\s+/g, '_')}.pdf`);

        doc.pipe(res);

        const width = doc.page.width;
        const height = doc.page.height;

        // --- BACKGROUND ---
        doc.rect(0, 0, width, height).fill('#1A3C40'); 

        // --- BORDER ---
        doc.rect(20, 20, width - 40, height - 40).lineWidth(2).stroke('#D4AF37');
        doc.rect(30, 30, width - 60, height - 60).lineWidth(1).stroke('#D4AF37');

        // Ornamen Sudut
        const offset = 20;
        const len = 60;
        doc.lineWidth(2).strokeColor('#D4AF37');
        doc.moveTo(offset, offset + len).lineTo(offset, offset).lineTo(offset + len, offset).stroke();
        doc.moveTo(width - offset - len, offset).lineTo(width - offset, offset).lineTo(width - offset, offset + len).stroke();

        // --- LOGO ---
        const logoPath = path.resolve(__dirname, '../../src/assets/LeveLearn.png');
        if (fs.existsSync(logoPath)) {
            doc.image(logoPath, 60, 50, { width: 180 }); 
        }

        // --- RIBBON ---
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

        // --- NOMOR SERTIFIKAT ---
        doc.fillColor('#D4AF37').fontSize(14).font('Helvetica-Bold').text(certificateNo, 0, 145, { align: 'center' });

        // --- KONTEN TENGAH ---
        doc.fillColor('#FFFFFF').fontSize(16).font('Helvetica').text('Diberikan kepada', 0, 190, { align: 'center' });
        doc.fontSize(48).font('Times-BoldItalic').fillColor('#D4AF37').text(user.name.toUpperCase(), 0, 230, { align: 'center' });
        doc.moveTo(width / 4, 285).lineTo((width / 4) * 3, 285).lineWidth(1).stroke('#D4AF37');
        doc.fillColor('#FFFFFF').fontSize(16).font('Helvetica').text('Atas kelulusannya pada kelas', 0, 310, { align: 'center' });
        doc.fontSize(32).font('Helvetica-Bold').fillColor('#FFFFFF').text(course.name, 0, 350, { align: 'center' });

        // --- FOOTER (TANDA TANGAN) ---
        const footerX = 80;
        const footerY = 405; 
        const tgl = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
        doc.fillColor('#D4AF37').fontSize(14).font('Helvetica-Bold').text(tgl, footerX, footerY);

        const signPath = path.resolve(__dirname, '../../src/assets/signature.png');
        if (fs.existsSync(signPath)) {
            doc.image(signPath, footerX + 30, footerY + 10, { width: 160 });
        }

        const textStart = footerY + 110; 
        doc.fillColor('#FFFFFF').fontSize(15).font('Helvetica-Bold').text('Ranty Deviana Siahaan, S.Kom., M.Eng.', footerX, textStart);
        doc.fontSize(11).font('Helvetica').fillColor('#CCCCCC').text('Chief Academic Officer LeveLearn', footerX, textStart + 18);

        // --- QR CODE ---
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
        
        doc.fillColor('#FFFFFF').fontSize(7).font('Helvetica-Bold').text('VERIFIKASI DIGITAL', qrX - 15, qrY + 75, { width: 100, align: 'center' });

        doc.end();

    } catch (error) {
        console.error("CRITICAL ERROR:", error);
        if (!res.headersSent) {
            res.status(500).json({ error: "Terjadi kesalahan internal", detail: error.message });
        }
    }
};