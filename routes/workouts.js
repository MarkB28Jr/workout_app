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
router.get('/:id/details', workoutsCtrl.viewDetails);
// // POST /push exercises in by id
router.post('/:id/data', workoutsCtrl.createExercise)
// DELETE
router.delete('/:id', workoutsCtrl.delete)
// DELETE Exercise Data
router.delete('/:id/exerciseData/:exerciseIndex', workoutsCtrl.deleteExercise);
// GET /profile
// router.get('/profile', workoutsCtrl.profile);

module.exports = router;
