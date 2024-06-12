const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    sub_title: { type: String, required: true },
    button_title: { type: String, required: true },
    button_link: { type: String, required: true },
    img: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const FeatureModel = mongoose.model("features", DataSchema);

module.exports = FeatureModel;
