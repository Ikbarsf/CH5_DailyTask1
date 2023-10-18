const { Shop } = require("../models");
const ApiError = require("../utils/apiError");

const getAllShop = async (req, res, next) => {
  try {
    const shops = await Shop.findAll();

    res.status(200).json({
      status: "Success",
      data: {
        shops,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const getShopById = async (req, res, next) => {
  try {
    const shop = await Shop.findOne({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "Success",
      data: {
        shop,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const createShop = async (req, res, next) => {
  try {
    const { name } = req.body;
    const newShop = await Shop.create({
      name,
    });

    res.status(201).json({
      status: "Success",
      data: {
        newShop,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

const editShop = async (req, res, next) => {
  const { name } = req.body;
  try {
    await Shop.update(
      {
        name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json({
      status: "Success",
      message: "sukses update shop",
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const removeShop = async (req, res, next) => {
  try {
    const shop = await Shop.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!shop) {
      next(new ApiError("Shop id tersebut gak ada", 404));
    }

    await Shop.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "Success",
      message: "sukses delete shop",
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

module.exports = {
  getAllShop,
  getShopById,
  createShop,
  editShop,
  removeShop,
};
