const Workout = require('../models/workout');

// SHOW ALL Workout
const exercise = async (req, res) => {
    res.render('workouts/exercise', { title: 'Exercise'})
}

// SHOW
const history = async (req, res) => {
    res.render('workouts/history', { title: 'History'})
}

// CREATE
const workout = async (req, res) => {
    res.render('workouts/workouts', { title: 'Workouts'})
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