"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clockInAttendance = void 0;
const connection_1 = require("../../connection");
const clockInAttendance = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.body.payload;
        const findAttendanceByCreatedAt = yield connection_1.prisma.attendance.findFirst({
            where: {
                createdAt: {
                    gte: new Date(new Date().setHours(0, 0, 0, 0)),
                    lte: new Date(new Date().setHours(23, 59, 59, 999))
                },
                employeeId: userId,
            },
        });
        if (findAttendanceByCreatedAt) {
            throw {
                isExpose: true,
                status: 400,
                message: 'You have already clocked in today',
            };
        }
        yield connection_1.prisma.attendance.create({
            data: {
                clockIn: new Date(),
                employeeId: userId,
            },
        });
        res.status(201).json({
            success: true,
            message: 'Clocked in successfully',
            data: null,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.clockInAttendance = clockInAttendance;
