const express = require("express");
const { deleteCategoryById, deleteRandomById } = require("../controller/deleteProduct");
const { editCategoryById, editRandomById } = require("../controller/editedData");
const {
  categoryData,
  categoryDataById,
  randomById,
  random,
} = require("../controller/getProducts");

const router = express();

router.get("/api/:language/products/random/:id", randomById);
router.get("/api/:language/products/:category/:id", categoryDataById);


router.delete("/api/:language/products/random/:id", deleteRandomById);
router.delete("/api/:language/products/:category/:id", deleteCategoryById);


router.put("/api/:language/products/random/:id", editRandomById);
router.put("/api/:language/products/:category/:id", editCategoryById);


router.get("/api/:language/products/random/", random);
router.get("/api/:language/products/:category", categoryData);


module.exports = router;
