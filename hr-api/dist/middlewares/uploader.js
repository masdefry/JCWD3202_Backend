"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploader = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const uploader = (fileAccepted) => {
    const storage = multer_1.default.diskStorage({
        destination: function (req, file, cb) {
            const mainDirectory = path_1.default.join(process.cwd());
            cb(null, `${mainDirectory}/src/public/images`);
        },
        filename: function (req, file, cb) {
            const splitOriginalName = file.originalname.split('.');
            const fileExtension = splitOriginalName[splitOriginalName.length - 1];
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            cb(null, file.fieldname + '-' + uniqueSuffix + '.' + fileExtension);
        },
    });
    const fileFilter = (req, file, cb) => {
        if (!fileAccepted.includes(file.mimetype))
            return cb(new Error('File format not accepted'));
        cb(null, true);
    };
    return (0, multer_1.default)({ storage: storage, fileFilter: fileFilter, limits: { fileSize: 1024 * 1024 * 2 } });
};
exports.uploader = uploader;
