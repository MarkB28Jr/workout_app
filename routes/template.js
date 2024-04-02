var express = require('express');
var router = express.Router();

const templateCtrl = require('../controllers/templates')

// GET /exercises
router.get('/index', templateCtrl.exercise);

// GET /history
router.get('/history', templateCtrl.history);






module.exports = router;