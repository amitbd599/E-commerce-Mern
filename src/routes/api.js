const express = require("express");
const ProductController = require("../controllers/ProductController");
// const UserController = require("../controllers/UserController");
const router = express.Router();

//! Product product routes
router.post("/create-product", ProductController.CreateProduct);
router.get("/read-product", ProductController.ReadProduct);
router.post("/update-product/:productID", ProductController.UpdateProduct);
router.delete("/delete-product/:productID", ProductController.DeleteProduct);
router.get("/product-details/:productID", ProductController.ProductDetails);


//! Product brand routes
router.post("/create-brand-list", ProductController.CreateProductBrandList);
router.get("/read-brand-list", ProductController.ReadProductBrandList);
router.post("/update-brand-list/:brandID", ProductController.UpdateProductBrandList);
router.delete("/delete-brand-list/:brandID", ProductController.DeleteProductBrandList);
router.get("/product-list-by-brand/:brandID", ProductController.ProductListByBrand);


//! Product category routes
router.post("/create-category-list", ProductController.CreateCategoryList);
router.get("/read-category-list", ProductController.ReadCategoryList);
router.post("/update-category-list/:categoryID", ProductController.UpdateCategoryList);
router.delete("/delete-category-list/:categoryID", ProductController.DeleteCategoryList);
router.get("/product-list-by-category/:categoryID", ProductController.ProductListByCategory);


//! Product slider routes
router.post("/create-slider-list", ProductController.CreateSliderList);
router.get("/read-slider-list", ProductController.ReadSliderList);
router.post("/update-slider-list/:sliderID", ProductController.UpdateSliderList);
router.delete("/delete-slider-list/:sliderID", ProductController.DeleteSliderList);


//! Product List By Similar routes
router.get("/product-list-by-similar/:categoryID", ProductController.ProductListBySimilar);


//! Product List By keyword routes
router.get("/product-list-by-keyword/:keyword", ProductController.ProductListByKeyword);


//! Product List By remark routes
router.get("/product-list-by-remark/:remark", ProductController.ProductListByRemark);




//! Product review routes
router.post("/create-review-list", ProductController.CreateReview);
router.get("/read-review-list", ProductController.ReadReview);
router.post("/update-review-list/:reviewID", ProductController.UpdateReview);
router.delete("/delete-review-list/:reviewID", ProductController.DeleteReview);
router.get("/read-single-review/:reviewID", ProductController.ReadSingleReview);

// router.get("/ProductBrandList", ProductController.ProductBrandList);
// router.get("/ProductCategoryList", ProductController.CreateProductBrandList);
// router.get(
//   "/ProductListByBrand/:BrandID",
//   ProductController.ProductListByBrand
// );
// router.get(
//   "/ProductListByCategory/:CategoryID",
//   ProductController.ProductListByCategory
// );
// router.get(
//   "/ProductListBySmiler/:CategoryID",
//   ProductController.ProductListBySmiler
// );
// router.get(
//   "/ProductListByKeyword/:Keyword",
//   ProductController.ProductListByKeyword
// );
// router.get(
//   "/ProductListByRemark/:Remark",
//   ProductController.ProductListByRemark
// );
// router.get("/ProductDetails/:ProductID", ProductController.ProductDetails);
// router.get(
//   "/ProductReviewList/:ProductID",
//   ProductController.ProductReviewList
// );

//! User

// router.get("/UserOTP/:email", UserController.UserOTP);

module.exports = router;
