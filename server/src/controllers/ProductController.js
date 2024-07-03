const {
  ProductDetailsService,
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
  ProductListByKeywordService,
  ProductListByRemarkService,
  CreateReviewService,
  ReadReviewService,
  UpdateReviewService,
  DeleteReviewService,
  ReadSingleReviewService,
  CreateProductService,
  ReadProductService,
  UpdateProductService,
  DeleteProductService,
  ProductListBySimilarCategoryService,
  ProductListBySimilarBrandService,
  ProductListByStockService,
  ProductListByColorService,
  ReadSingleSliderListService,
  ReadBrandSingleService,
  ReadCategorySingleService,
} = require('../services/ProductService');

//! ProductList
exports.CreateProduct = async (req, res) => {
  let result = await CreateProductService(req);
  return res.status(200).json(result);
};
exports.ReadProduct = async (req, res) => {
  let result = await ReadProductService(req);
  return res.status(200).json(result);
};
exports.UpdateProduct = async (req, res) => {
  let result = await UpdateProductService(req);
  return res.status(200).json(result);
};
exports.DeleteProduct = async (req, res) => {
  let result = await DeleteProductService(req);
  return res.status(200).json(result);
};

exports.ProductDetails = async (req, res) => {
  let result = await ProductDetailsService(req);
  return res.status(200).json(result);
};

//! ProductBrandList
exports.CreateProductBrandList = async (req, res) => {
  let result = await CreateBrandListService(req);
  return res.status(200).json(result);
};
exports.ReadProductBrandList = async (req, res) => {
  let result = await ReadBrandListService();
  return res.status(200).json(result);
};
exports.ReadBrandSingle = async (req, res) => {
  let result = await ReadBrandSingleService(req);
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
  let result = await ProductListByBrandService(req);
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
exports.ReadCategorySingle = async (req, res) => {
  let result = await ReadCategorySingleService(req);
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
  let result = await ProductListByCategoryService(req);
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

exports.ReadSingleSlider = async (req, res) => {
  let result = await ReadSingleSliderListService(req);
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

//! ProductListBySimilarCategory
exports.ProductListBySimilarCategory = async (req, res) => {
  let result = await ProductListBySimilarCategoryService(req);
  return res.status(200).json(result);
};

//! ProductListBySimilar
exports.ProductListBySimilarBrand = async (req, res) => {
  let result = await ProductListBySimilarBrandService(req);
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

//! ProductListByStock
exports.ProductListByStock = async (req, res) => {
  let result = await ProductListByStockService(req);
  return res.status(200).json(result);
};

//! ProductListByColor
exports.ProductListByColor = async (req, res) => {
  let result = await ProductListByColorService(req);
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
