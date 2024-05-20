const { RegisterService, LoginService, ProfileUpdateService, ProfileReadService, LogoutService, EmailVerifyService, RecoverVerifyEmailService, RecoverVerifyOTPService, ResetPasswordService } = require("../services/AdminService");


//! User Control
exports.Register = async (req, res) => {
  let result = await RegisterService(req);
  return res.status(200).json(result);
};

exports.Login = async (req, res) => {
  let result = await LoginService(req, res);
  return res.status(200).json(result);
};

exports.ProfileUpdate = async (req, res) => {
  let result = await ProfileUpdateService(req);
  return res.status(200).json(result);
};

exports.ProfileRead = async (req, res) => {
  let result = await ProfileReadService(req);
  return res.status(200).json(result);
};

exports.Logout = async (req, res) => {
  let result = await LogoutService(res);
  return res.status(200).json(result);
};

exports.EmailVerify = async (req, res) => {
  let result = await EmailVerifyService(req);
  return res.status(200).json(result);
};

exports.RecoverVerifyEmail = async (req, res) => {
  let result = await RecoverVerifyEmailService(req);
  return res.status(200).json(result);
};

exports.RecoverVerifyOTP = async (req, res) => {
  let result = await RecoverVerifyOTPService(req);
  return res.status(200).json(result);
};

exports.ResetPassword = async (req, res) => {
  let result = await ResetPasswordService(req);
  return res.status(200).json(result);
};

