var express = require('express');
var router = express.Router();

const workoutsCtrl = require('../controllers/workouts')

// GET /exercises
router.get('/template', workoutsCtrl.exercises);

// GET /history
router.get('/history', workoutsCtrl.history);

// GET /workouts
router.get('/workouts', workoutsCtrl.workouts);

// GET /profile
router.get('/profile', workoutsCtrl.profile);

// POST workout
router.post('/', workoutsCtrl.create)

// POST exercise

// router.post('/template')


module.exports = router;
