const express = require("express");
const service = require("../services/products.service");

const router = express.Router();
const productService = new service();

router.get("/", async (req, res, next) => {
  try {
    const products = await productService.find();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const productFind = await productService.findOne(id);
    res.status(200).json(productFind);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const body = req.body;
    const newProduct = await productService.create(body);
    res.status(200).json({
      message: "created",
      data: newProduct,
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const productUpdate = await productService.update(id, body);
    res.status(200).json({
      message: "update",
      data: productUpdate,
      id,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const productDelete = await productService.delete(id);
    res.status(200).json({
      message: "deleted",
      id,
    });
  } catch (error) {}
});

module.exports = router;
