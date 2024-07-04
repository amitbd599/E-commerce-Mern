const express = require("express");
const ProductController = require("../controllers/ProductController");
const AdminController = require("../controllers/AdminController");
const UserController = require("../controllers/UserController");
const WishListController = require("../controllers/WishListController");
const CartListController = require("../controllers/CartListController");
const InvoiceController = require("../controllers/InvoiceController");
const FeaturesController = require("../controllers/FeaturesController");
const AuthVerificationUser = require("../middlewares/AuthVerificationUser");
const AuthVerificationAdmin = require("../middlewares/AuthVerificationAdmin");
const { upload } = require("../utility/FileUpload");
const router = express.Router();



// ! File Uploads
router.post("/upload", AuthVerificationAdmin, upload.array("img", 500), AdminController.FileUpload);
router.post("/remove", AuthVerificationAdmin, AdminController.DeleteFileUpload);
router.get("/all-file/:item/:pageNo", AdminController.AllFile);



//! Admin routes
router.post("/register-admin", AdminController.RegisterAdmin);
router.post("/login-admin", AdminController.LoginAdmin);
router.get("/verify-admin", AuthVerificationAdmin, AdminController.VerifyAdmin);
router.get("/logout-admin", AdminController.LogoutAdmin);
router.get("/read-admin", AuthVerificationAdmin, AdminController.AdminRead);
router.get("/read-all-user", AuthVerificationAdmin, AdminController.ReadAllUser);
router.post(
  "/update-admin",
  AuthVerificationAdmin,
  AdminController.AdminUpdate
);
router.post(
  "/forgot-password-admin/:email",
  AdminController.RecoverVerifyEmailAdmin
);
router.post(
  "/otp-verify-admin/:email/:otp",
  AdminController.RecoverVerifyOTPAdmin
);
router.post(
  "/reset-password-admin/:email/:otp",
  AdminController.ResetPasswordAdmin
);

//! User routes
router.post("/register-user", UserController.RegisterUser);
router.post("/login-user", UserController.LoginUser);
router.get("/verify-user", AuthVerificationUser, UserController.VerifyUser);
router.get("/logout-user", UserController.LogoutUser);
router.get(
  "/profile-read-user",
  AuthVerificationUser,
  UserController.ProfileReadUser
);
router.post(
  "/profile-update-user",
  AuthVerificationUser,
  UserController.ProfileUpdateUser
);
router.post(
  "/forgot-password-user/:email",
  UserController.RecoverVerifyEmailUser
);
router.post(
  "/otp-verify-user/:email/:otp",
  UserController.RecoverVerifyOTPUser
);
router.post(
  "/reset-password-user/:email/:otp",
  UserController.ResetPasswordUser
);

//! Product product routes
router.post(
  "/create-product",
  AuthVerificationAdmin,
  ProductController.CreateProduct
);
router.get("/read-product/:item/:pageNo", ProductController.ReadProduct);
router.post(
  "/update-product/:productID",
  AuthVerificationAdmin,
  ProductController.UpdateProduct
);
router.delete(
  "/delete-product/:productID",
  AuthVerificationAdmin,
  ProductController.DeleteProduct
);
router.get("/product-details/:productID", ProductController.ProductDetails);

//! Product brand routes
router.post(
  "/create-brand-list",
  AuthVerificationAdmin,
  ProductController.CreateProductBrandList
);
router.get("/read-brand-list", ProductController.ReadProductBrandList);
router.get("/read-single-brand/:brandID", ProductController.ReadBrandSingle);
router.post(
  "/update-brand-list/:brandID",
  AuthVerificationAdmin,
  ProductController.UpdateProductBrandList
);
router.delete(
  "/delete-brand-list/:brandID",
  AuthVerificationAdmin,
  ProductController.DeleteProductBrandList
);
router.get(
  "/product-list-by-brand/:brandID",
  AuthVerificationAdmin,
  ProductController.ProductListByBrand
);

//! Product category routes
router.post(
  "/create-category-list",
  AuthVerificationAdmin,
  ProductController.CreateCategoryList
);
router.get("/read-category-list", ProductController.ReadCategoryList);
router.get("/read-single-category/:categoryID", ProductController.ReadCategorySingle);
router.post(
  "/update-category-list/:categoryID",
  AuthVerificationAdmin,
  ProductController.UpdateCategoryList
);
router.delete(
  "/delete-category-list/:categoryID",
  AuthVerificationAdmin,
  ProductController.DeleteCategoryList
);
router.get(
  "/product-list-by-category/:categoryID",
  AuthVerificationAdmin,
  ProductController.ProductListByCategory
);

