const { RegisterUserService, LoginUserService, ProfileUpdateUserService, ProfileReadUserService, LogoutUserService, EmailVerifyUserService, RecoverVerifyEmailUserService, RecoverVerifyOTPUserService, ResetPasswordUserService, VerifyUserService } = require("../services/UserService.js");


//! User Control
exports.RegisterUser = async (req, res) => {
  let result = await RegisterUserService(req);
  return res.status(200).json(result);
};

exports.LoginUser = async (req, res) => {
  let result = await LoginUserService(req, res);
  return res.status(200).json(result);
};
exports.VerifyUser = async (req, res) => {
  let result = await VerifyUserService(req, res);
  return res.status(200).json(result);
};

exports.ProfileUpdateUser = async (req, res) => {
  let result = await ProfileUpdateUserService(req);
  return res.status(200).json(result);
};

exports.ProfileReadUser = async (req, res) => {
  let result = await ProfileReadUserService(req);
  return res.status(200).json(result);
};

exports.LogoutUser = async (req, res) => {
  let result = await LogoutUserService(req, res);
  return res.status(200).json(result);
};

exports.EmailVerifyUser = async (req, res) => {
  let result = await EmailVerifyUserService(req);
  return res.status(200).json(result);
};

exports.RecoverVerifyEmailUser = async (req, res) => {
  let result = await RecoverVerifyEmailUserService(req);
  return res.status(200).json(result);
};

exports.RecoverVerifyOTPUser = async (req, res) => {
  let result = await RecoverVerifyOTPUserService(req);
  return res.status(200).json(result);
};

exports.ResetPasswordUser = async (req, res) => {
  let result = await ResetPasswordUserService(req);
  return res.status(200).json(result);
};


