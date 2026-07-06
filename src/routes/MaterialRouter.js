const express = require('express');
const materialController = require('../controllers/MaterialController');

const router = express.Router();

router.get('/material', materialController.getAllMaterials);

router.get('/material/:id', materialController.getMaterialById);

router.post('/material', materialController.createMaterial);

router.put('/material/:id', materialController.updateMaterial);

router.delete('/material/:id', materialController.deleteMaterial);

module.exports = router;
