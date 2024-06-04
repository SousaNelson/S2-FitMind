const express = require('express');
const router = express.Router();
const HealthArticleController = require('../controllers/HealthArticleController');

router.get('/', HealthArticleController.getAllHealthArticles);
router.get('/:id', HealthArticleController.getHealthArticleById);
router.post('/', HealthArticleController.createHealthArticle);
router.put('/:id', HealthArticleController.updateHealthArticle);
router.delete('/:id', HealthArticleController.deleteHealthArticle);

module.exports = router;
