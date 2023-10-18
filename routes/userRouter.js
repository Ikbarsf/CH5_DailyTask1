const router = require("express").Router();

const User = require("../controller/userController");

router.get("/", User.getAllUsers);
router.get("/:id", User.getUserById);
// router.post("/", User.createUser);
router.patch("/:id", User.editUser);
router.delete("/:id", User.removeUser);

module.exports = router;
