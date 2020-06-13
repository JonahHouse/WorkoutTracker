const { Workout } = require("../models");
const path = require("path");
const router = require("express").Router()

// HTML Routes DONE
router.get('/exercise', function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get('/stats', function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});


// API routes

// Get Workouts
router.get('/api/workouts', function (req, res) {
  Workout.find()
    .then((workouts) => {
      res.json(workouts);
    })
    .catch(err => console.log(err));
});

// getLastWorkout
router.get('/api/workouts', function (req, res) {
  Workout.findById(req.query)
    .then((workouts) => {
      res.json(workouts);
    })
    .catch(err => console.log(err));
});



// addExercise
// put
router.put('/api/workouts/:id', function (req, res) {
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then((data) => res.json(data))
    .catch(err => console.error(err))
});


// createWorkout
// post
router.post('/api/workouts', function (req, res) {
  Workout.create(req.body)
    .then(workout => res.json(workout))
    .catch(err => console.error("Eroor"))
});

// getWorkoutsInRange
router.get('/api/workouts/range', function (req, res) {
  Workout.find()
    .then((workouts) => {
      res.json(workouts);
    })
    .catch(err => console.log(err));
});

module.exports = router
// Add exercises to a previous workout plan
// Add new exercises to a new workout plan
// View multiple the combined weight of multiple exercises on the stats page.