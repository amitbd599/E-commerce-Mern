

const mongoose = require("mongoose");
const CartModel = require("../models/CartModel");
const ProfileModel = require("../models/ProfileModel");
const InvoiceModel = require("../models/InvoiceModel");
const InvoiceProductModel = require("../models/InvoiceProductModel");
const PaymentSettingModel = require("../models/PaymentSettingModel");
const ObjectId = mongoose.Types.ObjectId;
const FormData = require('form-data');
const axios = require('axios');

//! Invoice Control
const CreateInvoiceService = async (req) => {
    try {

        let user_id = new ObjectId(req.headers.user_id)
        let cus_email = req.headers.email


        // =========== Step-1: Calculate total payable & vat =============

        let matchStage = {
            $match: {
                userID: user_id
            }
        }

        let joinStageWithProduct = {
            $lookup: {
                from: "products",
                localField: "productID",
                foreignField: "_id",
                as: "product",
            },
        }

        let unwindStage = { $unwind: "$product" };


        let cartProducts = await CartModel.aggregate([
            matchStage,
            joinStageWithProduct,
            unwindStage,
        ])

        let totalAmount = 0

        cartProducts.forEach((item) => {
            let price;

            if (item?.product?.discount === true) {
                price = parseFloat(item.product.discountPrice) //20
            } else {
                price = parseFloat(item.product.price) //200
            }
            totalAmount = totalAmount + (parseFloat(item?.qty) * price)

        })

        let vat = totalAmount * 0.05; // 5% vat

        let totalPayable = totalAmount + vat;

        // =========== Step-2: Prepare customer details & shipping details =============

        let profile = await ProfileModel.aggregate([matchStage])
        let cus_details = `Name:${profile[0]?.cus_name},Email:${cus_email},Address:${profile[0]?.cus_add},Phone:${profile[0]?.cus_phone}`
        let ship_details = `Name:${profile[0]?.ship_name},City:${profile[0]?.ship_city},Address:${profile[0]?.ship_add},Phone:${profile[0]?.ship_phone}`


        // =========== Step-3: Transaction & other's ID =============

        let tran_id = Math.floor(10000000000 + Math.random() * 900000000)
        let val_id = 0
        let deliver_status = "pending"
        let payment_status = "pending"

        // =========== Step-4: Create invoice =============

        let createInvoice = await InvoiceModel.create({
            userID: user_id,
            payable: totalPayable,
            cus_details: cus_details,
            ship_details: ship_details,
            tran_id: tran_id,
            val_id: val_id,
            deliver_status: deliver_status,
            payment_status: payment_status,
            vat: vat,
            total: totalAmount,
        })


        // =========== Step-5: Create invoice product =============
        let invoice_id = createInvoice._id

        cartProducts.forEach(async (item) => {
            await InvoiceProductModel.create({
                userID: user_id,
                productID: item?.productID,
                invoiceID: invoice_id,
                qty: item?.qty,
                price: item.product.discountPrice ? item.product.discountPrice : item.product.price,
                color: item?.color,
                size: item?.size,
            })

        })


        // =========== Step-6: Remove carts =============

        await CartModel.deleteMany({ userID: user_id })


        // =========== Step-7: Prepare SSL Payment =============

        return { status: true, invoice_id };
    } catch (error) {
        return { status: false, error: error.toString() };
    }
};

const PaymentFailService = async (req) => {
    try {

        return { status: true, data: data };
    } catch (error) {
        return { status: false, error: error.toString() };
    }
};

const PaymentCancelService = async (req) => {
    try {

        return { status: true, data: data };
    } catch (error) {
        return { status: false, error: error.toString() };
    }
};

const PaymentIPNService = async (req) => {
    try {

        return { status: true, data: data };
    } catch (error) {
        return { status: false, error: error.toString() };
    }
};

const PaymentSuccessService = async (req) => {
    try {

        return { status: true, data: data };
    } catch (error) {
        return { status: false, error: error.toString() };
    }
};

const InvoiceListService = async (req) => {
    try {

        return { status: true, data: data };
    } catch (error) {
        return { status: false, error: error.toString() };
    }
};

const InvoiceProductListService = async (req) => {
    try {

        return { status: true, data: data };
    } catch (error) {
        return { status: false, error: error.toString() };
    }
};




module.exports = {
    CreateInvoiceService, PaymentFailService, PaymentCancelService, PaymentIPNService, PaymentSuccessService, InvoiceListService, InvoiceProductListService
}