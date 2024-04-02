const Template = require('../models/workout');

// EXERCISES
const exercise = async (req, res) => {
    res.render('exercises/index', { title: 'Exercise'})
}


// PROFILE
const template = async (req, res) => {
    res.render('workouts/profile', { title: 'Profile'})
}

module.exports = {
    exercise,
    template
}