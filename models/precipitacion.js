const mongoose = require("mongoose");

const NewSchema = new mongoose.Schema({
  CODIGO: { type: Number, required: true },
  LONGITUD: { type: Number, required: false },
  LATTITUD: { type: Number, required: false },
  ELEVACION: { type: Number, required: false },
  ESTACION: { type: String, required: true },
  MUNICIPIO: { type: String, required: true },
  DEPARTAMENTO: { type: String, required: true },
  precipitaciones: { type: Object },
});

module.exports = mongoose.model("precipitaciones", NewSchema);
