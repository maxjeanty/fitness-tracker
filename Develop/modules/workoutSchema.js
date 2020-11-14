const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const date = require('dateformat')

const WorkoutSchema = new Schema({
  exercises: [],
  completed: {
    type: Boolean,
    default: false,
  },
  day: {
    type: Date,
    default: () => new Date()
  },



});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
