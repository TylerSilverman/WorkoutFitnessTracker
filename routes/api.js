const router = require('express').Router();
const Workout = require("../models/Workout.js");

router.get('/workouts', (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err.message);
        });
})

// router.put

// req.body.type === "resistance"
//req.body
//req.body
//req.body

// req.body.type === "cardio"

router.post("/workouts", ({ body }, res) => {
    console.log("post workout btn")
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err.message);
        });
});

module.exports = router;

