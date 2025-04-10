"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const test = (req, res, next) => {
    console.log('Test middleware executed');
    next();
};
exports.test = test;
