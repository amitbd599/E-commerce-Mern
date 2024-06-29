const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    des: { type: String, required: true },
    img: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductSliderModel = mongoose.model("productsliders", DataSchema);

module.exports = ProductSliderModel;
