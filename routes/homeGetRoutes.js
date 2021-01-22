const router = require("express").Router();
const path = require('path');


//GET route for the index.html
router.get("/", async (req, res) => { 
    console.log("GET home Route btn clicked");
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
//GETroute for the stats.html page
router.get("/stats", async (req, res) => { 
    console.log("stats dashboard clicked");
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

//GET route for the exercise.html
router.get("/exercise", async (req, res) => { 
    console.log("continue workout clicked");
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//create a POST route for add erercise 
// router.post ("/workouts", async ({body}, res) => {
//     app.put("/api/workouts/", function(req, res) {
//         db.workouts.updateOne({ _id: req.params.id }, { likes: req.body.likes }).then(function(dbWorkouts) {
//           res.json(dbWorkouts);
//         });
//       });

// })


//GET route for the exercise.html
// router.get("/exercise?", async (req, res) => { 
//     console.log("add new workout clicked");
//     res.sendFile(path.join(__dirname, "../public/exercise.html"));
// });


module.exports = router;