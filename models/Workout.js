const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
  day: { type: Date, default: Date.now },
  exercises: [
    {
      type: { type: String },
      name: { type: String },
      duration: { type: Number },
      weight: { type: Number },
      reps: { type: Number },
      sets: { type: Number },
      duration: { type: Number },
      distance: { type: Number }
    }
  ],
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
})

WorkoutSchema.virtual('totalDuration').get(function () {
  return this.exercises.reduce((total, exercise) => total + exercise.duration, 0)
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;




