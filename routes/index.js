const router = require("express").Router();

const Product = require("./productRouter");
const Admin = require("./adminRouter");
const Auth = require("./authRouter");

router.use("/api/v1/products", Product);
router.use("/api/v1/auth", Auth);

router.use("/", Admin);

module.exports = router;
