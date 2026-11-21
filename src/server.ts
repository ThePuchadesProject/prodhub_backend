import express from "express";
import colors from "colors";
import path from "node:path";
import { fileURLToPath } from "node:url";
import swaggerUi from "swagger-ui-express";
import swaggerSpec, { swaggerUiOptions } from "./config/swagger.js";
import router from "./router.js";
import db from "./config/db.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Conectar a base de datos
export async function connectDB() {
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

// Archivos estáticos (logo y favicon para Swagger)
server.use(express.static(path.join(__dirname, "../public")));

server.use("/api/products", router);

// Docs
server.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, swaggerUiOptions),
);

export default server;
