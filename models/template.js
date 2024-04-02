const mongoose = require('mongoose');

const Schema = mongoose.Schema

const exerciseSchema = new Schema [

]


const templateSchema = new Schema({
    muscleGrp: {
        type: String,
        enum: ['Biceps', 'Legs', 'Back', 'Shoulders', 'Abs', 'Triceps', 'Chest', 'Quadriceps', 'Glut_Hamstrings','Other']
    },
    sets: {
        type:  Number, 
    },
    reps: {
        type:  Number, 
    },
    weight: {
        type: Number
    },

    exercises: [exerciseSchema]
})

module.exports = mongoose.model('Template', templateSchema)