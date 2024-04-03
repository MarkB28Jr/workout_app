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
const workouts = async (req, res) => {
    res.render('workouts/workout', { title: 'Workouts'})
}

// // PROFILE
const profile = async (req, res) => {
    res.render('workouts/profile', { title: 'Profile'})
}

const create = async (req, res) => {
    try {
        await Workout.create(req.body);
        res.redirect('/workouts')
    } catch (err) {
        console.log(err)
        res.status(500).send('Failed to make Template')
    }
}



module.exports = {
    history,
    workouts,
    template,
    profile,
    create,
}