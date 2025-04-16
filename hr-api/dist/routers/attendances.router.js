"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const attendances_controller_1 = require("../controllers/attendances.controller");
const jwt_decode_1 = require("../middlewares/jwt.decode");
const attendancesRouter = (0, express_1.Router)();
attendancesRouter.post('/clock-in', jwt_decode_1.jwtDecode, attendances_controller_1.clockInAttendance);
exports.default = attendancesRouter;
