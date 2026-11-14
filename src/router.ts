import { Router } from "express";
import { body, param } from "express-validator";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateAvailability,
  updateProduct,
} from "./handlers/product.js";
import { handleInputErrors } from "./middleware/index.js";

const router = Router();
// Routing
router.get("/", getProducts);

router.get(
  "/:id",

  param("id").isInt().withMessage("Invalid ID"),
  handleInputErrors,
  getProductById,
);

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

router.put(
  "/:id",

  param("id").isInt().withMessage("Invalid ID"),

  body("name").notEmpty().withMessage("The product name cannot be left blank"),

  body("price")
    .isNumeric()
    .withMessage("Invalid value")
    .notEmpty()
    .withMessage("The product price cannot be left blank")
    .custom((value) => value > 0)
    .withMessage("Invalid price"),

  body("availability")
    .isBoolean()
    .withMessage("Invalid value for availability"),

  handleInputErrors,

  updateProduct,
);

router.patch(
  "/:id",
  param("id").isInt().withMessage("Invalid ID"),
  handleInputErrors,
  updateAvailability,
);

router.delete(
  "/:id",
  param("id").isInt().withMessage("Invalid ID"),
  handleInputErrors,
  deleteProduct,
);

export default router;
