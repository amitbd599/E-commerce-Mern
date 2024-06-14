const {
  CreateInvoiceService,
  PaymentFailService,
  PaymentCancelService,
  PaymentIPNService,
  PaymentSuccessService,
  InvoiceListService,
  InvoiceProductListService,
} = require("../services/InvoiceService.js");

//! Invoice List Controller
exports.CreateInvoice = async (req, res) => {
  let result = await CreateInvoiceService(req);
  return res.status(200).json(result);
};

exports.PaymentFail = async (req, res) => {
  let result = await PaymentFailService(req);
  res.redirect(process.env.Origin_HOST + "/profile");
};

exports.PaymentCancel = async (req, res) => {
  let result = await PaymentCancelService(req);
  res.redirect(process.env.Origin_HOST + "/profile");
};

exports.PaymentIPN = async (req, res) => {
  let result = await PaymentIPNService(req);
  res.redirect(process.env.Origin_HOST + "/profile");
};

exports.PaymentSuccess = async (req, res) => {
  let result = await PaymentSuccessService(req);
  res.redirect(process.env.Origin_HOST + "/profile");
};

exports.InvoiceList = async (req, res) => {
  let result = await InvoiceListService(req);
  return res.status(200).json(result);
};

exports.InvoiceProductList = async (req, res) => {
  let result = await InvoiceProductListService(req);
  return res.status(200).json(result);
};
