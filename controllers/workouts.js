const Workout = require('../models/workout');
const Exercises = require('../exercises.json')

// index 
const index = async (req, res) => {
    try {
        const workouts = await Workout.find({})
        res.render('workouts/index', { title: 'All Created Workouts', workouts })
    } catch (err) {
        console.log(err)
        res.status(500).send('Error Finding  Workouts')
    }
}

// NEW EXERCISES
const newExercise = (req, res) => {
    const workout = new Workout();
    res.render('workouts/new', { title: 'Create the Workout You want to do', workout })
}

// Show
const show = async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id)
        if (!workout) {
            return res.status(404).send('Workout not found');
        }
        res.render('workouts/show', { title: 'Workout Details', workout, });
    } catch (err) {
        console.error('Error finding workout or exercise:', err);
        res.status(500).send('Internal Server Error');
    }
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
    res.redirect(`/workouts/${workout._id}`)
}

// const deleteWorkout = async (req, res) => {
//     try {
//         const workout = await Workout.findByIdAndDelete(req.params.id);
//         if (!workout) {
//             res.status(404).send('Workout not Found')
//         }
//         workout.remove(req.params.id);
//         await workout.save();
//         res.render('workouts/index')
//     } catch (err) {
//         res.status(500).send('Server Error')
//     }
// }

const deleteWorkout = async (req, res) => {
    const workout = req.params.id;
    try {
      await Workout.findByIdAndDelete(workout);
      res.status(204).redirect('/')
    } catch (error) {
      console.error('Error deleting Workout:', error);
      res.status(500).json({ error: 'Unable to delete Workout' });
    }
  };


module.exports = {
    index,
    show,
    new: newExercise,
    create,
    createExercise,
    delete: deleteWorkout
}