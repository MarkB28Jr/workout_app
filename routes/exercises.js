var express = require('express');
var router = express.Router();

const exercisesCtrl = require('../controllers/exercises')

// GET /index
router.get('/', exercisesCtrl.index);
// GET /exercises
router.get('/new', exercisesCtrl.new);
// GET /workouts
router.get('/:id', exercisesCtrl.show);
// POST workout
router.post('/', exercisesCtrl.create)
// GET Workout Details page
// router.get('/:id/details', exercisesCtrl.viewDetails);
// // POST /push exercises in by id
// router.post('/:id/data', exercisesCtrl.createExercise)
// DELETE
// router.delete('/:id', exercisesCtrl.delete)



module.exports = router;