const express = require("express");
const conexion = require("./database/conexion");
const cors = require("cors");
require("dotenv").config();
const precipitacion = require("./routes/precipitacion");

app = express();
app.use(cors());

app.use(express.json());
app.use("/api/v1/precipitaciones", precipitacion);

const start = async () => {
  try {
    await conexion(process.env.MONGO_URI);
    app.listen(process.env.PORT || 9000, () =>
      console.log(`Server is listening on port 9000...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
