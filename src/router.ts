import { Router } from "express";
import { body } from "express-validator";
import { createProduct, getProducts } from "./handlers/product.js";
import { handleInputErrors } from "./middleware/index.js";

const router = Router();
// Routing
router.get("/", getProducts);

router.post(
  "/",
  // Validacion
  body("name").notEmpty().withMessage("The product name cannot be left blank"),

  body("price")
    .isNumeric()
    .withMessage("Invalid value")
    .notEmpty()
    .withMessage("The product price cannot be left blank")
    .custom((value) => value > 0)
    .withMessage("Invalid price"),

  handleInputErrors,

  createProduct,
);

router.put("/", (req, res) => {
  res.json("Desde PUT");
});

router.patch("/", (req, res) => {
  res.json("Desde PATCH");
});

router.delete("/", (req, res) => {
  res.json("Desde DELETE");
});

export default router;
