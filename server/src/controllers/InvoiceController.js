const {
  CreateInvoiceService,
  PaymentFailService,
  PaymentCancelService,
  PaymentIPNService,
  PaymentSuccessService,
  InvoiceListService,
  InvoiceProductListService,
  OrderListService,
  GetAllInvoiceListService,
  AllOrderListService,
} = require("../services/InvoiceService.js");

//! Invoice List Controller
exports.CreateInvoice = async (req, res) => {
  let result = await CreateInvoiceService(req);
  return res.status(200).json(result);
};

exports.PaymentFail = async (req, res) => {
  let result = await PaymentFailService(req);
  res.redirect(process.env.Origin_HOST_Site + "/profile");
};

exports.PaymentCancel = async (req, res) => {
  let result = await PaymentCancelService(req);
  res.redirect(process.env.Origin_HOST_Site + "/profile");
};

exports.PaymentIPN = async (req, res) => {
  let result = await PaymentIPNService(req);
  res.redirect(process.env.Origin_HOST_Site + "/profile");
};

exports.PaymentSuccess = async (req, res) => {
  let result = await PaymentSuccessService(req);
  res.redirect(process.env.Origin_HOST_Site + "/profile");
};

exports.InvoiceList = async (req, res) => {
  let result = await InvoiceListService(req);
  return res.status(200).json(result);
};
exports.GetAllInvoiceList = async (req, res) => {
  let result = await GetAllInvoiceListService(req);
  return res.status(200).json(result);
};

exports.OrderList = async (req, res) => {
  let result = await OrderListService(req);
  return res.status(200).json(result);
};
exports.AllOrderList = async (req, res) => {
  let result = await AllOrderListService(req);
  return res.status(200).json(result);
};

exports.InvoiceProductList = async (req, res) => {
  let result = await InvoiceProductListService(req);
  return res.status(200).json(result);
};
