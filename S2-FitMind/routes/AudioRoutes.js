const express = require('express');
const router = express.Router();
const AudioController = require('../controllers/AudioController');

router.get('/get-audio', AudioController.getAllAudios);
router.get('/:id', AudioController.getAudioById);
router.post('/', AudioController.createAudio);
router.put('/:id', AudioController.updateAudio);
router.delete('/:id', AudioController.deleteAudio);

module.exports = router;
