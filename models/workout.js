const mongoose = require('mongoose');
const Schema = mongoose.Schema

const exerciseSchema = new Schema({
    exercise: {
      type: String,
    },
    sets: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    weight: {
      type: Number
    }
  });
  
  const workoutSchema = new Schema({
    exercises: [exerciseSchema]
  });

module.exports = mongoose.model('Workout', workoutSchema)

