const router = require('express').Router();
const Workout = require("../models/Workout");

router.post("/api/home", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
;

module.exports = router;
  