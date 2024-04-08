const mongoose = require('mongoose');
const Schema = mongoose.Schema

const exercisesSchema = new Schema({
  muscleGroup: {
    type: String,
    unique: true
  },
  exercises: [{
    type: String,
    enum: []
  }]
});

{/* <ul>
<% workout.exercises.forEach(exercise => { %>
  <li>
    <h2><%= exercise.name %></h2>
    <p>Muscle Group: <%= exercise.muscleGroup %></p>
  </li>
<% }); %>
</ul> */}

{/* <h1>Calves Exercises</h1>
<ul>
  <% exercises.forEach(function(exercise) { %>
    <li><%= exercise.exercises.join(', ') %></li>
  <% }); %>
</ul> */}

//   // Find all exercises for the Calves muscle group
//   Exercise.find({ muscleGroup: 'Calves' }, function (err, exercises) {
//     if (err) return handleError(err);
//     // Render the EJS template and pass the exercises as a variable
//     res.render('calves', { exercises: exercises });
//   });
// });

module.exports = mongoose.model('Exercise', exercisesSchema)