const Workout = require('../models/workout');
const Exercises = require('../exercises.json')

// index PAGE 
const index = async (req, res) => {
    try {
        const workouts = await Workout.find({})
        res.render('workouts/index', { title: 'All Created Workouts', workouts })
    } catch (err) {
        console.log(err)
        res.status(500).send('Error Finding  Workouts')
    }
}

// Show Page
const show = async (req, res) => {
    res.render('workouts/show', { title: 'Enter Exercise  Data for Workouts' })
}

// NEW EXERCISES BY PUSHING
const newExercise = async (req, res) => {
    const newExercise = new Workout();
    res.render('workouts/new', { title: 'Create the Workout You want to do' })
}





// CREATE EXERCISES IN Template PAGE
const create = async (req, res) => {
    try {
        await Workout.create(req.body);
        res.redirect('/workouts/new')
    } catch (err) {
        console.log(err)
        res.status(500).send('Failed to make Execise')
    }
}

const createExercise = async (req, res) => {
    const flight = await Flight.findById(req.params.id);
    flight.destinations.push(req.body)

    try {
        await flight.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/flights/${flight._id}`)
}







// DELETE WORKOUT




module.exports = {
    index,
    show,
    new: newExercise,
    create,
    createExercise
}
// POST MVP CREATE MY OWN TYPE OF EXERCISES


    // DATE
    // const now = new Date();
    // Flight.arrivals = now;
    // const dt = now;
    // let departDefault = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    // departDefault += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;


// PROFILE PAGE IF I HAVE TIME OR AFTER MVP
// const profile = async (req, res) => {
//     res.render('workouts/profile', { title: 'Profile' })
// }