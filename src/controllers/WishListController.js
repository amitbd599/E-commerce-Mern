const { CreateWishService, ReadWishService,  DeleteWishService } = require("../services/WishListService.js");

//! Wish List Controller
exports.CreateWish = async (req, res) => {
    let result = await CreateWishService(req);
    return res.status(200).json(result);
};
exports.ReadWish = async (req, res) => {
    let result = await ReadWishService(req);
    return res.status(200).json(result);
};

exports.DeleteWish = async (req, res) => {
    let result = await DeleteWishService(req);
    return res.status(200).json(result);
};
