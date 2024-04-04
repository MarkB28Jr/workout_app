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

// PROFILE PAGE
const profile = async (req, res) => {
    res.render('workouts/profile', { title: 'Profile' })
}

// CREATE EXERCISES IN Workout PAGE
// const create = async (req, res) => {
//     try {
//         await Workout.create(req.body);
//         res.redirect('/workouts/workouts')
//     } catch (err) {
//         console.log(err)
//         res.status(500).send('Failed to make Execise')
//     }
// }

const create = async (req, res) => {
    try {
      // Check if req.body.exercises is defined

      
      // Map the exercises array to the desired format

      const exercises = req.body.exercises
      const workout = new Workout({ exercises });
  
      await workout.save();
      res.redirect('/workouts/workouts')
    } catch (err) {
      console.log(err)
      res.status(500).send('Failed to make Workout')
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
    profile,
    create,
}
// POST MVP CREATE MY OWN TYPE OF EXERCISES