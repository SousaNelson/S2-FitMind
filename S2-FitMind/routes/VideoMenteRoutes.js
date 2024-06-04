const express = require('express');
const router = express.Router();
const VideoController = require('../controllers/VideoMenteController');

router.get('/', VideoController.getAllVideos);
router.get('/:id', VideoController.getVideoById);
router.post('/', VideoController.createVideo);
router.put('/:id', VideoController.updateVideo);
router.delete('/:id', VideoController.deleteVideo);

module.exports = router;
