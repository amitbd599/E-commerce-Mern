

const mongoose = require("mongoose");
const CartModel = require("../models/CartModel");
const ObjectId = mongoose.Types.ObjectId;


//! Cart Control

const CreateCartService = async (req) => {
    try {
        let user_id = req.headers.user_id
        let ReqBody = req.body
        ReqBody.userID = user_id
        const data = await CartModel.create(ReqBody);
        return { status: true, data: data };
    } catch (error) {
        return { status: false, error: error.toString() };
    }
};

const UpdateCartService = async (req) => {
    try {
        let user_id = new ObjectId(req.headers.user_id)
        let cartID = new ObjectId(req.params.cartID);
        let reqBody = req.body
        const data = await CartModel.updateOne(
           {_id: cartID, userID :user_id}, {$set : reqBody}
        );
        return { status: true, data: data };
    } catch (error) {
        return { status: false, error: error.toString() };
    }
};

const ReadCartService = async (req) => {
    try {
        let user_id = new ObjectId(req.headers.user_id)
        let MatchStage = { $match: { userID: user_id } };
        let JoinWithProduct = {
            $lookup: {
                from: "products",
                localField: "productID",
                foreignField: "_id",
                as: "product",
            },
        };
        let UnwindProductStage = { $unwind: "$product" };
        let JoinWithBrand = {
            $lookup: {
                from: "brands",
                localField: "product.brandID",
                foreignField: "_id",
                as: "brand",
            },
        };
        let JoinWithCategory = {
            $lookup: {
                from: "catagories",
                localField: "product.categoryID",
                foreignField: "_id",
                as: "category",
            },
        };
        let UnwindBrandStage = { $unwind: "$brand" };
        let UnwindCategoryStage = { $unwind: "$category" };
        let projectionStage = {
            $project: {
                "_id": 0,
                "userID": 0,
                "product._id": 0,
                "product.categoryID": 0,
                "product.brandID": 0,
                "product.createdAt": 0,
                "product.updatedAt": 0,
                "brand._id": 0,
                "brand.createdAt": 0,
                "brand.updatedAt": 0,
                "category._id": 0,
                "category.createdAt": 0,
                "category.updatedAt": 0,

                categoryID: 0,
                brandID: 0,
                createdAt: 0,
                updatedAt: 0,
            },
        };
        const data = await CartModel.aggregate(
            [
                MatchStage, JoinWithProduct, UnwindProductStage, JoinWithBrand, JoinWithCategory, UnwindBrandStage, UnwindCategoryStage, projectionStage
            ]
        );
        return { status: true, data: data };
    } catch (error) {
        return { status: false, error: error.toString() };
    }
};

const DeleteCartService = async (req) => {
    try {
        let cartID = new ObjectId(req.params.cartID);
        const data = await CartModel.deleteOne(
            { _id: cartID }
        );
        return { status: true, data: data };
    } catch (error) {
        return { status: false, error: error.toString() };
    }
};


module.exports = {
    CreateCartService, ReadCartService, UpdateCartService, DeleteCartService
}