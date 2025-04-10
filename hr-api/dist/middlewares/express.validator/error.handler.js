"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorValidatorHandler = void 0;
const express_validator_1 = require("express-validator");
const errorValidatorHandler = (req, res, next) => {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            throw { isExpose: true, status: 406, message: errors.array()[0].msg };
        }
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.errorValidatorHandler = errorValidatorHandler;
