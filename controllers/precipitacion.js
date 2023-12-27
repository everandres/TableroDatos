const Prec = require("../models/precipitacion");

const getAllTasks = async (req, res) => {
  try {
    const precipitacion = await Prec.find({});
    res.status(200).json({ precipitacion });
  } catch (err) {
    res.status(500).json({ status: "failed", msg: err });
  }
};

module.exports = { getAllTasks };
