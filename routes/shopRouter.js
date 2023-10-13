const router = require("express").Router();

const Shop = require("../controller/shopController");

router.get("/", Shop.getAllShop);
router.get("/:id", Shop.getShopById);
router.post("/", Shop.createShop);
router.patch("/:id", Shop.editShop);
router.delete("/:id", Shop.removeShop);

module.exports = router;
