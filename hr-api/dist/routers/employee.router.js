"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_controller_1 = require("../controllers/employee.controller");
const uploader_1 = require("../middlewares/uploader");
const jwt_decode_1 = require("../middlewares/jwt.decode");
const employeeRouter = (0, express_1.Router)();
employeeRouter.post('/', (0, uploader_1.uploader)(['image/jpg', 'image/jpeg', 'image/png', 'image/webp']).fields([
    { name: 'images', maxCount: 3 },
]), jwt_decode_1.jwtDecode, employee_controller_1.createEmployeeProfile);
exports.default = employeeRouter;
