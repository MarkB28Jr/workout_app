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
    try {
        const workout = await Workout.findById(req.params.id).populate('exerciseData').exec();
        if (!workout) {
            console.log("Workout not found")
            return res.status(404).send('Workout not found');
        }
        const exerciseData = workout.exerciseData;
        res.render('workouts/show', { title: 'Workout Details', workout, exerciseData });
    } catch (err) {
        console.error('Error finding workout or exercise:', err);
        res.status(500).send('Internal Server Error');
    }
}

// NEW EXERCISES BY PUSHING
const newExercise = async (req, res) => {
    const newExercise = new Workout();
    res.render('workouts/new', { title: 'Create the Workout You want to do', newExercise })
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
    const workout = await Workout.findById(req.params.id);
    workout.exerciseData.push(req.body)
    try {
        await workout.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect(`workouts/${workout._id}`)
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




// PROFILE PAGE IF I HAVE TIME OR AFTER MVP
// const profile = async (req, res) => {
//     res.render('workouts/profile', { title: 'Profile' })
// }