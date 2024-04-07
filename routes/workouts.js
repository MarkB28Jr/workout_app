var express = require('express');
var router = express.Router();

const workoutsCtrl = require('../controllers/workouts')

// GET /index
router.get('/index', workoutsCtrl.index);
// GET /workouts
router.get('/workouts/:id', workoutsCtrl.show);
// GET /exercises
router.get('/new', workoutsCtrl.new);
// POST workout
router.post('/', workoutsCtrl.create)
// POST /push exercises in by id
router.post('/:id/details', workoutsCtrl.createExercise)
// DELETE
router.delete('/:id', workoutsCtrl.delete)
// GET Workout Details page
router.get('/:id/details', workoutsCtrl.viewWorkout);
// GET /profile
// router.get('/profile', workoutsCtrl.profile);

module.exports = router;
