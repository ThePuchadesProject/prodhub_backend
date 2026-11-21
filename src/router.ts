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

/**
 * @swagger
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: The Product ID
 *          example: 1
 *        name:
 *          type: string
 *          description: The Product name
 *          example: OLED Monitor
 *        price:
 *          type: number
 *          description: The Product price
 *          example: 300
 *        availability:
 *          type: boolean
 *          description: The Product availability
 *          example: true
 */

/**
 * @swagger
 * /api/products:
 *  get:
 *    summary: Get a list of products
 *    tags:
 *      - Products
 *    description: Return a list of products
 *    responses:
 *      200:
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Product'
 *
 *
 *
 */
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
