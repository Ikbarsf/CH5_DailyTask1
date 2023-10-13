const router = require("express").Router();

const Auth = require("../controller/authController");

router.post("/register", Auth.register);
router.post("/login", Auth.login);
router.get("/token", Auth.checktoken);

module.exports = router;
