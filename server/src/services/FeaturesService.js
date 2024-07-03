

const mongoose = require("mongoose");
const FeaturesModel = require("../models/FeaturesModel");
const ObjectId = mongoose.Types.ObjectId;


//! Features Control

const CreateFeaturesService = async (req) => {
    try {
        let ReqBody = req.body
        const data = await FeaturesModel.create(ReqBody);
        return { status: true, data: data };
    } catch (error) {
        return { status: false, error: error.toString() };
    }
};

const UpdateFeaturesService = async (req) => {
    try {
        let featuresID = new ObjectId(req.params.featuresID);
        let reqBody = req.body
        const data = await FeaturesModel.updateOne(
            { _id: featuresID }, { $set: reqBody }
        );
        return { status: true, data: data };
    } catch (error) {
        return { status: false, error: error.toString() };
    }
};

const ReadFeaturesService = async (req) => {
    try {
        const data = await FeaturesModel.find();
        return { status: true, data: data };
    } catch (error) {
        return { status: false, error: error.toString() };
    }
};
const ReadSingleFeaturesService = async (req) => {
    try {
        let featuresID = new ObjectId(req.params.featuresID);
        const data = await FeaturesModel.aggregate(
            [
                {
                    $match: { _id: featuresID }
                }
            ]
        );
        return { status: true, data: data };
    } catch (error) {
        return { status: false, error: error.toString() };
    }
};

const DeleteFeaturesService = async (req) => {
    try {
        let featuresID = new ObjectId(req.params.featuresID);
        const data = await FeaturesModel.deleteOne(
            { _id: featuresID }
        );
        return { status: true, data: data };
    } catch (error) {
        return { status: false, error: error.toString() };
    }
};


module.exports = {
    CreateFeaturesService, UpdateFeaturesService, ReadFeaturesService, DeleteFeaturesService, ReadSingleFeaturesService
}