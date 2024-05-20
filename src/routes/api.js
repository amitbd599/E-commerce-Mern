const express = require("express");
const ProductController = require("../controllers/ProductController");
const AdminController = require("../controllers/AdminController");
const UserController = require("../controllers/UserController");
const AuthVerification = require("../middlewares/AuthVerification");
const router = express.Router();


//! Admin routes
router.post("/register-admin", AdminController.RegisterAdmin);
router.post("/login-admin", AdminController.LoginAdmin);
router.get("/logout-admin", AdminController.LogoutAdmin);
router.get("/profile-read-admin", AuthVerification, AdminController.AdminRead);
router.post("/profile-update-admin", AuthVerification, AdminController.AdminUpdate);
router.post("/forgot-password-admin/:email", AdminController.RecoverVerifyEmailAdmin);
router.post("/otp-verify-admin/:email/:otp", AdminController.RecoverVerifyOTPAdmin);
router.post("/reset-password-admin/:email/:otp", AdminController.ResetPasswordAdmin);


//! User routes
router.post("/register-user", UserController.Register);
router.post("/login-user", UserController.Login);
router.get("/logout-user", UserController.Logout);
router.get("/profile-read-user", AuthVerification, UserController.ProfileRead);
router.post("/profile-update-user", AuthVerification, UserController.ProfileUpdate);
router.post("/forgot-password-user/:email", UserController.RecoverVerifyEmail);
router.post("/otp-verify-user/:email/:otp", UserController.RecoverVerifyOTP);
router.post("/reset-password-user/:email/:otp", UserController.ResetPassword);


//! Product product routes
router.post("/create-product", AuthVerification, ProductController.CreateProduct);
router.get("/read-product", AuthVerification, ProductController.ReadProduct);
router.post("/update-product/:productID", AuthVerification, ProductController.UpdateProduct);
router.delete("/delete-product/:productID", AuthVerification, ProductController.DeleteProduct);
router.get("/product-details/:productID", AuthVerification, ProductController.ProductDetails);


//! Product brand routes
router.post("/create-brand-list", AuthVerification, ProductController.CreateProductBrandList);
router.get("/read-brand-list", AuthVerification, ProductController.ReadProductBrandList);
router.post("/update-brand-list/:brandID", AuthVerification, ProductController.UpdateProductBrandList);
router.delete("/delete-brand-list/:brandID", AuthVerification, ProductController.DeleteProductBrandList);
router.get("/product-list-by-brand/:brandID", AuthVerification, ProductController.ProductListByBrand);


//! Product category routes
router.post("/create-category-list", AuthVerification, ProductController.CreateCategoryList);
router.get("/read-category-list", AuthVerification, ProductController.ReadCategoryList);
router.post("/update-category-list/:categoryID", AuthVerification, ProductController.UpdateCategoryList);
router.delete("/delete-category-list/:categoryID", AuthVerification, ProductController.DeleteCategoryList);
router.get("/product-list-by-category/:categoryID", AuthVerification, ProductController.ProductListByCategory);


//! Product slider routes
router.post("/create-slider-list", AuthVerification, ProductController.CreateSliderList);
router.get("/read-slider-list", AuthVerification, ProductController.ReadSliderList);
router.post("/update-slider-list/:sliderID", AuthVerification, ProductController.UpdateSliderList);
router.delete("/delete-slider-list/:sliderID", AuthVerification, ProductController.DeleteSliderList);


//! Product List By Similar routes
router.get("/product-list-by-similar/:categoryID", AuthVerification, ProductController.ProductListBySimilar);


//! Product List By keyword routes
router.get("/product-list-by-keyword/:keyword", AuthVerification, ProductController.ProductListByKeyword);


//! Product List By remark routes
router.get("/product-list-by-remark/:remark", AuthVerification, ProductController.ProductListByRemark);


//! Product review routes
router.post("/create-review-list", AuthVerification, ProductController.CreateReview);
router.get("/read-review-list", AuthVerification, ProductController.ReadReview);
router.post("/update-review-list/:reviewID", AuthVerification, ProductController.UpdateReview);
router.delete("/delete-review-list/:reviewID", AuthVerification, ProductController.DeleteReview);
router.get("/read-single-review/:productID", AuthVerification, ProductController.ReadSingleReview);



module.exports = router;
