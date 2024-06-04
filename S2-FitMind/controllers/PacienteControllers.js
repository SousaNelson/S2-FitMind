const Patient = require('../models/paciente');

exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch patients' });
  }
};

exports.getPatientById = async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await Patient.findByPk(id);
    if (patient) {
      res.json(patient);
    } else {
      res.status(404).json({ error: 'Patient not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch patient' });
  }
};

exports.createPatient = async (req, res) => {
  const { name, age, gender, address, phone, email, weight, height, physicalActivities, dailyDiet, medications } = req.body;
  try {
    const newPatient = await Patient.create({ name, age, gender, address, phone, email, weight, height, physicalActivities, dailyDiet, medications });
    res.status(201).json(newPatient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create patient' });
  }
};

exports.updatePatient = async (req, res) => {
  const { id } = req.params;
  const { name, age, gender, address, phone, email, weight, height, physicalActivities, dailyDiet, medications } = req.body;
  try {
    const [updated] = await Patient.update(
      { name, age, gender, address, phone, email, weight, height, physicalActivities, dailyDiet, medications },
      { where: { id } }
    );
    if (updated) {
      const updatedPatient = await Patient.findByPk(id);
      res.status(200).json(updatedPatient);
    } else {
      res.status(404).json({ error: 'Patient not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update patient' });
  }
};

exports.deletePatient = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Patient.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Patient not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete patient' });
  }
};
