"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFiles = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const deleteFiles = (filePath) => {
    const mainDirectory = path_1.default.join(process.cwd());
    filePath.forEach(file => {
        fs_1.default.rmSync(`${mainDirectory}/src/${file}`);
    });
};
exports.deleteFiles = deleteFiles;
