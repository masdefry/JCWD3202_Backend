"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        console.log('???');
        cb(null, '/src/images');
    },
    filename: function (req, file, cb) {
        console.log(file);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    },
});
const fileFilter = (req, file, cb) => {
    console.log(file);
};
exports.upload = (0, multer_1.default)({ storage: storage, fileFilter: fileFilter });
