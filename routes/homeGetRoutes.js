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


module.exports = router;