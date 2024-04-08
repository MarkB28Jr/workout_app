const mongoose = require('mongoose');
const Schema = mongoose.Schema

const exerciseSchema = new Schema({
  muscleGroup: {
    type: String,
    unique: true
  },
  exercise: [{
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

{/*
<ul>
  <% exercises.forEach(function(exercise) { %>
    <li><%= exercise.exercises.join(', ') %></li>
  <% }); %>
</ul> */}

//   // Find all exercises for the Calves muscle group
//   Exercise.find({ muscleGroup: 'Calves' }, function (err, exercises) {
//     if (err) return handleError(err);
//     res.render('calves', { exercises: exercises });
//   });
// });

module.exports = mongoose.model('Exercise', exerciseSchema)