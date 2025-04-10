"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtSign = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtSign = ({ userId, userRole }) => {
    return jsonwebtoken_1.default.sign({ userId, userRole }, process.env.JWT_SECRET_KEY, {
        expiresIn: '1d',
    });
};
exports.jwtSign = jwtSign;
