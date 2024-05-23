const mongoose = require("mongoose");
const validator = require("validator");
const DataSchema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      validate: {
        validator: (v) => validator.isEmail(v),
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const AdminModel = mongoose.model("admins", DataSchema);

module.exports = AdminModel;
