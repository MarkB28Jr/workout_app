var express = require('express');
var router = express.Router();

const workoutsCtrl = require('../controllers/workouts')


// GET /history
router.get('/history', workoutsCtrl.history);
// GET /workouts
router.get('/workouts', workoutsCtrl.workouts);
// GET /exercises
router.get('/template', workoutsCtrl.exercises);
// POST workout
router.post('/', workoutsCtrl.create)


// router.post('/', workoutsCtrl.createExercise)

// GET /profile
// router.get('/profile', workoutsCtrl.profile);

module.exports = router;
