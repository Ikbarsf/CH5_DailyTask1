const router = require("express").Router();

const Auth = require("../controller/authController");
const token = require("../middlewares/checkToken");

router.post("/register", Auth.register);
router.post("/login", Auth.login);
router.get("/token", token, Auth.checktoken);

module.exports = router;
