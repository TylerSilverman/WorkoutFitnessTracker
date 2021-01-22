const router = require('express').Router();
const Workout = require("../models/Workout.js");

// router.get("/workouts", (req, res) => {
//   Workout.aggregate([{
//       $addFields:{
//         totalDuration: {$sum: "$exercises.duration"}
//       }
//     }])
//     .sort({ day: 1 })
//     .then(workout => {
//       res.json(workout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.post("/api/workout", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err.message);
    });
});

router.post("/api/workout/bulk", ({ body }, res) => {
    Workout.insertMany(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err.message);
    });
});

module.exports = router;