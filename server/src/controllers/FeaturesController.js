
const { CreateFeaturesService, UpdateFeaturesService, ReadFeaturesService, DeleteFeaturesService, ReadSingleFeaturesService } = require("../services/FeaturesService.js");

//! Wish List Controller
exports.CreateFeatures = async (req, res) => {
    let result = await CreateFeaturesService(req);
    return res.status(200).json(result);
};
exports.ReadFeatures = async (req, res) => {
    let result = await ReadFeaturesService(req);
    return res.status(200).json(result);
};
exports.ReadSingleFeatures = async (req, res) => {
    let result = await ReadSingleFeaturesService(req);
    return res.status(200).json(result);
};
exports.UpdateFeatures = async (req, res) => {
    let result = await UpdateFeaturesService(req);
    return res.status(200).json(result);
};

exports.DeleteFeatures = async (req, res) => {
    let result = await DeleteFeaturesService(req);
    return res.status(200).json(result);
};