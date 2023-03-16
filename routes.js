const express = require("express")
const { Register } = require("./Controllers")
const { addProduct, getProduct, editProduct, deleteProduct, register } = require("./controls")
const router = express.Router()

router.post("/", addProduct)
router.get("/get", getProduct)
router.delete("/delete/:id", deleteProduct)
router.put("/edite/:id", editProduct)
router.post("/register", Register);

module.exports = router;
