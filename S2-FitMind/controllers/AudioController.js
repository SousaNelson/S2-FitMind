const  Audio  = require('../models/audio');

exports.getAllAudios = async (req, res) => {
  try {
    const audios = await Audio.findAll();
    res.json(audios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Falha ao buscar áudios' });
  }
};

exports.getAudioById = async (req, res) => {
  try {
    const audio = await Audio.findByPk(req.params.id);
    if (audio) {
      res.json(audio);
    } else {
      res.status(404).json({ error: 'Audio não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Falha ao buscar áudios' });
  }
};

exports.createAudio = async (req, res) => {
  try {
    const { name, duration, location } = req.body;
    const newAudio = await Audio.create({ name, duration, location });
    res.status(201).json(newAudio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Falha ao criar audio' });
  }
};

exports.updateAudio = async (req, res) => {
  try {
    const { name, duration, location } = req.body;
    const [updated] = await Audio.update({ name, duration, location }, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedAudio = await Audio.findByPk(req.params.id);
      res.status(200).json(updatedAudio);
    } else {
      res.status(404).json({ error: 'Audio não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Falha ao atualizar audio' });
  }
};

exports.deleteAudio = async (req, res) => {
  try {
    const deleted = await Audio.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Audio não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Falha ao eliminar audio' });
  }
};

