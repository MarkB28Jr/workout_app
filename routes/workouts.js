var express = require('express');
var router = express.Router();

const workoutsCtrl = require('../controllers/workouts')

// GET /index
router.get('/index', workoutsCtrl.index);
// GET /workouts
router.get('/show', workoutsCtrl.show);
// GET /exercises
router.get('/new', workoutsCtrl.new);
// POST workout
router.post('/', workoutsCtrl.create)
// POST /push exercises in by id
router.post('/:id/workouts', workoutsCtrl.createExercise)

// GET /profile
// router.get('/profile', workoutsCtrl.profile);

module.exports = router;
