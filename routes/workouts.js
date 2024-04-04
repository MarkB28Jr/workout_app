var express = require('express');
var router = express.Router();

const workoutsCtrl = require('../controllers/workouts')

// GET /index
router.get('/index', workoutsCtrl.index);
// GET /workouts
router.get('/workouts', workoutsCtrl.workouts);
// GET /exercises
router.get('/template', workoutsCtrl.exercises);
// POST workout
router.post('/', workoutsCtrl.create)
// POST /push exercises in by id
router.post('/:id/workouts', workoutsCtrl.createExercise)

// GET /profile
// router.get('/profile', workoutsCtrl.profile);

module.exports = router;
