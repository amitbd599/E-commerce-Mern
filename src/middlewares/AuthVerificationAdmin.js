const { DecodeToken } = require("../utility/TokenHelper");

module.exports = (req, res, next) => {
  let token_admin = req.headers["token_admin"];

  if (!token_admin) {
    token_admin = req.cookies["token_admin"];
  }

  let decoded = DecodeToken(token_admin);
  if (decoded === null) {
    return res.status(401).json({
      status: 401,
      message: "Invalid Token",
    });
  } else {
    let email = decoded["email"];
    let user_id = decoded["user_id"];
    req.headers.email = email;
    req.headers.user_id = user_id;
    next();
  }
};
