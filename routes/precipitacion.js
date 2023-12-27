const express = require("express");
const router = express.Router();

const { getAllTasks } = require("../controllers/precipitacion");

router.route("/").get(getAllTasks);

module.exports = router;
