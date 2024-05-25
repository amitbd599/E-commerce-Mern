const mongoose = require('mongoose');
const DataSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    shortDes: { type: String, required: true },
    price: { type: String, required: true },
    discount: { type: Boolean, required: true },
    discountPrice: { type: String, required: true },
    img1: { type: String, required: true },
    img2: { type: String },
    img3: { type: String },
    img4: { type: String },
    img5: { type: String },
    img6: { type: String },
    img7: { type: String },
    img8: { type: String },
    star: { type: String, required: true },
    stock: { type: Boolean, required: true },
    remark: { type: String, required: true },
    des: { type: String, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
    categoryID: { type: mongoose.Schema.Types.ObjectId, required: true },
    brandID: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const ProductModel = mongoose.model('products', DataSchema);

module.exports = ProductModel;
