const express = require('express');
const router = express.Router();
const SessionController = require('../controllers/SessaoController');

router.get('/get-sessoes', SessionController.getAllSessions);
router.get('/:id', SessionController.getSessionById);
router.post('/', SessionController.createSession);
router.put('/:id', SessionController.updateSession);
router.delete('/:id', SessionController.deleteSession);

module.exports = router;
