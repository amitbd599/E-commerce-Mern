const md5 = require("md5");
const UserModel = require("../models/UserModel");
const AdminModel = require("../models/AdminModel");
const ProfileModel = require("../models/ProfileModel");
const OTPModel = require("../models/OTPModel");
const EmailSend = require("../utility/EmailHelper");
const { EncodeToken } = require("../utility/TokenHelper");


//! Admin Service 
const RegisterAdminService = async (req) => {
  try {
    let reqBody = req.body;
    // reqBody.password = md5(req.body.password);
    let data = await AdminModel.create(reqBody);
    return { status: true, data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const LoginAdminService = async (req, res) => {
  try {
    let reqBody = req.body;

    // reqBody.password = md5(req.body.password);
    let data = await AdminModel.aggregate([
      { $match: reqBody },
      { $project: { _id: 1, email: 1 } },
    ]);

    console.log(data[0]["email"]);
    if (data.length > 0) {
      let token = EncodeToken(data[0]["email"]);

      let options = {
        maxAge: process.env.Cookie_Expire_Time,
        httpOnly: true,
        sameSite: "none",
        secure: true,
      };

      // Set cookie
      res.cookie("token", token, options);
      return { status: true, token: token, data: data[0] };
    } else {
      return { status: "unauthorized", data: data };
    }
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const ProfileUpdateAdminService = async (req) => {
  let email = req.headers.email;
  let password = md5(req.body.password);
  let confirm_password = md5(req.body.confirm_password);

  try {
    let UserCount = await UserModel.aggregate([
      { $match: { email, password } },

    ]);

    if (UserCount.length > 0) {
      let data = await UserModel.updateOne(
        { email: email },
        {
          $set: {
            password: confirm_password,
            confirm_password: confirm_password,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            img: img,
          }
        }
      );
      return { status: "success", data: data };
    } else {
      return { status: "error", data: "Email / password not match!" };
    }
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const ProfileReadService = async (req) => {
  let email = req.headers.email;
  console.log(email);
  try {
    let MatchStage = {
      $match: {
        email,
      }
    };

    let project = {
      $project: {
        email: 1,
        firstName: 1,
        lastName: 1,
        img: 1,
        phone: 1,
      }
    }
    let data = await UserModel.aggregate([MatchStage, project]);
    return { status: "success", data: data[0] };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const LogoutService = async (res) => {
  try {
    res.clearCookie('token');
    return { status: "success" };
  } catch (error) {
    return { status: false, error: e.toString() };
  }

};


const EmailVerifyService = async () => {
  try {
    return { status: "success" };

  } catch (e) {
    return { status: false, error: e.toString() };
  }
};

const RecoverVerifyEmailService = async () => {
  let email = req.params.email;
  let otp = Math.floor(100000 + Math.random() * 900000);

  try {
    // Email Account Query
    let UserCount = await UserModel.aggregate([
      { $match: { email: email } },
      { $count: "total" },
    ]);

    if (UserCount.length > 0) {
      //Create OTP
      let CreateOTP = await OTPModel.updateOne(
        { email: email },
        {
          otp, status: 0
        },
        { upsert: true, new: true }
      );
      // Send Email
      let SendEmail = await EmailSend(
        email,
        "Your PIN Code is =" + otp,
        "Task Manager PIN Verification"
      );
      return { status: "success", data: SendEmail };
    } else {
      return { status: "error", data: "No User Found" };
    }
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const RecoverVerifyOTPService = async (req) => {
  let email = req.params.email;
  let otp = req.params.otp;
  otp = parseInt(otp);
  try {
    let OTPCount = await OTPModel.aggregate([
      { $match: { email, otp, status: 0 } },
      { $count: "total" },
    ]);

    if (OTPCount.length > 0) {
      let OTPUpdate = await OTPModel.updateOne(
        {
          email,
          otp,
          status: 0,
        },
        {
          otp,
          status: 1,
        }
      );
      return { status: "success", data: OTPUpdate };
    } else {
      return { status: "error", data: "Invalid OTP Code" };
    }
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};


const ResetPasswordService = async (req) => {
  let email = req.params.email;
  let otp = req.params.otp;
  otp = parseInt(otp);
  let reqBody = req.body;
  // reqBody.password = md5(req.body.password);
  try {
    let OTPUsedCount = await OTPModel.aggregate([
      { $match: { email, otp, status: 1 } },
      { $count: "total" },
    ]);
    if (OTPUsedCount.length > 0) {
      let PassUpdate = await UserModel.updateOne(reqBody);
      return { status: "success", data: PassUpdate };
    } else {
      return { status: "error", data: "Something is Wrong!" };
    }
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};


module.exports = {
  RegisterService, LoginService, ProfileUpdateService, ProfileReadService, LogoutService, EmailVerifyService, RecoverVerifyEmailService, RecoverVerifyOTPService, ResetPasswordService
};
