const mongoose = require('mongoose');
// const ObjectT = mongoose.Schema.ObjectId
const Schema = mongoose.Schema

const workoutSchema = new Schema({

})
// const profileSchema = new Schema({

// })
// const exerciseSchema = new Schema({

// })
// const historySchema = new Schema({

// })

module.exports = mongoose.model('Workout', workoutSchema)