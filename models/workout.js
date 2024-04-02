const mongoose = require('mongoose');

const Schema = mongoose.Schema

// const historySchema = new Schema({

// })

const exerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    muscleGroup: {
        type: String,
        enum: muscleGroup,
        required: true,
    },

})

const templateSchema = new Schema({
    sets: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    weight: {
        type: Number
    },
    exercises: [exerciseSchema]
})

const workoutSchema = new Schema({
    musclegroup: {
        type: String,
        enum: ['Quadriceps', 'Glutes_Hamstrings', 'Calves', 'Chest', 'Back', 'Shoulders', 'Triceps', 'Biceps', 'Abs'],
        required: true,
    },

})
const historySchema = new Schema({

})

module.exports = mongoose.model('Workout', workoutSchema)

