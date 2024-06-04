const Session = require('../models/sessao');

exports.getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.findAll();
    res.json(sessions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error:'Falha ao buscar sessões' });
  }
};

exports.getSessionById = async (req, res) => {
  try {
    const session = await Session.findByPk(req.params.id);
    if (session) {
      res.json(session);
    } else {
      res.status(404).json({ error:'Sessão não encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error:'Falha ao buscar sessões' });
  }
};

exports.createSession = async (req, res) => {
  try {
    const { date, duration, therapyType } = req.body;
    const newSession = await Session.create({ date, duration, therapyType });
    res.status(201).json(newSession);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error:'Falha ao criar sessão' });
  }
};

exports.updateSession = async (req, res) => {
  try {
    const { date, duration, therapyType } = req.body;
    const [updated] = await Session.update({ date, duration, therapyType }, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedSession = await Session.findByPk(req.params.id);
      res.status(200).json(updatedSession);
    } else {
      res.status(404).json({ error:'Sessão não encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error:'Falha ao atualizar sessão' });
  }
};

exports.deleteSession = async (req, res) => {
  try {
    const deleted = await Session.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Sessão não encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Falha ao eliminar sessão' });
  }
};


