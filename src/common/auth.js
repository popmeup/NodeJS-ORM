const { getUserById } = require('../services/user')
const jwt = require("jsonwebtoken");

module.exports = {
  verifyToken: (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      return res.status(401).json({
        status: false,
        error: {
          message: 'Auth headers is required.'
        }
      });
    }

    const token = req.headers["authorization"].replace("Bearer ", "")
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
    return next();
  },
  checkRole: (role) => {
    return (req, res, next) => {
      const {
        user: { id },
      } = req;

      getUserById(id).then((user) => {
        if (!user) {
          return res.status(400).json({
            status: false,
            error: "Invalid access token provided, please login again.",
          });
        }

        if (user.role > role) {
          return res.status(403).json({
            status: false,
            error: "You dont have permission"
          });
        }
        return next();
      });
    }
  },
  checkOwnership: (role) => {
    return (req, res, next) => {
      const { user: { id } } = req;
      const givenId = +req.params.id ;

      getUserById(id).then((user) => {
        if (!user) {
          return res.status(400).json({
            status: false,
            error: "Invalid access token provided, please login again.",
          });
        }

        if (user.id !== givenId && user.role > role) {
          return res.status(403).json({
            status: false,
            error: "You dont have permission"
          });
        }

        return next();
      });
    }
  }
}