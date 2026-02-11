const PDFDocument = require('pdfkit');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const path = require('path');
const fs = require('fs');
const QRCode = require('qrcode');

exports.generateCertificate = async (userId, courseId, res) => {
    // 1. Ambil data dari Database menggunakan Prisma
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const course = await prisma.course.findUnique({ where: { id: courseId } });

    if (!user || !course) throw new Error("Data User atau Course tidak ditemukan");

    // 2. Inisialisasi Dokumen PDF (Landscape A4)
    const doc = new PDFDocument({ 
        layout: 'landscape', 
        size: 'A4', 
        margin: 0,
        info: { Title: `Sertifikat ${course.name} - ${user.name}` } 
    });

    doc.pipe(res);

    const width = doc.page.width;
    const height = doc.page.height;

    // --- BACKGROUND DARK TEAL ---
    doc.rect(0, 0, width, height).fill('#1A3C40'); 

    // --- BORDER EMAS MEWAH (#D4AF37) ---
    doc.rect(20, 20, width - 40, height - 40).lineWidth(2).stroke('#D4AF37');
    doc.rect(30, 30, width - 60, height - 60).lineWidth(1).stroke('#D4AF37');

    // Ornamen Sudut
    const offset = 20;
    const len = 60;
    doc.lineWidth(2).strokeColor('#D4AF37');
    doc.moveTo(offset, offset + len).lineTo(offset, offset).lineTo(offset + len, offset).stroke();
    doc.moveTo(width - offset - len, offset).lineTo(width - offset, offset).lineTo(width - offset, offset + len).stroke();

    // --- HEADER: LOGO LEVELEARN ---
    const logoPath = path.resolve(__dirname, '../../src/assets/LeveLearn.png');
    if (fs.existsSync(logoPath)) {
        doc.image(logoPath, 60, 50, { width: 180 }); 
    }

    // --- HEADER RIBBON: GRADIENT & DEKORASI ---
    const ribbonWidth = 180;
    const ribbonHeight = 110;
    const ribbonX = width - 240;

    const goldGradient = doc.linearGradient(ribbonX, 0, ribbonX + ribbonWidth, 0);
    goldGradient.stop(0, '#D4AF37').stop(0.5, '#F9E498').stop(1, '#B8860B');

    doc.rect(ribbonX, 0, ribbonWidth, ribbonHeight).fill(goldGradient);
    doc.rect(ribbonX, ribbonHeight, ribbonWidth, 4).fill('#8B6508');

    doc.fillColor('#1A3C40')
       .fontSize(11).font('Helvetica-Bold').text('SERTIFIKAT', ribbonX + 10, 30, { width: ribbonWidth - 20, align: 'center' })
       .fontSize(13).text('KOMPETENSI', ribbonX + 10, 45, { width: ribbonWidth - 20, align: 'center' })
       .fontSize(11).text('KELULUSAN', ribbonX + 10, 65, { width: ribbonWidth - 20, align: 'center' });

    doc.moveTo(ribbonX + 40, 61).lineTo(ribbonX + ribbonWidth - 40, 61).lineWidth(1).stroke('#1A3C40');

    // --- KONTEN TENGAH ---
    doc.fillColor('#FFFFFF').fontSize(16).font('Helvetica').text('Diberikan kepada', 0, 190, { align: 'center' });

    doc.fontSize(48).font('Times-BoldItalic').fillColor('#D4AF37')
       .text(user.name.toUpperCase(), 0, 230, { align: 'center' });

    doc.moveTo(width / 4, 285).lineTo((width / 4) * 3, 285).lineWidth(1).stroke('#D4AF37');

    doc.fillColor('#FFFFFF').fontSize(16).font('Helvetica').text('Atas kelulusannya pada kelas', 0, 310, { align: 'center' });

    doc.fontSize(32).font('Helvetica-Bold').fillColor('#FFFFFF').text(course.name, 0, 350, { align: 'center' });

    // --- FOOTER RATA KIRI (SATU ARAH) ---
    const footerX = 80;
    const footerY = 405; 

    // 1. Tanggal
    const tgl = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    doc.fillColor('#D4AF37').fontSize(14).font('Helvetica-Bold').text(tgl, footerX, footerY);

    // 2. Tanda Tangan Gambar (DIGESER KE KANAN)
    const signPath = path.resolve(__dirname, '../../src/assets/signature.png');
    if (fs.existsSync(signPath)) {
        // footerX + 30 menggeser tanda tangan ke kanan dari garis lurus nama
        doc.image(signPath, footerX + 30, footerY + 10, { width: 160 });
    }

    // 3. Nama Pejabat & Jabatan (Tetap di footerX agar sejajar teks tanggal)
    const textStart = footerY + 110; 
    doc.fillColor('#FFFFFF').fontSize(15).font('Helvetica-Bold')
       .text('Ranty Deviana Siahaan, S.Kom., M.Eng.', footerX, textStart);
    
    doc.fontSize(11).font('Helvetica').fillColor('#CCCCCC')
       .text('Chief Academic Officer LeveLearn', footerX, textStart + 18);

    // --- AUTO-GENERATE QR CODE (POJOK KANAN BAWAH) ---
    const qrX = width - 140;
    const qrY = height - 140;
    const verificationUrl = `https://levelearn.com/verify/${courseId}-${userId}`;

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

    doc.end();
};