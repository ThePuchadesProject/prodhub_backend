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

router.get("/", getProducts);
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

router.get(
  "/:id",

  param("id").isInt().withMessage("Invalid ID"),
  handleInputErrors,
  getProductById,
);
/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *    summary: Get a product by ID
 *    tags:
 *      - Products
 *    description: Return a product based on its unique ID
 *    parameters:
 *      - in: path
 *        name: id
 *        description: The ID of the product to retrieve
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: Successful Response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      404:
 *        description: Not found
 *      400:
 *        description: Bad Request - Invalid ID
 */

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
/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Creates a new product
 *     tags:
 *       - Products
 *     description: Returns a new record in the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "OLED Monitor"
 *               price:
 *                 type: number
 *                 example: 399
 *     responses:
 *       201:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad Request - invalid input data
 */

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
/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *    summary: Updates a product with user input
 *    tags:
 *      - Products
 *    description: Returns the updated product
 *    parameters:
 *      - in: path
 *        name: id
 *        description: The ID of the product to retrieve
 *        required: true
 *        schema:
 *          type: integer
 *    requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "OLED Monitor"
 *               price:
 *                 type: number
 *                 example: 399
 *               availability:
 *                 type: boolean
 *                 example: true
 *    responses:
 *      200:
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Bad Request - invalid ID or invalid input data
 *      404:
 *        description: Product not found
 *
 *
 *
 */

router.patch(
  "/:id",
  param("id").isInt().withMessage("Invalid ID"),
  handleInputErrors,
  updateAvailability,
);
/**
 * @swagger
 * /api/products/{id}:
 *  patch:
 *    summary: Update Product availability
 *    tags:
 *      - Products
 *    description: Returns the updated availability
 *    parameters:
 *      - in: path
 *        name: id
 *        description: The ID of the product to retrieve
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Bad Request - invalid ID
 *      404:
 *        description: Product Not Found
 */

router.delete(
  "/:id",
  param("id").isInt().withMessage("Invalid ID"),
  handleInputErrors,
  deleteProduct,
);
/**
 * @swagger
 * /api/products/{id}:
 *  delete:
 *    summary: Deletes a product by a given ID
 *    tags:
 *      - Products
 *    description: Returns a confirmation message
 *    parameters:
 *      - in: path
 *        name: id
 *        description: The ID of the product to delete
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: string
 *              value: "Product Deleted"
 *      400:
 *        description: Bad Request - invalid ID
 *      404:
 *        description: Product Not Found
 */
export default router;
