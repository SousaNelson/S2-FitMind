const { Appointment, Patient, Professional } = require('../models/agendamento');

exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll({
      include: [
        { model: Patient, as: 'paciente' },
        { model: Professional, as: 'professional' }
      ]
    });
    res.json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Falha ao buscar agendamentos' });
  }
};

exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findByPk(req.params.id, {
      include: [
        { model: Patient, as: 'paciente' },
        { model: Professional, as: 'professional' }
      ]
    });
    if (appointment) {
      res.json(appointment);
    } else {
      res.status(404).json({ error: 'Agendamento não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Falha ao buscar agendamentos' });
  }
};

exports.createAppointment = async (req, res) => {
  try {
    const { patientId, professionalId, date, time, type, notes } = req.body;
    const newAppointment = await Appointment.create({ patientId, professionalId, date, time, type, notes });
    res.status(201).json(newAppointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Falha ao criar agendamentos' });
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    const { patientId, professionalId, date, time, type, notes } = req.body;
    const [updated] = await Appointment.update({ patientId, professionalId, date, time, type, notes }, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedAppointment = await Appointment.findByPk(req.params.id);
      res.status(200).json(updatedAppointment);
    } else {
      res.status(404).json({ erro: 'Agendamento não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Falha ao atualizar agendamento' });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    const deleted = await Appointment.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ erro: 'Agendamento não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Falha ao eliminar agendamento' });
  }
};

