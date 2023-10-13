const { User } = require("../models");
const ApiError = require("../utils/apiError");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();

    res.status(200).json({
      status: "Success",
      data: {
        users,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "Success",
      data: {
        user,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const createUser = async (req, res, next) => {
  const { name, age, address } = req.body;

  try {
    const newUser = await User.create({
      name,
      age,
      address,
    });

    res.status(200).json({
      status: "Success",
      data: {
        newUser,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const editUser = async (req, res, next) => {
  const { name, age, address } = req.body;
  try {
    const user = await User.update(
      {
        name,
        age,
        address,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json({
      status: "Success",
      message: "sukses update user",
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const removeUser = async (req, res, next) => {
  const { name, age, address } = req.body;
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!user) {
      next(new ApiError("User id tersebut gak ada", 404));
    }

    await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "Success",
      message: "sukses delete produk",
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  editUser,
  removeUser,
};
