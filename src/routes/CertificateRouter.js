const express = require("express");
const router = express.Router();
const certificateController = require("../controllers/CertificateController");

// Endpoint: /api/certificate/:userId/:courseId
router.get("/:userId/:courseId", certificateController.downloadCertificate);

module.exports = router;