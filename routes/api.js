const router = require('express').Router();
const Workout = require("../models/Workout.js");

router.get('/workouts', (req, res) => {
    Workout.find({})
    // Workout.aggregate({})
    //     .sort({day: 1})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err.message);
        });
})

// router.get('/workouts', (req, res)=>{
//     Workout.aggregate([{
//         tot
//     }])
// })
//this workouts/id is from the api.js on line 13
// router.put('/workouts/:id', (req, res)=>{
//     console.log("hitting the add exercise btn")
//     res.json({update: true})
// })


//backend code
router.put('/workouts/:id', (req, res) => {
    const id = req.params.id
    const body = req.body

    Workout.findByIdAndUpdate(id,
        {
            $push: {
                exercises: body
            }
        }
    )
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.status(400).json(err.message);
        });
})

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

