const mongoose = require("mongoose");
const BrandModel = require("../models/BrandModel");
const CategoryModel = require("../models/CategoryModel");
const ProductSliderModel = require("../models/ProductSliderModel");
const ProductModel = require("../models/ProductModel");
const ReviewModel = require("../models/ReviewModel");
const ObjectId = mongoose.Types.ObjectId;

//! ProductService
const CreateProductService = async (req) => {
  try {
    let ReqBody = req.body;
    const data = await ProductModel.create(ReqBody);
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const ReadProductService = async (req) => {
  try {
    const limit = parseInt(req.params.item); // Number of items per page
    const pageNo = parseInt(req.params.pageNo); // Current page number

    if (isNaN(limit) || isNaN(pageNo)) {
      return res.status(400).json({ message: "Invalid parameters" });
    }

    const skip = (pageNo - 1) * limit; // Calculate the number of documents to skip

    const aggregatePipeline = [
      {
        $lookup: {
          from: "brands", // Name of the brand collection
          localField: "brandID",
          foreignField: "_id",
          as: "brandDetails",
        },
      },
      {
        $unwind: "$brandDetails", // Unwind the brand details to merge the fields
      },
      {
        $lookup: {
          from: "catagories", // Name of the brand collection
          localField: "categoryID",
          foreignField: "_id",
          as: "catagoriesDetails",
        },
      },
      {
        $unwind: "$catagoriesDetails", // Unwind the brand details to merge the fields
      },
      {
        $facet: {
          data: [
            { $skip: skip },
            { $limit: limit },
            {
              $project: {
                // Select fields to return, include brand name
                _id: 1,
                title: 1,
                shortDes: 1,
                price: 1,
                discount: 1,
                discountPrice: 1,
                img1: 1,
                img2: 1,
                img3: 1,
                img4: 1,
                img5: 1,
                img6: 1,
                img7: 1,
                img8: 1,
                star: 1,
                stock: 1,
                remark: 1,
                des: 1,
                color: 1,
                size: 1,
                categoryID: 1,
                brandID: 1,
                "brandDetails.brandName": 1,
                "catagoriesDetails.categoryName": 1,
                createdAt: 1,
                updatedAt: 1,
              },
            },
          ],
          totalCount: [{ $count: "count" }],
        },
      },
      {
        $project: {
          data: 1,
          totalCount: { $arrayElemAt: ["$totalCount.count", 0] },
        },
      },
    ];

    const results = await ProductModel.aggregate(aggregatePipeline);
    const products = results[0].data;
    const totalDocuments = results[0].totalCount || 0;
    const totalPages = Math.ceil(totalDocuments / limit);

    return {
      status: true,
      totalDocuments: totalDocuments,
      currentPage: pageNo,
      totalPages: totalPages,
      products: products,
    };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const UpdateProductService = async (req) => {
  try {
    let productID = new ObjectId(req.params.productID);
    let ReqBody = req.body;
    const data = await ProductModel.updateOne({ _id: productID }, ReqBody);
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const DeleteProductService = async (req) => {
  try {
    let productID = new ObjectId(req.params.productID);
    const data = await ProductModel.deleteOne({ _id: productID });
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};
const ProductDetailsService = async (req) => {
  try {
    let productID = new ObjectId(req.params.productID);
    let MatchStage = { $match: { _id: productID } };

    let JoinWithBrand = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategory = {
      $lookup: {
        from: "catagories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let UnwindBrandStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };

    let projectionStage = {
      $project: {
        categoryID: 0,
        brandID: 0,
        createdAt: 0,
        updatedAt: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
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

//! BrandListService
const CreateBrandListService = async (req) => {
  try {
    let ReqBody = req.body;
    const data = await BrandModel.create(ReqBody);
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const ReadBrandListService = async () => {
  try {
    const data = await BrandModel.find();
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};
const ReadBrandSingleService = async (req) => {
  try {
    let brandID = new ObjectId(req.params.brandID);
    const data = await BrandModel.aggregate(
      [{
        $match: { _id: brandID },
      }]
    );
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const UpdateBrandListService = async (req) => {
  try {
    let brandID = new ObjectId(req.params.brandID);
    let ReqBody = req.body;
    const data = await BrandModel.updateOne({ _id: brandID }, ReqBody);
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const DeleteBrandListService = async (req) => {
  try {
    let brandID = new ObjectId(req.params.brandID);
    const data = await BrandModel.deleteOne({ _id: brandID });
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const ProductListByBrandService = async (req) => {
  try {
    let brandID = new ObjectId(req.params.brandID);
    let MatchStage = {
      $match: { brandID: brandID },
    };
    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "catagories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let UnwindBrandStage = {
      $unwind: "$brand",
    };

    let UnwindCategoryStage = {
      $unwind: "$category",
    };

    let projectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        "category.createdAt": 0,
        "category.updatedAt": 0,
        "brand.createdAt": 0,
        "brand.updatedAt": 0,
        categoryID: 0,
        brandID: 0,
        createdAt: 0,
        updatedAt: 0,
      },
    };
    const data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      projectionStage,
    ]);
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

//! CategoryListService
const CreateCategoryListService = async (req) => {
  try {
    let ReqBody = req.body;
    const data = await CategoryModel.create(ReqBody);
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const ReadCategoryListService = async () => {
  try {
    const data = await CategoryModel.find();
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const ReadCategorySingleService = async (req) => {
  try {
    let categoryID = new ObjectId(req.params.categoryID);
    const data = await CategoryModel.aggregate(
      [{
        $match: { _id: categoryID },
      }]
    );
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const UpdateCategoryListService = async (req) => {
  try {
    let categoryID = new ObjectId(req.params.categoryID);
    let ReqBody = req.body;
    const data = await CategoryModel.updateOne({ _id: categoryID }, ReqBody);
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const DeleteCategoryListService = async (req) => {
  try {
    let categoryID = new ObjectId(req.params.categoryID);
    const data = await CategoryModel.deleteOne({ _id: categoryID });
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const ProductListByCategoryService = async (req) => {
  try {
    let categoryID = new ObjectId(req.params.categoryID);
    let MatchStage = {
      $match: { categoryID: categoryID },
    };
    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "catagories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let UnwindBrandStage = {
      $unwind: "$brand",
    };

    let UnwindCategoryStage = {
      $unwind: "$category",
    };

    let projectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        "category.createdAt": 0,
        "category.updatedAt": 0,
        "brand.createdAt": 0,
        "brand.updatedAt": 0,
        categoryID: 0,
        brandID: 0,
        createdAt: 0,
        updatedAt: 0,
      },
    };
    const data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      projectionStage,
    ]);
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

//! SliderListService

const CreateSliderListService = async (req) => {
  try {
    let ReqBody = req.body;
    const data = await ProductSliderModel.create(ReqBody);
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const ReadSliderListService = async () => {
  try {
    const data = await ProductSliderModel.find();
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};
const ReadSingleSliderListService = async (req) => {
  try {
    let sliderID = new ObjectId(req.params.sliderID);
    const data = await ProductSliderModel.aggregate(
      [
        { $match: { _id: sliderID } }
      ]
    );
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const UpdateSliderListService = async (req) => {
  try {
    let sliderID = new ObjectId(req.params.sliderID);
    let ReqBody = req.body;
    const data = await ProductSliderModel.updateOne({ _id: sliderID }, ReqBody);
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const DeleteSliderListService = async (req) => {
  try {
    let sliderID = new ObjectId(req.params.sliderID);
    const data = await ProductSliderModel.deleteOne({ _id: sliderID });
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

//! ProductListBySimilarCategoryService

const ProductListBySimilarCategoryService = async (req) => {
  try {
    let categoryID = new ObjectId(req.params.categoryID);
    const limit = parseInt(req.params.item);
    const pageNo = parseInt(req.params.pageNo);

    if (isNaN(limit) || isNaN(pageNo)) {
      return res.status(400).json({ message: "Invalid parameters" });
    }

    const skip = (pageNo - 1) * limit; // Calculate the number of documents to skip

    let MatchingStage = { $match: { categoryID: categoryID } };
    let JoinWithBrand = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brandDetails",
      },
    };
    let UnwindBrand = {
      $unwind: "$brandDetails",
    };
    let JoinWithCategory = {
      $lookup: {
        from: "catagories",
        localField: "categoryID",
        foreignField: "_id",
        as: "catagoriesDetails",
      },
    };

    let UnwindCategory = {
      $unwind: "$catagoriesDetails",
    };

    let data = {
      $facet: {
        data: [
          { $skip: skip },
          { $limit: limit },
          {
            $project: {
              // Select fields to return, include brand name
              _id: 1,
              title: 1,
              shortDes: 1,
              price: 1,
              discount: 1,
              discountPrice: 1,
              img1: 1,
              img2: 1,
              img3: 1,
              img4: 1,
              img5: 1,
              img6: 1,
              img7: 1,
              img8: 1,
              star: 1,
              stock: 1,
              remark: 1,
              des: 1,
              color: 1,
              size: 1,
              categoryID: 1,
              brandID: 1,
              "brandDetails.brandName": 1,
              "catagoriesDetails.categoryName": 1,
              createdAt: 1,
              updatedAt: 1,
            },
          },
        ],
        totalCount: [{ $count: "count" }],
      },
    };

    let project = {
      $project: {
        data: 1,
        totalCount: { $arrayElemAt: ["$totalCount.count", 0] },
      },
    };

    const results = await ProductModel.aggregate([
      MatchingStage,
      JoinWithBrand,
      UnwindBrand,
      JoinWithCategory,
      UnwindCategory,
      data,
      project,
    ]);
    const products = results[0].data;
    const totalDocuments = results[0].totalCount || 0;
    const totalPages = Math.ceil(totalDocuments / limit);

    return {
      status: true,
      totalDocuments: totalDocuments,
      currentPage: pageNo,
      totalPages: totalPages,
      products: products,
    };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

//! ProductListBySimilarBrandService
const ProductListBySimilarBrandService = async (req) => {
  try {
    let brandID = new ObjectId(req.params.brandID);
    const limit = parseInt(req.params.item);
    const pageNo = parseInt(req.params.pageNo);

    if (isNaN(limit) || isNaN(pageNo)) {
      return res.status(400).json({ message: "Invalid parameters" });
    }

    const skip = (pageNo - 1) * limit; // Calculate the number of documents to skip

    let MatchingStage = { $match: { brandID: brandID } };
    let JoinWithBrand = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brandDetails",
      },
    };
    let UnwindBrand = {
      $unwind: "$brandDetails",
    };
    let JoinWithCategory = {
      $lookup: {
        from: "catagories",
        localField: "categoryID",
        foreignField: "_id",
        as: "catagoriesDetails",
      },
    };

    let UnwindCategory = {
      $unwind: "$catagoriesDetails",
    };

    let data = {
      $facet: {
        data: [
          { $skip: skip },
          { $limit: limit },
          {
            $project: {
              // Select fields to return, include brand name
              _id: 1,
              title: 1,
              shortDes: 1,
              price: 1,
              discount: 1,
              discountPrice: 1,
              img1: 1,
              img2: 1,
              img3: 1,
              img4: 1,
              img5: 1,
              img6: 1,
              img7: 1,
              img8: 1,
              star: 1,
              stock: 1,
              remark: 1,
              des: 1,
              color: 1,
              size: 1,
              categoryID: 1,
              brandID: 1,
              "brandDetails.brandName": 1,
              "catagoriesDetails.categoryName": 1,
              createdAt: 1,
              updatedAt: 1,
            },
          },
        ],
        totalCount: [{ $count: "count" }],
      },
    };

    let project = {
      $project: {
        data: 1,
        totalCount: { $arrayElemAt: ["$totalCount.count", 0] },
      },
    };

    const results = await ProductModel.aggregate([
      MatchingStage,
      JoinWithBrand,
      UnwindBrand,
      JoinWithCategory,
      UnwindCategory,
      data,
      project,
    ]);
    const products = results[0].data;
    const totalDocuments = results[0].totalCount || 0;
    const totalPages = Math.ceil(totalDocuments / limit);

    return {
      status: true,
      totalDocuments: totalDocuments,
      currentPage: pageNo,
      totalPages: totalPages,
      products: products,
    };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

//! ProductListByKeywordService
const ProductListByKeywordService = async (req) => {
  try {
    let keyword = req.params.keyword;
    const limit = parseInt(req.params.item);
    const pageNo = parseInt(req.params.pageNo);
    let SearchRegex = {
      $regex: keyword,
      $options: "i",
    };
    let SearchParams = [
      { title: SearchRegex },
      { shortDes: SearchRegex },
      { color: SearchRegex },
      { des: SearchRegex },
      { size: SearchRegex },
      { remark: SearchRegex },
    ];

    let SearchStage = {
      $or: SearchParams,
    };

    if (isNaN(limit) || isNaN(pageNo)) {
      return res.status(400).json({ message: "Invalid parameters" });
    }

    const skip = (pageNo - 1) * limit; // Calculate the number of documents to skip

    let MatchingStage = { $match: SearchStage };
    let JoinWithBrand = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brandDetails",
      },
    };
    let UnwindBrand = {
      $unwind: "$brandDetails",
    };
    let JoinWithCategory = {
      $lookup: {
        from: "catagories",
        localField: "categoryID",
        foreignField: "_id",
        as: "catagoriesDetails",
      },
    };

    let UnwindCategory = {
      $unwind: "$catagoriesDetails",
    };

    let data = {
      $facet: {
        data: [
          { $skip: skip },
          { $limit: limit },
          {
            $project: {
              // Select fields to return, include brand name
              _id: 1,
              title: 1,
              shortDes: 1,
              price: 1,
              discount: 1,
              discountPrice: 1,
              img1: 1,
              img2: 1,
              img3: 1,
              img4: 1,
              img5: 1,
              img6: 1,
              img7: 1,
              img8: 1,
              star: 1,
              stock: 1,
              remark: 1,
              des: 1,
              color: 1,
              size: 1,
              categoryID: 1,
              brandID: 1,
              "brandDetails.brandName": 1,
              "catagoriesDetails.categoryName": 1,
              createdAt: 1,
              updatedAt: 1,
            },
          },
        ],
        totalCount: [{ $count: "count" }],
      },
    };

    let project = {
      $project: {
        data: 1,
        totalCount: { $arrayElemAt: ["$totalCount.count", 0] },
      },
    };

    const results = await ProductModel.aggregate([
      MatchingStage,
      JoinWithBrand,
      UnwindBrand,
      JoinWithCategory,
      UnwindCategory,
      data,
      project,
    ]);
    const products = results[0].data;
    const totalDocuments = results[0].totalCount || 0;
    const totalPages = Math.ceil(totalDocuments / limit);

    return {
      status: true,
      totalDocuments: totalDocuments,
      currentPage: pageNo,
      totalPages: totalPages,
      products: products,
    };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

//! ProductListByRemarkService
const ProductListByRemarkService = async (req) => {
  try {
    let remark = req.params.remark;
    const limit = parseInt(req.params.item);
    const pageNo = parseInt(req.params.pageNo);

    if (isNaN(limit) || isNaN(pageNo)) {
      return res.status(400).json({ message: "Invalid parameters" });
    }

    const skip = (pageNo - 1) * limit; // Calculate the number of documents to skip

    let MatchingStage = { $match: { remark: remark } };
    let JoinWithBrand = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brandDetails",
      },
    };
    let UnwindBrand = {
      $unwind: "$brandDetails",
    };
    let JoinWithCategory = {
      $lookup: {
        from: "catagories",
        localField: "categoryID",
        foreignField: "_id",
        as: "catagoriesDetails",
      },
    };

    let UnwindCategory = {
      $unwind: "$catagoriesDetails",
    };

    let data = {
      $facet: {
        data: [
          { $skip: skip },
          { $limit: limit },
          {
            $project: {
              // Select fields to return, include brand name
              _id: 1,
              title: 1,
              shortDes: 1,
              price: 1,
              discount: 1,
              discountPrice: 1,
              img1: 1,
              img2: 1,
              img3: 1,
              img4: 1,
              img5: 1,
              img6: 1,
              img7: 1,
              img8: 1,
              star: 1,
              stock: 1,
              remark: 1,
              des: 1,
              color: 1,
              size: 1,
              categoryID: 1,
              brandID: 1,
              "brandDetails.brandName": 1,
              "catagoriesDetails.categoryName": 1,
              createdAt: 1,
              updatedAt: 1,
            },
          },
        ],
        totalCount: [{ $count: "count" }],
      },
    };

    let project = {
      $project: {
        data: 1,
        totalCount: { $arrayElemAt: ["$totalCount.count", 0] },
      },
    };

    const results = await ProductModel.aggregate([
      MatchingStage,
      JoinWithBrand,
      UnwindBrand,
      JoinWithCategory,
      UnwindCategory,
      data,
      project,
    ]);
    const products = results[0].data;
    const totalDocuments = results[0].totalCount || 0;
    const totalPages = Math.ceil(totalDocuments / limit);

    return {
      status: true,
      totalDocuments: totalDocuments,
      currentPage: pageNo,
      totalPages: totalPages,
      products: products,
    };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

//! ProductListByStockService
const ProductListByStockService = async (req) => {
  try {
    let stock = req.params.stock;
    const limit = parseInt(req.params.item);
    const pageNo = parseInt(req.params.pageNo);

    if (isNaN(limit) || isNaN(pageNo)) {
      return res.status(400).json({ message: "Invalid parameters" });
    }

    const skip = (pageNo - 1) * limit; // Calculate the number of documents to skip

    let MatchingStage = { $match: { stock: JSON.parse(stock.toLowerCase()) } };
    let JoinWithBrand = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brandDetails",
      },
    };
    let UnwindBrand = {
      $unwind: "$brandDetails",
    };
    let JoinWithCategory = {
      $lookup: {
        from: "catagories",
        localField: "categoryID",
        foreignField: "_id",
        as: "catagoriesDetails",
      },
    };

    let UnwindCategory = {
      $unwind: "$catagoriesDetails",
    };

    let data = {
      $facet: {
        data: [
          { $skip: skip },
          { $limit: limit },
          {
            $project: {
              // Select fields to return, include brand name
              _id: 1,
              title: 1,
              shortDes: 1,
              price: 1,
              discount: 1,
              discountPrice: 1,
              img1: 1,
              img2: 1,
              img3: 1,
              img4: 1,
              img5: 1,
              img6: 1,
              img7: 1,
              img8: 1,
              star: 1,
              stock: 1,
              remark: 1,
              des: 1,
              color: 1,
              size: 1,
              categoryID: 1,
              brandID: 1,
              "brandDetails.brandName": 1,
              "catagoriesDetails.categoryName": 1,
              createdAt: 1,
              updatedAt: 1,
            },
          },
        ],
        totalCount: [{ $count: "count" }],
      },
    };

    let project = {
      $project: {
        data: 1,
        totalCount: { $arrayElemAt: ["$totalCount.count", 0] },
      },
    };

    const results = await ProductModel.aggregate([
      MatchingStage,
      JoinWithBrand,
      UnwindBrand,
      JoinWithCategory,
      UnwindCategory,
      data,
      project,
    ]);
    const products = results[0].data;
    const totalDocuments = results[0].totalCount || 0;
    const totalPages = Math.ceil(totalDocuments / limit);

    return {
      status: true,
      totalDocuments: totalDocuments,
      currentPage: pageNo,
      totalPages: totalPages,
      products: products,
    };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};
//! ProductListByColorService
const ProductListByColorService = async (req) => {
  // try {
  //   let color = req.params.color;
  //   let MatchStage = {
  //     $match: { color: color },
  //   };
  //   let JoinWithBrandStage = {
  //     $lookup: {
  //       from: 'brands',
  //       localField: 'brandID',
  //       foreignField: '_id',
  //       as: 'brand',
  //     },
  //   };
  //   let JoinWithCategoryStage = {
  //     $lookup: {
  //       from: 'catagories',
  //       localField: 'categoryID',
  //       foreignField: '_id',
  //       as: 'category',
  //     },
  //   };

  //   let UnwindBrandStage = {
  //     $unwind: '$brand',
  //   };

  //   let UnwindCategoryStage = {
  //     $unwind: '$category',
  //   };

  //   let projectionStage = {
  //     $project: {
  //       'brand._id': 0,
  //       'category._id': 0,
  //       'category.createdAt': 0,
  //       'category.updatedAt': 0,
  //       'brand.createdAt': 0,
  //       'brand.updatedAt': 0,
  //       categoryID: 0,
  //       brandID: 0,
  //       createdAt: 0,
  //       updatedAt: 0,
  //     },
  //   };
  //   const data = await ProductModel.aggregate([
  //     MatchStage,
  //     JoinWithBrandStage,
  //     JoinWithCategoryStage,
  //     UnwindBrandStage,
  //     UnwindCategoryStage,
  //     projectionStage,
  //   ]);
  //   return { status: true, data: data };
  // } catch (error) {
  //   return { status: false, error: error.toString() };
  // }
  try {
    let color = req.params.color;
    const limit = parseInt(req.params.item);
    const pageNo = parseInt(req.params.pageNo);

    if (isNaN(limit) || isNaN(pageNo)) {
      return res.status(400).json({ message: "Invalid parameters" });
    }

    const skip = (pageNo - 1) * limit; // Calculate the number of documents to skip

    let MatchingStage = { $match: { color: color } };
    let JoinWithBrand = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brandDetails",
      },
    };
    let UnwindBrand = {
      $unwind: "$brandDetails",
    };
    let JoinWithCategory = {
      $lookup: {
        from: "catagories",
        localField: "categoryID",
        foreignField: "_id",
        as: "catagoriesDetails",
      },
    };

    let UnwindCategory = {
      $unwind: "$catagoriesDetails",
    };

    let data = {
      $facet: {
        data: [
          { $skip: skip },
          { $limit: limit },
          {
            $project: {
              // Select fields to return, include brand name
              _id: 1,
              title: 1,
              shortDes: 1,
              price: 1,
              discount: 1,
              discountPrice: 1,
              img1: 1,
              img2: 1,
              img3: 1,
              img4: 1,
              img5: 1,
              img6: 1,
              img7: 1,
              img8: 1,
              star: 1,
              stock: 1,
              remark: 1,
              des: 1,
              color: 1,
              size: 1,
              categoryID: 1,
              brandID: 1,
              "brandDetails.brandName": 1,
              "catagoriesDetails.categoryName": 1,
              createdAt: 1,
              updatedAt: 1,
            },
          },
        ],
        totalCount: [{ $count: "count" }],
      },
    };

    let project = {
      $project: {
        data: 1,
        totalCount: { $arrayElemAt: ["$totalCount.count", 0] },
      },
    };

    const results = await ProductModel.aggregate([
      MatchingStage,
      JoinWithBrand,
      UnwindBrand,
      JoinWithCategory,
      UnwindCategory,
      data,
      project,
    ]);
    const products = results[0].data;
    const totalDocuments = results[0].totalCount || 0;
    const totalPages = Math.ceil(totalDocuments / limit);

    return {
      status: true,
      totalDocuments: totalDocuments,
      currentPage: pageNo,
      totalPages: totalPages,
      products: products,
    };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

//! ProductReviewService
const ReadSingleReviewService = async (req) => {
  try {
    let productID = new ObjectId(req.params.productID);
    let MatchStage = { $match: { productID: productID } };
    let JoinWithProfileStage = {
      $lookup: {
        from: "profiles",
        localField: "userID",
        foreignField: "userID",
        as: "profiles",
      },
    };

    let UnwindProfileStage = {
      $unwind: "$profiles",
    };

    let projectionStage = {
      $project: {
        des: 1,
        rating: 1,
        createdAt: 1,
        "profiles.cus_name": 1,
        _id: 0,
      },
    };

    let data = await ReviewModel.aggregate([
      MatchStage,
      JoinWithProfileStage,
      UnwindProfileStage,
      projectionStage,
    ]);
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const CreateReviewService = async (req) => {
  try {
    let user_id = new ObjectId(req.headers.user_id);
    let ReqBody = req.body;
    ReqBody.userID = user_id;
    ReqBody.productID = new ObjectId(ReqBody.productID);
    ReqBody.invoiceID = new ObjectId(ReqBody.invoiceID);

    const data = await ReviewModel.updateOne(
      { productID: ReqBody.productID, invoiceID: ReqBody.invoiceID },
      { $set: ReqBody },
      { upsert: true }
    );
    // const data = await ReviewModel.create(ReqBody);
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const ReadReviewService = async () => {
  try {
    const data = await ReviewModel.find();
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const UpdateReviewService = async (req) => {
  try {
    let reviewID = new ObjectId(req.params.reviewID);
    let ReqBody = req.body;
    const data = await ReviewModel.updateOne({ _id: reviewID }, ReqBody);
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const DeleteReviewService = async (req) => {
  try {
    let reviewID = new ObjectId(req.params.reviewID);
    const data = await ReviewModel.deleteOne({ _id: reviewID });
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

module.exports = {
  CreateBrandListService,
  ReadBrandListService,
  UpdateBrandListService,
  ReadBrandSingleService,
  DeleteBrandListService,
  ProductListByBrandService,
  CreateCategoryListService,
  ReadCategoryListService,
  ReadCategorySingleService,
  UpdateCategoryListService,
  DeleteCategoryListService,
  ProductListByCategoryService,
  CreateSliderListService,
  ReadSliderListService,
  ReadSingleSliderListService,
  UpdateSliderListService,
  DeleteSliderListService,
  ProductListBySimilarCategoryService,
  ProductListBySimilarBrandService,
  ProductListByStockService,
  ProductListByColorService,
  ProductListByKeywordService,
  ProductListByRemarkService,
  CreateProductService,
  ReadProductService,
  UpdateProductService,
  DeleteProductService,
  ProductDetailsService,
  CreateReviewService,
  ReadReviewService,
  UpdateReviewService,
  DeleteReviewService,
  ReadSingleReviewService,
};
