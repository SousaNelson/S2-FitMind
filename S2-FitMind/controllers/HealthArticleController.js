const  HealthArticle  = require('../models/healtharticle');

exports.getAllHealthArticles = async (req, res) => {
  try {
    const articles = await HealthArticle.findAll();
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
};

exports.getHealthArticleById = async (req, res) => {
  try {
    const article = await HealthArticle.findByPk(req.params.id);
    if (article) {
      res.json(article);
    } else {
      res.status(404).json({ error: 'Artigo não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Falha ao buscar artigo' });
  }
};

exports.createHealthArticle = async (req, res) => {
  try {
    const { title, content, author, publishedDate } = req.body;
    const newArticle = await HealthArticle.create({ title, content, author, publishedDate });
    res.status(201).json(newArticle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Falha ao criar artigo' });
  }
};

exports.updateHealthArticle = async (req, res) => {
  try {
    const { title, content, author, publishedDate } = req.body;
    const [updated] = await HealthArticle.update({ title, content, author, publishedDate }, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedArticle = await HealthArticle.findByPk(req.params.id);
      res.status(200).json(updatedArticle);
    } else {
      res.status(404).json({ error: 'Artigo não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Falha ao atualizar artigo' });
  }
};

exports.deleteHealthArticle = async (req, res) => {
  try {
    const deleted = await HealthArticle.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Artigo não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Falha ao eliminar artigo' });
  }
};


