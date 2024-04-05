const mongoose = require('mongoose');
const Schema = mongoose.Schema


const exerciseSchema = new Schema({
  sets1: {
    type: Number,
  },
  reps1: {
    type: Number,
  },
  weight1: {
    type: Number
  },
  sets2: {
    type: Number,
  },
  reps2: {
    type: Number,
  },
  weight2: {
    type: Number
  },
  sets3: {
    type: Number,
  },
  reps3: {
    type: Number,
  },
  weight3: {
    type: Number
  },
  sets4: {
    type: Number,
  },
  reps4: {
    type: Number,
  },
  weight4: {
    type: Number
  },
  sets5: {
    type: Number,
  },
  reps5: {
    type: Number,
  },
  weight5: {
    type: Number
  },
  sets6: {
    type: Number,
  },
  reps6: {
    type: Number,
  },
  weight6: {
    type: Number
  }
});

const workoutSchema = new Schema({
  name: {
    type: String,
  },
  exercise0: {
    type: String,
  },
  exercise1: {
    type: String,
  },
  exercise2: {
    type: String,
  },
  exercise3: {
    type: String,
  },
  exercise4: {
    type: String,
  },
  exercise5: {
    type: String,
  },
  exerciseData: [exerciseSchema]
});

module.exports = mongoose.model('Workout', workoutSchema)

