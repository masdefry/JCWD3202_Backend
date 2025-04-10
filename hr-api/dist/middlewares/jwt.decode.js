"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtDecode = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtDecode = (req, res, next) => {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token || token === 'null') {
            throw { isExpose: true, status: 401, message: 'Token must be provide' };
        }
        const payload = jsonwebtoken_1.default.verify(token, `${process.env.JWT_SECRET_KEY}`);
        req.body.payload = payload;
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.jwtDecode = jwtDecode;
