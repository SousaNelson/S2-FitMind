const Video = require('../models/videoFisica');

exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.findAll();
    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Falha ao buscar videos' });
  }
};

exports.getVideoById = async (req, res) => {
  try {
    const video = await Video.findByPk(req.params.id);
    if (video) {
      res.json(video);
    } else {
      res.status(404).json({ error: 'Video não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Falha ao buscar video' });
  }
};

exports.createVideo = async (req, res) => {
  try {
    const { name, duration, resolution } = req.body;
    const newVideo = await Video.create({ name, duration, resolution });
    res.status(201).json(newVideo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Falha ao criar video' });
  }
};

exports.updateVideo = async (req, res) => {
  try {
    const { name, duration, resolution } = req.body;
    const [updated] = await Video.update({ name, duration, resolution }, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedVideo = await Video.findByPk(req.params.id);
      res.status(200).json(updatedVideo);
    } else {
      res.status(404).json({ error: 'Video não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Falha ao atualizar video' });
  }
};

exports.deleteVideo = async (req, res) => {
  try {
    const deleted = await Video.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Video não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Falha ao eliminar video' });
  }
};


