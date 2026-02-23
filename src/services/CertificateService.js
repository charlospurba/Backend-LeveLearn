const PDFDocument = require('pdfkit');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const path = require('path');
const fs = require('fs');
const QRCode = require('qrcode');

// IMPORT UserCourseService di bagian atas
const userCourseService = require('./UserCourseService');

exports.generateCertificate = async (userId, courseId, res) => {
    try {
        // 1. Validasi Input & Ambil data dari Database
        const uId = Number(userId);
        const cId = Number(courseId);

        const user = await prisma.user.findUnique({ where: { id: uId } });
        const course = await prisma.course.findUnique({ where: { id: cId } });

        if (!user || !course) {
            return res.status(404).json({ message: "Data User atau Course tidak ditemukan" });
        }

        // ==========================================
        // 2. LOGIKA PERHITUNGAN SCORE
        // ==========================================
        
        // Hitung total chapter di course ini
        const totalChaptersInCourse = await prisma.chapter.count({
            where: { courseId: cId }
        });

        // Ambil semua progress user di chapter-chapter course ini
        const userChapters = await prisma.userChapter.findMany({
            where: {
                userId: uId,
                chapter: {
                    courseId: cId
                }
            }
        });

        let totalAssessment = 0;
        let totalAssignment = 0;

        userChapters.forEach(uc => {
            totalAssessment += (uc.assessmentGrade || 0);
            totalAssignment += (uc.assignmentScore || 0);
        });

        // Hindari pembagian dengan 0 jika course belum punya chapter
        const chapterCount = totalChaptersInCourse > 0 ? totalChaptersInCourse : 1;

        // Hitung rata-rata dan final score (dibulatkan agar rapi)
        const avgAssessment = Math.round(totalAssessment / chapterCount);
        const avgAssignment = Math.round(totalAssignment / chapterCount);
        const finalScore = Math.round((avgAssessment + avgAssignment) / 2);

        // ==========================================
        // 3. LOGIKA AUTO-GENERATE NOMOR SERTIFIKAT
        // ==========================================
        let orderCount = 1;
        try {
            orderCount = await prisma.userCourse.count({
                where: { courseId: cId }
            });
            if (orderCount === 0) orderCount = 1;
        } catch (dbError) {
            console.error("Gagal menghitung nomor sertifikat, menggunakan nomor default.");
            orderCount = Math.floor(Math.random() * 100) + 1; 
        }

        const year = new Date().getFullYear();
        const formattedNumber = String(orderCount).padStart(3, '0');
        const certificateNo = `NO: ${formattedNumber}/ITD/IF/${year}`;

        // ==========================================
        // 4. INISIALISASI DOKUMEN PDF
        // ==========================================
        const doc = new PDFDocument({ 
            layout: 'landscape', 
            size: 'A4', 
            margin: 0,
            info: { Title: `Sertifikat ${course.name} - ${user.name}` } 
        });

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=Sertifikat_${uId}.pdf`);

        doc.pipe(res);

        const width = doc.page.width;
        const height = doc.page.height;

        // --- BACKGROUND DARK TEAL ---
        doc.rect(0, 0, width, height).fill('#1A3C40'); 

        // --- BORDER EMAS MEWAH ---
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

        // --- HEADER RIBBON ---
        const ribbonWidth = 220; 
        const ribbonHeight = 135; 
        const ribbonX = width - ribbonWidth - 30; // Menempel pada garis border dalam

        const goldGradient = doc.linearGradient(ribbonX, 0, ribbonX + ribbonWidth, 0);
        goldGradient.stop(0, '#D4AF37').stop(0.5, '#F9E498').stop(1, '#B8860B');

        doc.rect(ribbonX, 0, ribbonWidth, ribbonHeight).fill(goldGradient);
        doc.rect(ribbonX, ribbonHeight, ribbonWidth, 5).fill('#8B6508');

        // Text Ribbon Diperbesar
        doc.fillColor('#1A3C40') 
           .fontSize(16).font('Helvetica-Bold').text('CERTIFICATE', ribbonX, 40, { width: ribbonWidth, align: 'center' })
           .fontSize(14).font('Helvetica').text('OF', ribbonX, 63, { width: ribbonWidth, align: 'center' })
           .fontSize(18).font('Helvetica-Bold').text('COMPLETION', ribbonX, 85, { width: ribbonWidth, align: 'center' });

        // --- NOMOR SERTIFIKAT ---
        doc.fillColor('#D4AF37')
           .fontSize(14).font('Helvetica-Bold').text(certificateNo, 0, 130, { align: 'center' });

        // --- KONTEN TENGAH ---
        doc.fillColor('#FFFFFF').fontSize(16).font('Helvetica').text('Diberikan kepada', 0, 180, { align: 'center' });

        // Nama Diperbesar
        doc.fontSize(48).font('Times-BoldItalic').fillColor('#D4AF37')
           .text(user.name.toUpperCase(), 0, 215, { align: 'center' });

        // Garis Pembatas Dipertebal sedikit
        doc.moveTo(width / 4, 280).lineTo((width / 4) * 3, 280).lineWidth(1.5).stroke('#D4AF37');

        doc.fillColor('#FFFFFF').fontSize(16).font('Helvetica').text('Atas kelulusannya pada kelas', 0, 310, { align: 'center' });

        // Nama Kelas Diperbesar
        doc.fontSize(36).font('Helvetica-Bold').fillColor('#FFFFFF').text(course.name, 0, 340, { align: 'center' });

        // --- MENAMPILKAN SCORE ---
        const scoreY = 390; // Dinaikkan sedikit dari 405 agar aman dari tanggal
        doc.fillColor('#F9E498').fontSize(16).font('Helvetica-Bold')
           .text(`Final Grade: ${finalScore}`, 0, scoreY, { align: 'center' });
        
        doc.fillColor('#CCCCCC').fontSize(12).font('Helvetica')
           .text(`Assessment: ${avgAssessment}   |   Assignment: ${avgAssignment}`, 0, scoreY + 22, { align: 'center' });

        // --- FOOTER RATA KIRI (TANGGAL & TANDA TANGAN) ---
        const footerX = 80;
        const footerY = 415; // DINAIKKAN dari 440 ke 415 agar tidak menabrak garis bawah

        const tgl = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
        doc.fillColor('#D4AF37').fontSize(14).font('Helvetica-Bold').text(tgl, footerX, footerY);

        const signPath = path.resolve(__dirname, '../../src/assets/signature.png');
        if (fs.existsSync(signPath)) {
            // Posisi tanda tangan disesuaikan
            doc.image(signPath, footerX + 20, footerY + 10, { width: 140 });
        }

        const textStart = footerY + 95; // Jarak teks nama dengan tanda tangan dirapatkan
        doc.fillColor('#FFFFFF').fontSize(15).font('Helvetica-Bold')
           .text('Ranty Deviana Siahaan, S.Kom., M.Eng.', footerX, textStart);
        
        doc.fontSize(11).font('Helvetica').fillColor('#CCCCCC')
           .text('Chief Academic Officer LeveLearn', footerX, textStart + 18);

        // --- AUTO-GENERATE QR CODE ---
        const qrX = width - 140;
        const qrY = height - 145; 
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
        
        doc.fillColor('#FFFFFF').fontSize(8).font('Helvetica-Bold')
           .text('VERIFIKASI DIGITAL', qrX - 15, qrY + 75, { width: 100, align: 'center' });

        doc.end();

    } catch (error) {
        console.error("CRITICAL ERROR:", error);
        if (!res.headersSent) {
            res.status(500).json({ error: "Terjadi kesalahan internal", detail: error.message });
        }
    }
};