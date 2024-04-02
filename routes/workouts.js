var express = require('express');
var router = express.Router();

const workoutsCtrl = require('../controllers/workouts')

// GET /exercises
router.get('/index', workoutsCtrl.exercise);

// GET /history
router.get('/history', workoutsCtrl.history);

// GET /workouts
router.get('/workouts', workoutsCtrl.workout);

// GET /profile
router.get('/profile', workoutsCtrl.profile);


module.exports = router;
