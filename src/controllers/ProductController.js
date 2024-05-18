const {
  BrandListService,
  CategoryListService,
  SliderListService,
  ListByBrandService,
  ListByCategoryService,
  ListBySmilerService,
  ListByKeywordService,
  ListByRemarkService,
  ProductDetailsService,
  ReviewListService,
  CreateBrandListService,
  ReadBrandListService,
  UpdateBrandListService,
  DeleteBrandListService,
  CreateCategoryListService,
  ReadCategoryListService,
  UpdateCategoryListService,
  DeleteCategoryListService,
  CreateSliderListService,
  ReadSliderListService,
  UpdateSliderListService,
  DeleteSliderListService,
  ProductListByBrandService,
  ProductListByCategoryService,
  ProductListBySimilarService,
  ProductListByKeywordService,
  ProductListByRemarkService,
  CreateReviewService,
  ReadReviewService,
  UpdateReviewService,
  DeleteReviewService,
  ReadSingleReviewService,
} = require("../services/ProductService");


//! ProductBrandList
exports.CreateProductBrandList = async (req, res) => {
  let result = await CreateBrandListService(req);
  return res.status(200).json(result);
};
exports.ReadProductBrandList = async (req, res) => {
  let result = await ReadBrandListService();
  return res.status(200).json(result);
};
exports.UpdateProductBrandList = async (req, res) => {
  let result = await UpdateBrandListService(req);
  return res.status(200).json(result);
};
exports.DeleteProductBrandList = async (req, res) => {
  let result = await DeleteBrandListService(req);
  return res.status(200).json(result);
};

exports.ProductListByBrand = async (req, res) => {
  let result = await ProductListByBrandService();
  return res.status(200).json(result);
};



//! ProductCategoryList
exports.CreateCategoryList = async (req, res) => {
  let result = await CreateCategoryListService(req);
  return res.status(200).json(result);
};
exports.ReadCategoryList = async (req, res) => {
  let result = await ReadCategoryListService();
  return res.status(200).json(result);
};
exports.UpdateCategoryList = async (req, res) => {
  let result = await UpdateCategoryListService(req);
  return res.status(200).json(result);
};
exports.DeleteCategoryList = async (req, res) => {
  let result = await DeleteCategoryListService(req);
  return res.status(200).json(result);
};

exports.ProductListByCategory = async (req, res) => {
  let result = await ProductListByCategoryService();
  return res.status(200).json(result);
};


//! ProductSliderList

exports.CreateSliderList = async (req, res) => {
  let result = await CreateSliderListService(req);
  return res.status(200).json(result);
};
exports.ReadSliderList = async (req, res) => {
  let result = await ReadSliderListService();
  return res.status(200).json(result);
};
exports.UpdateSliderList = async (req, res) => {
  let result = await UpdateSliderListService(req);
  return res.status(200).json(result);
};
exports.DeleteSliderList = async (req, res) => {
  let result = await DeleteSliderListService(req);
  return res.status(200).json(result);
};


//! ProductListBySimilar
exports.ProductListBySimilar = async (req, res) => {
  let result = await ProductListBySimilarService(req);
  return res.status(200).json(result);
};


//! ProductListByKeyword
exports.ProductListByKeyword = async (req, res) => {
  let result = await ProductListByKeywordService(req);
  return res.status(200).json(result);
};


//! ProductListByRemark
exports.ProductListByRemark = async (req, res) => {
  let result = await ProductListByRemarkService(req);
  return res.status(200).json(result);
};


//! ProductDetails
exports.ProductDetails = async (req, res) => {
  let result = await ProductDetailsService(req);
  return res.status(200).json(result);
};

//! ProductReview
exports.CreateReview = async (req, res) => {
  let result = await CreateReviewService(req);
  return res.status(200).json(result);
};
exports.ReadReview = async (req, res) => {
  let result = await ReadReviewService();
  return res.status(200).json(result);
};
exports.UpdateReview = async (req, res) => {
  let result = await UpdateReviewService(req);
  return res.status(200).json(result);
};
exports.DeleteReview = async (req, res) => {
  let result = await DeleteReviewService(req);
  return res.status(200).json(result);
};

exports.ReadSingleReview = async (req, res) => {
  let result = await ReadSingleReviewService(req);
  return res.status(200).json(result);
};





exports.ProductSliderList = async (req, res) => {
  let result = await SliderListService();
  return res.status(200).json(result);
};

exports.ProductListByCategory = async (req, res) => {
  let result = await ListByCategoryService(req);
  return res.status(200).json(result);
};

exports.ProductListBySmiler = async (req, res) => {
  let result = await ListBySmilerService(req);
  return res.status(200).json(result);
};
exports.ProductListByKeyword = async (req, res) => {
  let result = await ListByKeywordService(req);
  return res.status(200).json(result);
};


exports.ProductReviewList = async (req, res) => {
  let result = await ReviewListService(req);
  return res.status(200).json(result);
};
