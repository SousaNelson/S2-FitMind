const express = require('express');
const router = express.Router();
const MeditationController = require('../controllers/MeditacaoController');

router.get('/', MeditationController.getAllMeditations);
router.get('/:id', MeditationController.getMeditationById);
router.post('/', MeditationController.createMeditation);
router.put('/:id', MeditationController.updateMeditation);
router.delete('/:id', MeditationController.deleteMeditation);

module.exports = router;
