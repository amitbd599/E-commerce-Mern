const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
    payable: { type: String, required: true },
    cus_details: { type: Array, required: true },
    ship_details: { type: Array, required: true },
    tran_id: { type: String, required: true },
    val_id: { type: String, required: true },
    deliver_status: { type: String, required: true },
    payment_status: { type: String, required: true },
    vat: { type: String, required: true },
    total: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const InvoiceModel = mongoose.model("invoices", DataSchema);

module.exports = InvoiceModel;
