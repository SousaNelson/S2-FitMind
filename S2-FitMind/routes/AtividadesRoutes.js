const express = require('express');
const router = express.Router();
const ActivityController = require('../controllers/AtividadesController');

router.get('/get-activities', ActivityController.getAllActivities);
router.get('/:id', ActivityController.getActivity);
router.post('/', ActivityController.createActivity);
router.put('/:id', ActivityController.updateActivity);
router.delete('/:id', ActivityController.deleteActivity);

module.exports = router;
