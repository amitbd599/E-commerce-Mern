const express = require("express");
const ProductController = require("../controllers/ProductController");
const AdminController = require("../controllers/AdminController");
const UserController = require("../controllers/UserController");
const AuthVerificationUser = require("../middlewares/AuthVerificationUser");
const AuthVerificationAdmin = require("../middlewares/AuthVerificationAdmin");
const router = express.Router();


//! Admin routes
router.post("/register-admin", AdminController.RegisterAdmin);
router.post("/login-admin", AdminController.LoginAdmin);
router.get("/logout-admin", AdminController.LogoutAdmin);
router.get("/read-admin", AuthVerificationAdmin, AdminController.AdminRead);
router.post("/update-admin", AuthVerificationAdmin, AdminController.AdminUpdate);
router.post("/forgot-password-admin/:email", AdminController.RecoverVerifyEmailAdmin);
router.post("/otp-verify-admin/:email/:otp", AdminController.RecoverVerifyOTPAdmin);
router.post("/reset-password-admin/:email/:otp", AdminController.ResetPasswordAdmin);


//! User routes
router.post("/register-user", UserController.RegisterUser);
router.post("/login-user", UserController.LoginUser);
router.get("/logout-user", UserController.LogoutUser);
router.get("/profile-read-user", AuthVerificationUser, UserController.ProfileReadUser);
router.post("/profile-update-user", AuthVerificationUser, UserController.ProfileUpdateUser);
router.post("/forgot-password-user/:email", UserController.RecoverVerifyEmailUser);
router.post("/otp-verify-user/:email/:otp", UserController.RecoverVerifyOTPUser);
router.post("/reset-password-user/:email/:otp", UserController.ResetPasswordUser);





//! Product product routes
router.post("/create-product", AuthVerificationAdmin, ProductController.CreateProduct);
router.get("/read-product", AuthVerificationAdmin, ProductController.ReadProduct);
router.post("/update-product/:productID", AuthVerificationAdmin, ProductController.UpdateProduct);
router.delete("/delete-product/:productID", AuthVerificationAdmin, ProductController.DeleteProduct);
router.get("/product-details/:productID", AuthVerificationAdmin, ProductController.ProductDetails);


//! Product brand routes
router.post("/create-brand-list", AuthVerificationAdmin, ProductController.CreateProductBrandList);
router.get("/read-brand-list", AuthVerificationAdmin, ProductController.ReadProductBrandList);
router.post("/update-brand-list/:brandID", AuthVerificationAdmin, ProductController.UpdateProductBrandList);
router.delete("/delete-brand-list/:brandID", AuthVerificationAdmin, ProductController.DeleteProductBrandList);
router.get("/product-list-by-brand/:brandID", AuthVerificationAdmin, ProductController.ProductListByBrand);


//! Product category routes
router.post("/create-category-list", AuthVerificationAdmin, ProductController.CreateCategoryList);
router.get("/read-category-list", AuthVerificationAdmin, ProductController.ReadCategoryList);
router.post("/update-category-list/:categoryID", AuthVerificationAdmin, ProductController.UpdateCategoryList);
router.delete("/delete-category-list/:categoryID", AuthVerificationAdmin, ProductController.DeleteCategoryList);
router.get("/product-list-by-category/:categoryID", AuthVerificationAdmin, ProductController.ProductListByCategory);


//! Product slider routes
router.post("/create-slider-list", AuthVerificationAdmin, ProductController.CreateSliderList);
router.get("/read-slider-list", AuthVerificationAdmin, ProductController.ReadSliderList);
router.post("/update-slider-list/:sliderID", AuthVerificationAdmin, ProductController.UpdateSliderList);
router.delete("/delete-slider-list/:sliderID", AuthVerificationAdmin, ProductController.DeleteSliderList);


//! Product List By Similar routes
router.get("/product-list-by-similar/:categoryID", AuthVerificationAdmin, ProductController.ProductListBySimilar);


//! Product List By keyword routes
router.get("/product-list-by-keyword/:keyword", AuthVerificationAdmin, ProductController.ProductListByKeyword);


//! Product List By remark routes
router.get("/product-list-by-remark/:remark", AuthVerificationAdmin, ProductController.ProductListByRemark);


//! Product review routes
router.post("/create-review-list", AuthVerificationAdmin, ProductController.CreateReview);
router.get("/read-review-list", AuthVerificationAdmin, ProductController.ReadReview);
router.post("/update-review-list/:reviewID", AuthVerificationAdmin, ProductController.UpdateReview);
router.delete("/delete-review-list/:reviewID", AuthVerificationAdmin, ProductController.DeleteReview);
router.get("/read-single-review/:productID", AuthVerificationAdmin, ProductController.ReadSingleReview);



module.exports = router;
