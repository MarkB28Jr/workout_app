var express = require('express');
var router = express.Router();

const profileCtrl = require('../controllers/profiles')

// GET /index
router.get('/', profileCtrl.index);
// GET /exercises
router.get('/new', profileCtrl.new);
// GET /workouts
router.get('/:id', profileCtrl.show);
// POST workout
router.post('/', profileCtrl.create);


module.exports = router;