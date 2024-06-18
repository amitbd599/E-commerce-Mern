const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
    cus_add: { type: String, default: "3363 Wood Street" },
    cus_city: { type: String, default: "Saginaw" },
    cus_country: { type: String, default: "USA" },
    cus_fax: { type: String, default: "377-86-XXXX" },
    cus_name: { type: String, default: "Alex Jhon" },
    cus_phone: { type: String, default: "989-210-6184" },
    cus_postcode: { type: String, default: "3363" },
    cus_state: { type: String, default: "Wood Street" },
    ship_add: { type: String, default: "3363 Wood Street" },
    ship_city: { type: String, default: "Saginaw" },
    ship_country: { type: String, default: "USA" },
    ship_name: { type: String, default: "Alex Jhon" },
    ship_phone: { type: String, default: "989-210-6184" },
    ship_postcode: { type: String, default: "3363" },
    ship_state: { type: String, default: "Wood Street" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProfileModel = mongoose.model("profiles", DataSchema);

module.exports = ProfileModel;
