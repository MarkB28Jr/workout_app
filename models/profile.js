const mongoose = require('mongoose');
const Schema = mongoose.Schema

const profileSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other']
  },
  email: {
    type: String,
  },
  userName: {
    type: String,
  },
});

module.exports = mongoose.model('Profile', profileSchema)