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
        const workout = await Workout.findById(req.params.id).exec()
        if (!workout) {
            return res.status(404).send('Workout not found');
        }
        res.render('workouts/show', { title: 'Workout Data', workout});
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

// Delete an exercise from a workout
const deleteExercise = async (req, res) => {
    const workoutId = req.params.id;
    const exerciseIndex = req.params.exerciseIndex;
    try {
      const workout = await Workout.findById(workoutId);
      if (!workout) {
        return res.status(404).send('Workout not found');
      }
      workout.exerciseData.splice(exerciseIndex, 1);
      await workout.save();
  
      res.redirect('back');
    } catch (error) {
      console.error('Error deleting exercise:', error);
      res.status(500).send('Internal Server Error');
    }
  };


// Create Exercises Data in details/index
const createExercise = async (req, res) => {
    const workout = await Workout.findById(req.params.id);
    workout.exerciseData.push(req.body)
    if (!workout) {
        return res.status(404).send('Could not create Exercises Data');
    }
    try {
        await workout.save()
        res.redirect('.')
    } catch (err) {
        console.log(err)
    }
}

// View the details page to input Exercise Data
const viewDetails = async (req, res) => {
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
    viewDetails,
    deleteExercise
}

