const Workout = require('../models/workout');
// const Exercises = require('../exercises.json')

// EXERCISES PAGE
const exercises = async (req, res) => {
    res.render('workouts/template', { title: 'Template' })
}

// HISTORY PAGE 
const history = async (req, res) => {
    try {
        const workouts = await Workout.find({})
        res.render('workouts/history', { title: 'History', workouts })
    } catch (err) {
        console.log(err)
        res.status(500).send('Error Finding  Workouts', workouts)
    }
}

// WORKOUTS Page
const workouts = async (req, res) => {
    res.render('workouts/workout', { title: 'Workouts' })
}


// CREATE EXERCISES IN Workout PAGE

const create = async (req, res) => {
    try {
        await Workout.create(req.body);
        res.redirect('/workouts/template')
    } catch (err) {
        console.log(err)
        res.status(500).send('Failed to make Execise')
    }
}








// HISTORY OF PREVIOUS WORKOUTS

// CREATE WORKOUT

// CREATE TEMPLATE

// DELETE WORKOUT




module.exports = {
    history,
    workouts,
    exercises,
    create,
    // createExercise,
}
// POST MVP CREATE MY OWN TYPE OF EXERCISES


// async function create(req, res) {
//     try {

//         await Workout.exercises.create(req.body);
//         // await workout.save();
//         res.redirect('/workouts/workouts');
//     } catch (err) {
//         console.log(err);
//         // res.render('movies/new', { errorMsg: err.message });
//     }
// }
// 

// PROFILE PAGE
// const profile = async (req, res) => {
//     res.render('workouts/profile', { title: 'Profile' })
// }