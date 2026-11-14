import express from "express";
import colors from "colors";
import router from "./router.js";
import db from "./config/db.js";

// Conectar a base de datos
async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log(colors.blue("Successful connection to the database"));
  } catch (error) {
    // console.log(error);
    console.log(
      colors.red.bold("There was an error connecting to the database"),
    );
  }
}
connectDB();

// Instancia de Express
const server = express();

// Leer datos de formularios
server.use(express.json());

server.use("/api/products", router);

server.get("/api", (req, res) => {
  res.json({ msg: "From API" });
});

export default server;
