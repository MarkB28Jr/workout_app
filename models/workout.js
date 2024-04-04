const mongoose = require('mongoose');
const Schema = mongoose.Schema



// const workoutSchema = new Schema({
//     workoutPlan: [
//         {
//             exercise: {
//                 type: String,
//             },
//             sets: {
//                 type: Number,
//             },
//             reps: {
//                 type: Number,
//             },
//             weight: {
//                 type: Number
//             }
//         }
//     ]
// })
// const workoutSchema = new Schema({
//     exercise0: {
//         type: String,
//     },
//     sets0: {
//         type: Number,
//     },
//     reps0: {
//         type: Number,
//     },
//     weight0: {
//         type: Number
//     },
//     exercise1: {
//         type: String,
//     },
//     sets1: {
//         type: Number,
//     },
//     reps1: {
//         type: Number,
//     },
//     weight1: {
//         type: Number
//     },
//     exercise2: {
//         type: String,
//     },
//     sets2: {
//         type: Number,
//     },
//     reps2: {
//         type: Number,
//     },
//     weight2: {
//         type: Number
//     },
//     exercise3: {
//         type: String,
//     },
//     sets3: {
//         type: Number,
//     },
//     reps3: {
//         type: Number,
//     },
//     weight3: {
//         type: Number
//     },
//     exercise4: {
//         type: String,
//     },
//     sets4: {
//         type: Number,
//     },
//     reps4: {
//         type: Number,
//     },
//     weight4: {
//         type: Number
//     },
//     exercise5: {
//         type: String,
//     },
//     sets5: {
//         type: Number,
//     },
//     reps5: {
//         type: Number,
//     },
//     weight5: {
//         type: Number
//     },
//     exercise6: {
//         type: String,
//     },
//     sets6: {
//         type: Number,
//     },
//     reps6: {
//         type: Number,
//     },
//     weight6: {
//         type: Number
//     }
// })

const workoutSchema = new Schema({
    exercises: [
      {
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
      }
    ]
  });

module.exports = mongoose.model('Workout', workoutSchema)

