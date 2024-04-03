const Workout = require('../models/workout');

// EXERCISES
const template = async (req, res) => {
    res.render('workouts/template', { title: 'Template'})
}

// SHOW
const history = async (req, res) => {
    res.render('workouts/history', { title: 'History'})
}

// CREATE
const workout = async (req, res) => {
    res.render('workouts/workout', { title: 'Workouts'})
}

// // PROFILE
const profile = async (req, res) => {
    res.render('workouts/profile', { title: 'Profile'})
}

module.exports = {
    history,
    workout,
    template,
    profile,
}