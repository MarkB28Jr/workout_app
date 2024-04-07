var express = require('express');
var router = express.Router();

const workoutsCtrl = require('../controllers/workouts')

// GET /index
router.get('/', workoutsCtrl.index);
// GET /exercises
router.get('/new', workoutsCtrl.new);
// GET /workouts
router.get('/:id', workoutsCtrl.show);
// POST workout
router.post('/', workoutsCtrl.create)
// GET Workout Details page
router.get('/:id', workoutsCtrl.viewWorkout);
// // POST /push exercises in by id
router.post('/:id/details', workoutsCtrl.createExercise)
// DELETE
router.delete('/:id', workoutsCtrl.delete)
// GET /profile
// router.get('/profile', workoutsCtrl.profile);

module.exports = router;
