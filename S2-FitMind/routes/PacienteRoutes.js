const express = require('express');
const router = express.Router();
const PatientController = require('../controllers/PacienteControllers');

router.get('/get-patient', PatientController.getAllPatients);
router.get('/:id', PatientController.getPatientById);
router.post('/', PatientController.createPatient);
router.put('/:id', PatientController.updatePatient);
router.delete('/:id', PatientController.deletePatient);

module.exports = router;
