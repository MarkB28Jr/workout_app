const Workout = require('../models/workout');

// EXERCISES
const exercise = async (req, res) => {
    res.render('exercises/index', { title: 'Exercise'})
}

// SHOW
const history = async (req, res) => {
    res.render('workouts/history', { title: 'History'})
}

// CREATE
const workout = async (req, res) => {
    res.render('workouts/workout', { title: 'Workouts'})
}

// PROFILE
const profile = async (req, res) => {
    res.render('workouts/profile', { title: 'Profile'})
}

module.exports = {
    exercise,
    history,
    workout,
    profile,
}