const certificateService = require("../services/CertificateService");

exports.downloadCertificate = async (req, res) => {
    const userId = parseInt(req.params.userId);
    const courseId = parseInt(req.params.courseId);

    try {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=Sertifikat_LeveLearn_${courseId}.pdf`);

        await certificateService.generateCertificate(userId, courseId, res);
    } catch (error) {
        console.error(error);
        res.status(500).send("Gagal generate sertifikat");
    }
};