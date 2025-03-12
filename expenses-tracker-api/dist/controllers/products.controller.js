"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = exports.findProducts = void 0;
const findProducts = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: 'Get Products Success',
            data: null
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.findProducts = findProducts;
const createProduct = (req, res) => {
    try {
        res.status(201).json({
            success: true,
            message: 'Create Product Success',
            data: null
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.createProduct = createProduct;
