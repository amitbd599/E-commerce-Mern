const path = require('path');
const md5 = require("md5");
const fs = require("fs");
const AdminModel = require("../models/AdminModel");
const OTPModel = require("../models/OTPModel");
const EmailSend = require("../utility/EmailHelper");
const { EncodeToken } = require("../utility/TokenHelper");
const FileModel = require('../models/FileModel');
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
//! File upload service
// let FileUploadService = async (req, res) => {
//   try {
//     let reqBody = {
//       filename: req?.files[0]?.filename
//     }
//     let data = await FileModel.create(reqBody);
//     return { status: true, data: data };

//   } catch (error) {
//     return { status: false, error: error.toString() };
//   }
// }

let FileUploadService = async (req, res) => {
  try {
    // Array to hold the data of all inserted files
    let data = [];

    // Loop through each file and insert its data into the FileModel
    for (let i = 0; i < req.files.length; i++) {
      let reqBody = {
        filename: req.files[i].filename
      };
      let fileData = await FileModel.create(reqBody);
      data.push(fileData);
    }

    return { status: true, data: data };

  } catch (error) {
    return { status: false, error: error.toString() };
  }
};


let DeleteFileUploadService = async (req, res) => {
  try {
    let id = new ObjectId(req.body._id);
    let ImageName = req.body?.filename;
    const filePath = path.join(__dirname, `../../uploads/${ImageName}`);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log(err);
      }
    });


    const data = await FileModel.deleteOne(
      { _id: id, filename: ImageName }
    );
    return { status: true, data: data };



  } catch (error) {
    return { status: false, error: error.toString() };
  }
}
const AllFileService = async (req) => {
  try {
    const limit = parseInt(req.params.item); // Number of items per page
    const pageNo = parseInt(req.params.pageNo); // Current page number

    if (isNaN(limit) || isNaN(pageNo)) {
      return res.status(400).json({ message: "Invalid parameters" });
    }

    const skip = (pageNo - 1) * limit; // Calculate the number of documents to skip

    const aggregatePipeline = [


      {
        $facet: {
          data: [
            { $skip: skip },
            { $limit: limit },

          ],
          totalCount: [{ $count: "count" }],
        },
      },

    ];

    const results = await FileModel.aggregate(aggregatePipeline);
    console.log(results[0]?.totalCount?.count);
    const file = results[0].data;
    const totalDocuments = results[0]?.totalCount;
    const totalPages = Math.ceil(totalDocuments / limit);

    return {
      status: true,
      totalDocuments: totalDocuments,
      currentPage: pageNo,
      totalPages: totalPages,
      file: file,
    };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

//! Admin Service
const RegisterAdminService = async (req) => {
  try {
    let reqBody = req.body;
    // reqBody.password = md5(req.body.password);
    let admin = await AdminModel.find();
    if (admin.length > 0) {
      return { status: "error", msg: "have account" };
    } else {
      let data = await AdminModel.create(reqBody);
      return { status: "success", data: data };
    }
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

    if (data.length > 0) {
      let token_admin = EncodeToken(data[0]["email"]);

      let options = {
        maxAge: process.env.Cookie_Expire_Time,
        httpOnly: true,
        sameSite: "none",
        secure: true,
      };

      // Set cookie
      res.cookie("token_admin", token_admin, options);
      return { status: true, token_admin: token_admin, data: data[0] };
    } else {
      return { status: "unauthorized", data: data };
    }
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const AdminUpdateService = async (req) => {
  let email = req.headers.email;
  // let password = md5(req.body.password);
  let password = req.body.password;

  let reqBody = {
    email: email,
    password: password,
  };

  try {
    let data = await AdminModel.updateOne(
      { email: email },
      {
        $set: reqBody,
      }
    );

    return { status: "success", data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const AdminReadService = async (req) => {
  let email = req.headers.email;
  try {
    let MatchStage = {
      $match: {
        email,
      },
    };

    let Project = {
      $project: {
        email: 1,
      },
    };
    let data = await AdminModel.aggregate([MatchStage, Project]);
    return { status: "success", data: data };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

const LogoutAdminService = async (res) => {
  try {
    res.clearCookie("token_admin");
    return { status: "success" };
  } catch (error) {
    return { status: false, error: e.toString() };
  }
};

const EmailVerifyAdminService = async () => {
  try {
    return { status: "success" };
  } catch (e) {
    return { status: false, error: e.toString() };
  }
};

const RecoverVerifyEmailAdminService = async (req) => {
  let email = req.params.email;
  let otp = Math.floor(100000 + Math.random() * 900000);

  try {
    // Email Account Query
    let UserCount = await AdminModel.aggregate([
      { $match: { email: email } },
      { $count: "total" },
    ]);

    if (UserCount.length > 0) {
      //Create OTP
      let CreateOTP = await OTPModel.updateOne(
        { email: email },
        {
          otp,
          status: 0,
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

const RecoverVerifyOTPAdminService = async (req) => {
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

const ResetPasswordAdminService = async (req) => {
  let email = req.params.email;
  let otp = req.params.otp;
  otp = parseInt(otp);
  let reqBody = {
    email: email,
    password: req.body.password, //! working .....
  };
  // reqBody.password = md5(req.body.password);
  try {
    let OTPUsedCount = await OTPModel.aggregate([
      { $match: { email, otp, status: 1 } },
      { $count: "total" },
    ]);
    if (OTPUsedCount.length > 0) {
      let PassUpdate = await AdminModel.updateOne(reqBody);
      return { status: "success", data: PassUpdate };
    } else {
      return { status: "error", data: "Something is Wrong!" };
    }
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

module.exports = {
  FileUploadService,
  DeleteFileUploadService,
  AllFileService,
  RegisterAdminService,
  LoginAdminService,
  AdminReadService,
  LogoutAdminService,
  EmailVerifyAdminService,
  RecoverVerifyEmailAdminService,
  RecoverVerifyOTPAdminService,
  ResetPasswordAdminService,
  AdminUpdateService,
};
