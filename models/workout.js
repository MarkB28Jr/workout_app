const mongoose = require('mongoose');
const Schema = mongoose.Schema


const exerciseSchema = new Schema({
  sets0: {
    type: Number,
  },
  reps0: {
    type: Number,
  },
  weight0: {
    type: Number
  },
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


// IGNORE below please this is code I am working with to see if I can make the Schema into a array of objects so I dont have to have everything spelled out and so long // I also want to make it so the user can change how many exercises they want by have a button to click to add another exercise.

// const workoutSchema = new Schema({
//   exercises: [
//     {
//       type: Schema.Types.Mixed,
//       validate: {
//         validator: (value) => {
//           if (Array.isArray(value)) {
//             return value.every((exercise) => {
//               return (
//                 exercise.muscleGroup &&
//                 exercise.name 
//               );
//             });
//           } else {
//             return false;
//           }
//         },
//         message: "Exercises must be an array of objects",
//       },
//     },
//   ],
// });