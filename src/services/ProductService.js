const mongoose = require("mongoose");
const BrandModel = require("../models/BrandModel");
const CategoryModel = require("../models/CategoryModel");
const ProductSliderModel = require("../models/ProductSliderModel");
const ProductModel = require("../models/ProductModel");
const ProductDetailsModel = require("../models/ProductDetailsModel");
const ReviewModel = require("../models/ReviewModel");

const ObjectId = mongoose.Types.ObjectId;



//! ProductService
const CreateProductService = async (req) => {
  try {
    let ReqBody = req.body
    const data = await ProductModel.create(
      ReqBody
    );
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const ReadProductService = async () => {
  try {
    const data = await ProductModel.find();
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const UpdateProductService = async (req) => {
  try {
    let productID = new ObjectId(req.params.productID);
    let ReqBody = req.body
    const data = await ProductModel.updateOne(
      { _id: productID },
      ReqBody
    );
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const DeleteProductService = async (req) => {
  try {
    let productID = new ObjectId(req.params.productID);
    const data = await ProductModel.deleteOne(
      { _id: productID }
    );
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
    let ReqBody = req.body
    const data = await BrandModel.create(
      ReqBody
    );
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

const UpdateBrandListService = async (req) => {
  try {
    let brandID = new ObjectId(req.params.brandID);
    let ReqBody = req.body
    const data = await BrandModel.updateOne(
      { _id: brandID },
      ReqBody
    );
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const DeleteBrandListService = async (req) => {
  try {
    let brandID = new ObjectId(req.params.brandID);
    const data = await BrandModel.deleteOne(
      { _id: brandID }
    );
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const ProductListByBrandService = async (req) => {
  try {
    let brandID = new ObjectId(req.params.brandID);
    let MatchStage = {
      $match: { brandID: brandID }
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
      $unwind: "$brand"
    }

    let UnwindCategoryStage = {
      $unwind: "$category"
    }

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
    const data = await ProductModel.aggregate(
      [MatchStage, JoinWithBrandStage, JoinWithCategoryStage, UnwindBrandStage, UnwindCategoryStage, projectionStage]
    );
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

//! CategoryListService 
const CreateCategoryListService = async (req) => {
  try {
    let ReqBody = req.body
    const data = await CategoryModel.create(
      ReqBody
    );
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

const UpdateCategoryListService = async (req) => {
  try {
    let categoryID = new ObjectId(req.params.categoryID);
    let ReqBody = req.body
    const data = await CategoryModel.updateOne(
      { _id: categoryID },
      ReqBody
    );
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const DeleteCategoryListService = async (req) => {
  try {
    let categoryID = new ObjectId(req.params.categoryID);
    const data = await CategoryModel.deleteOne(
      { _id: categoryID }
    );
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const ProductListByCategoryService = async (req) => {
  try {
    let categoryID = new ObjectId(req.params.categoryID);
    let MatchStage = {
      $match: { categoryID: categoryID }
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
      $unwind: "$brand"
    }

    let UnwindCategoryStage = {
      $unwind: "$category"
    }

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
    const data = await ProductModel.aggregate(
      [MatchStage, JoinWithBrandStage, JoinWithCategoryStage, UnwindBrandStage, UnwindCategoryStage, projectionStage]
    );
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};


//! SliderListService  

const CreateSliderListService = async (req) => {
  try {
    let ReqBody = req.body
    const data = await ProductSliderModel.create(
      ReqBody
    );
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

const UpdateSliderListService = async (req) => {
  try {
    let sliderID = new ObjectId(req.params.sliderID);
    let ReqBody = req.body
    const data = await ProductSliderModel.updateOne(
      { _id: sliderID },
      ReqBody
    );
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const DeleteSliderListService = async (req) => {
  try {
    let sliderID = new ObjectId(req.params.sliderID);
    const data = await ProductSliderModel.deleteOne(
      { _id: sliderID }
    );
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

//! ProductListBySimilarService
const ProductListBySimilarService = async (req) => {
  try {
    let categoryID = new ObjectId(req.params.categoryID);
    let MatchStage = {
      $match: { categoryID: categoryID }
    };
    let Limit = {
      $limit: 20
    }
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
      $unwind: "$brand"
    }

    let UnwindCategoryStage = {
      $unwind: "$category"
    }

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
    const data = await ProductModel.aggregate(
      [MatchStage, Limit, JoinWithBrandStage, JoinWithCategoryStage, UnwindBrandStage, UnwindCategoryStage, projectionStage]
    );
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

//! ProductListByKeywordService
const ProductListByKeywordService = async (req) => {
  try {
    let keyword = req.params.keyword;
    let SearchRegex = {
      $regex: keyword,
      $options: "i",
    }

    let SearchParams = [
      { title: SearchRegex },
      { shortDes: SearchRegex },
      { color: SearchRegex },
      { des: SearchRegex },
      { size: SearchRegex },
      { remark: SearchRegex }
    ]

    let SearchStage = {
      $or: SearchParams
    }


    let MatchStage = {
      $match: SearchStage
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
      $unwind: "$brand"
    }

    let UnwindCategoryStage = {
      $unwind: "$category"
    }

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
    const data = await ProductModel.aggregate(
      [MatchStage, JoinWithBrandStage, JoinWithCategoryStage, UnwindBrandStage, UnwindCategoryStage, projectionStage]
    );
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

//! ProductListByRemarkService
const ProductListByRemarkService = async (req) => {
  try {
    let remark = req.params.remark;
    let MatchStage = {
      $match: { remark: remark }
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
      $unwind: "$brand"
    }

    let UnwindCategoryStage = {
      $unwind: "$category"
    }

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
    const data = await ProductModel.aggregate(
      [MatchStage, JoinWithBrandStage, JoinWithCategoryStage, UnwindBrandStage, UnwindCategoryStage, projectionStage]
    );
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};




//! ProductReviewService

const ReadSingleReviewService = async (req) => {
  try {
    let productID = new ObjectId(req.params.productID);
    let MatchStage = { $match: { productID: productID } };



    let data = await ReviewModel.aggregate([
      MatchStage

    ]);
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const CreateReviewService = async (req) => {
  try {
    let ReqBody = req.body
    const data = await ReviewModel.create(
      ReqBody
    );
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
    let sliderID = new ObjectId(req.params.sliderID);
    let ReqBody = req.body
    const data = await ReviewModel.updateOne(
      { _id: sliderID },
      ReqBody
    );
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const DeleteReviewService = async (req) => {
  try {
    let sliderID = new ObjectId(req.params.sliderID);
    const data = await ReviewModel.deleteOne(
      { _id: sliderID }
    );
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};


// =====


// const ListByBrandService = async (req) => {
//   try {
//     let BrandID = new ObjectId(req.params.BrandID);
//     let MatchStage = { $match: { brandID: BrandID } };
//     let JoinWithBrand = {
//       $lookup: {
//         from: "brands",
//         localField: "brandID",
//         foreignField: "_id",
//         as: "brand",
//       },
//     };
//     let JoinWithCategory = {
//       $lookup: {
//         from: "catagories",
//         localField: "categoryID",
//         foreignField: "_id",
//         as: "category",
//       },
//     };
//     let UnwindBrandStage = { $unwind: "$brand" };
//     let UnwindCategoryStage = { $unwind: "$category" };
//     let projectionStage = {
//       $project: {
//         "brand._id": 0,
//         "category._id": 0,
//         "category.createdAt": 0,
//         "category.updatedAt": 0,
//         "brand.createdAt": 0,
//         "brand.updatedAt": 0,
//         categoryID: 0,
//         brandID: 0,
//         createdAt: 0,
//         updatedAt: 0,
//       },
//     };

//     let data = await ProductModel.aggregate([
//       MatchStage,
//       JoinWithBrand,
//       JoinWithCategory,
//       UnwindBrandStage,
//       UnwindCategoryStage,
//       projectionStage,
//     ]);
//     return { status: true, data: data };
//   } catch (error) {
//     return { status: false, error: error.toString() };
//   }
// };
// const ListByCategoryService = async (req) => {
//   try {
//     let CategoryID = new ObjectId(req.params.CategoryID);
//     let MatchStage = { $match: { categoryID: CategoryID } };
//     let JoinWithBrand = {
//       $lookup: {
//         from: "brands",
//         localField: "brandID",
//         foreignField: "_id",
//         as: "brand",
//       },
//     };
//     let JoinWithCategory = {
//       $lookup: {
//         from: "catagories",
//         localField: "categoryID",
//         foreignField: "_id",
//         as: "category",
//       },
//     };
//     let UnwindBrandStage = { $unwind: "$brand" };
//     let UnwindCategoryStage = { $unwind: "$category" };
//     let projectionStage = {
//       $project: {
//         "brand._id": 0,
//         "category._id": 0,
//         "category.createdAt": 0,
//         "category.updatedAt": 0,
//         "brand.createdAt": 0,
//         "brand.updatedAt": 0,
//         categoryID: 0,
//         brandID: 0,
//         createdAt: 0,
//         updatedAt: 0,
//       },
//     };

//     let data = await ProductModel.aggregate([
//       MatchStage,
//       JoinWithBrand,
//       JoinWithCategory,
//       UnwindBrandStage,
//       UnwindCategoryStage,
//       projectionStage,
//     ]);
//     return { status: true, data: data };
//   } catch (error) {
//     return { status: false, error: error.toString() };
//   }
// };

// const ListByRemarkService = async (req) => {
//   try {
//     let Remark = req.params.Remark;
//     let MatchStage = { $match: { remark: Remark } };
//     let JoinWithBrand = {
//       $lookup: {
//         from: "brands",
//         localField: "brandID",
//         foreignField: "_id",
//         as: "brand",
//       },
//     };
//     let JoinWithCategory = {
//       $lookup: {
//         from: "catagories",
//         localField: "categoryID",
//         foreignField: "_id",
//         as: "category",
//       },
//     };
//     let UnwindBrandStage = { $unwind: "$brand" };
//     let UnwindCategoryStage = { $unwind: "$category" };
//     let projectionStage = {
//       $project: {
//         "brand._id": 0,
//         "category._id": 0,
//         "category.createdAt": 0,
//         "category.updatedAt": 0,
//         "brand.createdAt": 0,
//         "brand.updatedAt": 0,
//         categoryID: 0,
//         brandID: 0,
//         createdAt: 0,
//         updatedAt: 0,
//       },
//     };

//     let data = await ProductModel.aggregate([
//       MatchStage,
//       JoinWithBrand,
//       JoinWithCategory,
//       UnwindBrandStage,
//       UnwindCategoryStage,
//       projectionStage,
//     ]);
//     return { status: true, data: data };
//   } catch (error) {
//     return { status: false, error: error.toString() };
//   }
// };
// const ListBySmilerService = async (req) => {
//   try {
//     let CategoryID = new ObjectId(req.params.CategoryID);
//     let MatchStage = { $match: { categoryID: CategoryID } };
//     let limit = { $limit: 20 };
//     let JoinWithBrand = {
//       $lookup: {
//         from: "brands",
//         localField: "brandID",
//         foreignField: "_id",
//         as: "brand",
//       },
//     };
//     let JoinWithCategory = {
//       $lookup: {
//         from: "catagories",
//         localField: "categoryID",
//         foreignField: "_id",
//         as: "category",
//       },
//     };
//     let UnwindBrandStage = { $unwind: "$brand" };
//     let UnwindCategoryStage = { $unwind: "$category" };
//     let projectionStage = {
//       $project: {
//         "brand._id": 0,
//         "category._id": 0,
//         "category.createdAt": 0,
//         "category.updatedAt": 0,
//         "brand.createdAt": 0,
//         "brand.updatedAt": 0,
//         categoryID: 0,
//         brandID: 0,
//         createdAt: 0,
//         updatedAt: 0,
//       },
//     };

//     let data = await ProductModel.aggregate([
//       MatchStage,
//       limit,
//       JoinWithBrand,
//       JoinWithCategory,
//       UnwindBrandStage,
//       UnwindCategoryStage,
//       projectionStage,
//     ]);
//     return { status: true, data: data };
//   } catch (error) {
//     return { status: false, error: error.toString() };
//   }
// };
// const ListByKeywordService = async (req) => {
//   try {
//     let searchRegex = { $regex: req.params.Keyword, $options: "i" };
//     let searchParams = [{ title: searchRegex }, { shortDes: searchRegex }];
//     let searchQuery = { $or: searchParams };
//     let MatchStage = { $match: searchQuery };

//     let JoinWithBrand = {
//       $lookup: {
//         from: "brands",
//         localField: "brandID",
//         foreignField: "_id",
//         as: "brand",
//       },
//     };
//     let JoinWithCategory = {
//       $lookup: {
//         from: "catagories",
//         localField: "categoryID",
//         foreignField: "_id",
//         as: "category",
//       },
//     };
//     let UnwindBrandStage = { $unwind: "$brand" };
//     let UnwindCategoryStage = { $unwind: "$category" };
//     let projectionStage = {
//       $project: {
//         "brand._id": 0,
//         "category._id": 0,
//         "category.createdAt": 0,
//         "category.updatedAt": 0,
//         "brand.createdAt": 0,
//         "brand.updatedAt": 0,
//         categoryID: 0,
//         brandID: 0,
//         createdAt: 0,
//         updatedAt: 0,
//       },
//     };

//     let data = await ProductModel.aggregate([
//       MatchStage,
//       JoinWithBrand,
//       JoinWithCategory,
//       UnwindBrandStage,
//       UnwindCategoryStage,
//       projectionStage,
//     ]);
//     return { status: true, data: data };
//   } catch (error) {
//     return { status: false, error: error.toString() };
//   }
// };




module.exports = {
  CreateBrandListService,
  ReadBrandListService,
  UpdateBrandListService,
  DeleteBrandListService,
  ProductListByBrandService,
  CreateCategoryListService,
  ReadCategoryListService,
  UpdateCategoryListService,
  DeleteCategoryListService,
  ProductListByCategoryService,
  CreateSliderListService,
  ReadSliderListService,
  UpdateSliderListService,
  DeleteSliderListService,
  ProductListBySimilarService,
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
