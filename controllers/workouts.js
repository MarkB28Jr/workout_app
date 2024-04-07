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
    try {
        const workout = new Workout();
        res.render('workouts/new', { title: 'Create Your Workout', workout })
    } catch (err) {
        console.log(err)
        res.status(500).send('Error Creating Your Workout')
    }
}

// Show all Data
const show = async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id).populate('exerciseData').exec()
        if (!workout) {
            return res.status(404).send('Workout not found');
        }
        res.render('workouts/show', { title: 'Workout Details', workout, exerciseData });
    } catch (err) {
        console.error('Error finding workout or exercise:', err);
        res.status(500).send('Internal Server Error');
    }
}

// CREATE EXERCISES IN Create PAGE
const create = async (req, res) => {
    try {
        const workout = await Workout.create(req.body);
        res.render('workouts/new', { title: 'Create Your Workout', workout })
    } catch (err) {
        console.log(err)
        res.status(500).send('Failed to make Execise')
    }
}

// Delete Workout from DB
const deleteWorkout = async (req, res) => {
    const workout = req.params.id;
    try {
        await Workout.findByIdAndDelete(workout);
        res.render('workouts/index')
        res.status(204).redirect('/')
    } catch (error) {
        console.error('Error deleting Workout:', error);
        res.status(500).json({ error: 'Unable to delete Workout' });
    }
};

// Create Exercises Data in details/index
const createExercise = async (req, res) => {
    const workout = await Workout.findById(req.params.id);
    workout.exerciseData.push(req.body)
    try {
        await workout.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/workouts/${workout._id}/details`)
}

// View the details page to input Exercise Data
const viewWorkout = async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id).populate('exerciseData').exec();
        if(!workout){
            return res.status(404).send('Workout not Found!')
        }
        res.render('workouts/index', { title: 'Workout Data', workout})
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error')
    }
}


module.exports = {
    index,
    show,
    new: newExercise,
    create,
    createExercise,
    delete: deleteWorkout,
    viewWorkout
}