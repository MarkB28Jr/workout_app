const mongoose = require('mongoose');
const Schema = mongoose.Schema

const templateSchema = new Schema({
    muscleGroups: {
        type: String,
        enum: muscleGroups = [
            'Quadriceps',
            'Glutes_Hamstrings',
            'Calves',
            'Chest',
            'Back',
            'Shoulders',
            'Triceps',
            'Biceps',
            'Abs',
          ],
        required: true
    },
    exercise: {
        type: String,
        enum: muscleGroups,
        required: true,
    },
})

const workoutSchema = new Schema({
    template: [templateSchema],
    sets: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    weight: {
        type: Number
    },
})

module.exports = mongoose.model('Workout', workoutSchema)

