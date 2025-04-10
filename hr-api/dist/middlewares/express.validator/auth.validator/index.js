"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerEmployeeValidator = void 0;
const express_validator_1 = require("express-validator");
exports.registerEmployeeValidator = [
    (0, express_validator_1.body)(['email', 'password', 'name', 'phone', 'salary', 'shiftId', 'roleId']).notEmpty().withMessage('All fields are required'),
    (0, express_validator_1.body)('email').isEmail().withMessage('Invalid email format'),
    (0, express_validator_1.body)('phone').isMobilePhone('any').withMessage('Invalid phone number format')
];
