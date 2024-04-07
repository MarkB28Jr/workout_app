const Workout = require('../models/workout');
// const Exercises = require('../exercises.json')

// index 
const index = async (req, res) => {
    try {
        const workouts = await Workout.find({})
        if (!workouts) {
            return res.status(404).send('Workout not found');
        }
        res.render('workouts/index', { title: 'Created Workouts', workouts })
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
        res.redirect(`workouts/${workout._id}/details`, { title: 'Workout Details', workout, exerciseData: workout.exerciseData || [] });
    } catch (err) {
        console.error('Error finding workout or exercise:', err);
        res.status(500).send('Internal Server Error');
    }
}

// CREATE EXERCISES IN Create PAGE
const create = async (req, res) => {
    try {
        const workout = await Workout.create(req.body);
        if (!workout) {
            return res.status(404).send('Exercise not found');
        }
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
        if (!workout) {
            return res.status(404).send('Workout not found');
        }
        res.redirect('.')
    } catch (error) {
        console.error('Error deleting Workout:', error);
        res.status(500).json({ error: 'Unable to delete Workout' });
    }
};

// Create Exercises Data in details/index
const createExercise = async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id);
        workout.exerciseData.push(req.body)
        if (!workout) {
            return res.status(404).send('Could not create Exercises Data');
        }
        await workout.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/workouts/${Workout._id}/details`)
}

// View the details page to input Exercise Data
const viewWorkout = async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id).populate('exerciseData') .exec();
        if(!workout){
            return res.status(404).send('Workout not Found!');
        }
        res.render('details/index', { title: 'Workout Data', workout, exerciseData: workout.exerciseData || []});
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
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

