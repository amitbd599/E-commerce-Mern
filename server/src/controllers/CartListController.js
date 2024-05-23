
const { CreateCartService, ReadCartService, UpdateCartService, DeleteCartService } = require("../services/CartListService.js");

//! Wish List Controller
exports.CreateCart = async (req, res) => {
    let result = await CreateCartService(req);
    return res.status(200).json(result);
};
exports.ReadCart = async (req, res) => {
    let result = await ReadCartService(req);
    return res.status(200).json(result);
};
exports.UpdateCart = async (req, res) => {
    let result = await UpdateCartService(req);
    return res.status(200).json(result);
};

exports.DeleteCart = async (req, res) => {
    let result = await DeleteCartService(req);
    return res.status(200).json(result);
};