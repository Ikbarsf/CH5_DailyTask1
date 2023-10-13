const jwt = require("jsonwebtoken");
const ApiError = require("../utils/apiError");

const checkToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return next(new ApiError("Token is missing", 401));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return next(new ApiError("Invalid token", 500));
  }
};
module.exports = checkToken;
