const mongoose = require("mongoose");
const WishModel = require("../models/WishModel");
const ObjectId = mongoose.Types.ObjectId;

//! Wish Control

const CreateWishService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let ReqBody = req.body;
    ReqBody.userID = user_id;
    const data = await WishModel.updateOne(
      ReqBody,
      { $set: ReqBody },
      { upsert: true }
    );
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const ReadWishService = async (req) => {
  try {
    let user_id = new ObjectId(req.headers.user_id);
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
        userID: 0,
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
    const data = await WishModel.aggregate([
      MatchStage,
      JoinWithProduct,
      UnwindProductStage,
      JoinWithBrand,
      JoinWithCategory,
      UnwindBrandStage,
      UnwindCategoryStage,
      projectionStage,
    ]);
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const DeleteWishService = async (req) => {
  try {
    let wishID = new ObjectId(req.params.wishID);
    const data = await WishModel.deleteOne({ _id: wishID });
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

module.exports = {
  CreateWishService,
  ReadWishService,
  DeleteWishService,
};