//! Product slider routes
router.post(
  "/create-slider-list",
  AuthVerificationAdmin,
  ProductController.CreateSliderList
);
router.get("/read-slider-list", ProductController.ReadSliderList);
router.get("/read-single-slider-list/:sliderID", ProductController.ReadSingleSlider);
router.post(
  "/update-slider-list/:sliderID",
  AuthVerificationAdmin,
  ProductController.UpdateSliderList
);
router.delete(
  "/delete-slider-list/:sliderID",
  AuthVerificationAdmin,
  ProductController.DeleteSliderList
);

//! Product List By Similar category routes
router.get(
  "/product-list-by-similar-category/:categoryID/:item/:pageNo",
  ProductController.ProductListBySimilarCategory
);

//! Product List By Similar brand routes
router.get(
  "/product-list-by-similar-brand/:brandID/:item/:pageNo",
  ProductController.ProductListBySimilarBrand
);

//! Product List By keyword routes
router.get(
  "/product-list-by-keyword/:keyword/:item/:pageNo",
  ProductController.ProductListByKeyword
);

//! Product List By remark routes
router.get(
  "/product-list-by-remark/:remark/:item/:pageNo",
  ProductController.ProductListByRemark
);

//! Product List By stock routes
router.get(
  "/product-list-by-stock/:stock/:item/:pageNo",
  ProductController.ProductListByStock
);

//! Product List By color routes
router.get(
  "/product-list-by-color/:color/:item/:pageNo",
  ProductController.ProductListByColor
);

//! Product review routes
router.post(
  "/create-review-list",
  AuthVerificationUser,
  ProductController.CreateReview
);
router.get("/read-review-list", ProductController.ReadReview);
router.post(
  "/update-review-list/:reviewID",
  AuthVerificationAdmin,
  ProductController.UpdateReview
);
router.delete(
  "/delete-review-list/:reviewID",
  AuthVerificationAdmin,
  ProductController.DeleteReview
);
router.get(
  "/read-single-review/:productID",
  ProductController.ReadSingleReview
);

//! Product wish routes
router.post(
  "/create-wish-list",
  AuthVerificationUser,
  WishListController.CreateWish
);
router.get(
  "/read-wish-list",
  AuthVerificationUser,
  WishListController.ReadWish
);
router.delete(
  "/delete-wish-list/:wishID",
  AuthVerificationUser,
  WishListController.DeleteWish
);

//! Cart routes
router.post(
  "/create-cart-list",
  AuthVerificationUser,
  CartListController.CreateCart
);
router.get(
  "/read-cart-list",
  AuthVerificationUser,
  CartListController.ReadCart
);
router.post(
  "/update-cart-list/:cartID",
  AuthVerificationUser,
  CartListController.UpdateCart
);
router.delete(
  "/delete-cart-list/:cartID",
  AuthVerificationUser,
  CartListController.DeleteCart
);

//! Features routes
router.post("/create-features-list", AuthVerificationAdmin, FeaturesController.CreateFeatures);
router.get("/read-features-list", FeaturesController.ReadFeatures);
router.get("/read-single-features/:featuresID", FeaturesController.ReadSingleFeatures);
router.post(
  "/update-features-list/:featuresID", AuthVerificationAdmin,
  FeaturesController.UpdateFeatures
);
router.delete(
  "/delete-features-list/:featuresID", AuthVerificationAdmin,
  FeaturesController.DeleteFeatures
);

//! Invoice & Payment routes
router.post(
  "/create-invoice-list",
  AuthVerificationUser,
  InvoiceController.CreateInvoice
);
router.get(
  "/invoice-list",
  AuthVerificationUser,
  InvoiceController.InvoiceList
);
router.get(
  "/get-all-invoice-list",
  AuthVerificationAdmin,
  InvoiceController.GetAllInvoiceList
);
router.get("/order-list", AuthVerificationUser, InvoiceController.OrderList);
router.get("/all-order-list", AuthVerificationAdmin, InvoiceController.AllOrderList);
router.get(
  "/invoice-product-list/:invoiceID",
  AuthVerificationUser,
  InvoiceController.InvoiceProductList
);
router.post("/payment-success/:trxID", InvoiceController.PaymentSuccess);
router.post("/payment-cancel/:trxID", InvoiceController.PaymentCancel);
router.post("/payment-fail/:trxID", InvoiceController.PaymentFail);
router.post("/payment-ipn/:trxID", InvoiceController.PaymentIPN);

module.exports = router;
