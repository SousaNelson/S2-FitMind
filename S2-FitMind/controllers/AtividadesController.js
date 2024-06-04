const Activity  = require('../models/atividades');

exports.getAllActivities = async (req, res) => {
  const activities = await Activity.findAll();
  res.json(activities);
};

exports.getActivity = async (req, res) => {
  const activity = await Activity.findByPk(req.params.id);
  if (activity) {
    res.json(activity);
  } else {
    res.status(404).send('Atividade não encontrada');
  }
};

exports.createActivity = async (req, res) => {
  const newActivity = await Activity.create(req.body);
  res.status(201).json(newActivity);
};

exports.updateActivity = async (req, res) => {
  const [updated] = await Activity.update(req.body, {
    where: { id: req.params.id }
  });
  if (updated) {
    const updatedActivity = await Activity.findByPk(req.params.id);
    res.status(200).json(updatedActivity);
  } else {
    res.status(404).send('Atividade não encontrada');
  }
};

exports.deleteActivity = async (req, res) => {
  const deleted = await Activity.destroy({
    where: { id: req.params.id }
  });
  if (deleted) {
    res.status(204).send();
  } else {
    res.status(404).send('Atividade não encontrada');
  }
};
