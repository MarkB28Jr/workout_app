const Exercise = require('../models/exercise');

// index 
const index = async (req, res) => {
    try {
        const exercise = await Exercise.find({})
        if (!exercise) {
            return res.status(404).send('Exercises not found');
        }
        res.render('exercises/index', { title: 'Exercises List', exercise })
    } catch (err) {
        console.log(err)
        res.status(500).send('Error Finding  Exercises')
    }
}

// Show all Data
const show = async (req, res) => {
    try {
        const exercise = await Exercise.findById(req.params.id).exec()
        if (!exercise) {
            return res.status(404).send('exercise not found');
        }
        res.render('exercises/show', { title: 'Exercise Data', exercise });
    } catch (err) {
        console.error('Error finding exercise or exercise:', err);
        res.status(500).send('Internal Server Error');
    }
}

// NEW EXERCISES
const newExercise = (req, res) => {
    try {
        const exercise = new Exercise();
        res.render('exercises/new', { title: 'Create Your ', exercise })
    } catch (err) {
        console.log(err)
        res.status(500).send('Error Creating Your exercise')
    }
}

// CREATE EXERCISES IN Create PAGE
const create = async (req, res) => {
    try {
        const exercise = await Exercise.create(req.body);
        res.render('exercises/new', { title: 'Create Your exercise', exercise })
    } catch (err) {
        console.log(err)
        res.status(500).send('Failed to make Execise')
    }
}


// Delete exercise from DB
// const deleteexercise = async (req, res) => {
//     const exercise = req.params.id;
//     try {
//         await exercise.findByIdAndDelete(exercise);
//         if (!exercise) {
//             return res.status(404).send('exercise not found');
//         }
//         res.redirect('.')
//     } catch (error) {
//         console.error('Error deleting exercise:', error);
//         res.status(500).json({ error: 'Unable to delete exercise' });
//     }
// };

// Delete an exercise from a exercise
// const deleteExercise = async (req, res) => {
//     const exerciseId = req.params.id;
//     const exerciseIndex = req.params.exerciseIndex;
//     try {
//         const exercise = await exercise.findById(exerciseId);
//         if (!exercise) {
//             return res.status(404).send('exercise not found');
//         }
//         exercise.exerciseData.splice(exerciseIndex, 1);
//         await exercise.save();

//         res.redirect('back');
//     } catch (error) {
//         console.error('Error deleting exercise:', error);
//         res.status(500).send('Internal Server Error');
//     }
// }


// Create Exercises Data in details/index
// const createExercise = async (req, res) => {
//     const exercise = await exercise.findById(req.params.id);
//     exercise.exerciseData.push(req.body)
//     if (!exercise) {
//         return res.status(404).send('Could not create Exercises Data');
//     }
//     try {
//         await exercise.save()
//         res.redirect('.')
//     } catch (err) {
//         console.log(err)
//     }
// }

// View the details page to input Exercise Data
// const viewDetails = async (req, res) => {
//     try {
//         const exercise = await exercise.findById(req.params.id).populate('exerciseData') .exec();
//         if(!exercise){
//             return res.status(404).send('exercise not Found!');
//         }
//         res.render('details/index', { title: 'exercise Data', exercise, exerciseData: exercise.exerciseData || []});
//     } catch (err) {
//         console.log(err);
//         res.status(500).send('Server Error');
//     }
// }

module.exports = {
    index,
    show,
    create,
    new: newExercise,
    // createExercise,
    // delete: deleteexercise,
    // viewDetails,
    // deleteExercise
}