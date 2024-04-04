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

const createArr = async (req, res) => {
    const flight = await Flight.findById(req.params.id);
    flight.destinations.push(req.body)
    const now = new Date();
    Flight.arrivals = now;
    const dt = now;
    let departDefault = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departDefault += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    try {
        await flight.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/flights/${flight._id}`)
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