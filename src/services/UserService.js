const md5 = require("md5");
const mongoose = require("mongoose");
const UserModel = require("../models/UserModel");
const ProfileModel = require("../models/ProfileModel");
const OTPModel = require("../models/OTPModel");
const EmailSend = require("../utility/EmailHelper");
const { EncodeToken } = require("../utility/TokenHelper");
const ObjectId = mongoose.Types.ObjectId;

//! User Service 
const RegisterUserService = async (req) => {
  try {
    let reqBody = req.body;
    // reqBody.password = md5(req.body.password);
    let data = await UserModel.create(reqBody);
    console.log(!!data);
    if (!!data === true) {
      let innerReqBody = {
        userID: data._id,
      }
      let profile = await ProfileModel.create(innerReqBody);
      return { status: "success", data: profile };
    } else {
      return { status: "success", data: data };
    }


  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const LoginUserService = async (req, res) => {
  try {
    let reqBody = req.body;
    // reqBody.password = md5(req.body.password);
    let data = await UserModel.aggregate([
      { $match: reqBody },
      { $project: { _id: 1, email: 1 } },
    ]);

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

const ProfileUpdateUserService = async (req) => {
  let email = req.headers.email;
  // let password = md5(req.body.password);
  let password = req.body.password;

  let reqBody = {
    email: email,
    password: password
  }

  try {
    let data = await UserModel.updateOne(
      { email: email },
      {
        $set: reqBody
      }
    );

    return { status: "success", data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const ProfileReadUserService = async (req) => {
  let email = req.headers.email;

  try {
    let MatchStage = {
      $match: {
        email,
      }
    };
    let JoinWithProfileStage = {
      $lookup: {
        from: "profiles",
        localField: "_id",
        foreignField: "userID",
        as: "profile",
      },
    }

    let Project = {
      $project: {
        password: 0,
      }
    }
    let data = await UserModel.aggregate([MatchStage, JoinWithProfileStage, Project]);
    return { status: "success", data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const LogoutUserService = async (res) => {
  try {
    res.clearCookie('token');
    return { status: "success" };
  } catch (error) {
    return { status: false, error: e.toString() };
  }

};

const EmailVerifyUserService = async () => {
  try {
    return { status: "success" };

  } catch (e) {
    return { status: false, error: e.toString() };
  }
};

const RecoverVerifyEmailUserService = async (req) => {
  let email = req.params.email;
  let otp = Math.floor(100000 + Math.random() * 900000);

  try {
    // Email Account Query
    let UserCount = await UserModel.aggregate([
      { $match: { email: email } },
      { $count: "total" },
    ]);

    console.log(UserCount.length);

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

const RecoverVerifyOTPUserService = async (req) => {
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


const ResetPasswordUserService = async (req) => {
  let email = req.params.email;
  let otp = req.params.otp;
  otp = parseInt(otp);
  let reqBody = {
    email: email,
    password: req.body.password //! working .....
  };
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
  RegisterUserService, LoginUserService, ProfileUpdateUserService, ProfileReadUserService, LogoutUserService, EmailVerifyUserService, RecoverVerifyEmailUserService, RecoverVerifyOTPUserService, ResetPasswordUserService,
};
