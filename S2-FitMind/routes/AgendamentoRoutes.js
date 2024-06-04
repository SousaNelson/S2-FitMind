const express = require('express');
const router = express.Router();
const AppointmentController = require('../controllers/AgendamentoControllers');

router.get('/get-agendamento', AppointmentController.getAllAppointments);
router.get('/:id', AppointmentController.getAppointmentById);
router.post('/', AppointmentController.createAppointment);
router.put('/:id', AppointmentController.updateAppointment);
router.delete('/:id', AppointmentController.deleteAppointment);

module.exports = router;
