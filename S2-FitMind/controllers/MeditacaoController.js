const Meditation  = require('../models/meditaçao');

exports.getAllMeditations = async (req, res) => {
  try {
    const meditations = await Meditation.findAll();
    res.json(meditations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Falha ao buscar meditações' });
  }
};

exports.getMeditationById = async (req, res) => {
  try {
    const meditation = await Meditation.findByPk(req.params.id);
    if (meditation) {
      res.json(meditation);
    } else {
      res.status(404).json({ error: 'Meditação não encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Falha ao buscar meditações' });
  }
};

exports.createMeditation = async (req, res) => {
  try {
    const { date, duration, type } = req.body;
    const newMeditation = await Meditation.create({ date, duration, type });
    res.status(201).json(newMeditation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Falha ao criar meditações' });
  }
};

exports.updateMeditation = async (req, res) => {
  try {
    const { date, duration, type } = req.body;
    const [updated] = await Meditation.update({ date, duration, type }, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedMeditation = await Meditation.findByPk(req.params.id);
      res.status(200).json(updatedMeditation);
    } else {
      res.status(404).json({ error: 'Meditação não encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Falha ao atualizar meditações' });
  }
};

exports.deleteMeditation = async (req, res) => {
  try {
    const deleted = await Meditation.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Meditação não encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Falha ao eliminar meditações' });
  }
};

