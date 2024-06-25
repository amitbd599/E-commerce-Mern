const { RegisterAdminService, LoginAdminService, AdminReadService, LogoutAdminService, EmailVerifyAdminService, RecoverVerifyEmailAdminService, RecoverVerifyOTPAdminService, ResetPasswordAdminService, AdminUpdateService, FileUploadService, DeleteFileUploadService } = require("../services/AdminService");


//! file upload
exports.FileUpload = async (req, res) => {
  let result = await FileUploadService(req, res);
  return res.status(200).json(result);
};

exports.DeleteFileUpload = async (req, res) => {
  let result = await DeleteFileUploadService(req, res);
  return res.status(200).json(result);
};

//! Admin Control
exports.RegisterAdmin = async (req, res) => {
  let result = await RegisterAdminService(req);
  return res.status(200).json(result);
};

exports.LoginAdmin = async (req, res) => {
  let result = await LoginAdminService(req, res);
  return res.status(200).json(result);
};


exports.AdminRead = async (req, res) => {
  let result = await AdminReadService(req);
  return res.status(200).json(result);
};

exports.AdminUpdate = async (req, res) => {
  let result = await AdminUpdateService(req);
  return res.status(200).json(result);
};

exports.LogoutAdmin = async (req, res) => {
  let result = await LogoutAdminService(res);
  return res.status(200).json(result);
};

exports.EmailVerifyAdmin = async (req, res) => {
  let result = await EmailVerifyAdminService(req);
  return res.status(200).json(result);
};

exports.RecoverVerifyEmailAdmin = async (req, res) => {
  let result = await RecoverVerifyEmailAdminService(req);
  return res.status(200).json(result);
};

exports.RecoverVerifyOTPAdmin = async (req, res) => {
  let result = await RecoverVerifyOTPAdminService(req);
  return res.status(200).json(result);
};

exports.ResetPasswordAdmin = async (req, res) => {
  let result = await ResetPasswordAdminService(req);
  return res.status(200).json(result);
};

