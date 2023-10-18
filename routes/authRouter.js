const router = require("express").Router();

const Auth = require("../controller/authController");
const Token = require("../middlewares/checkToken");

router.post("/register", Token, Auth.register);
router.post("/login", Auth.login);
router.get("/token", Token, Auth.checktoken);

module.exports = router;
