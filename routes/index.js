const router = require('express').Router();

const homeGetRoutes = require("./homeGetRoutes");
const apiRoutes = require ("./api");

router.use("/", homeGetRoutes)
router.use ("/api", apiRoutes);

module.exports = router;