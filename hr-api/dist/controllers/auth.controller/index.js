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
exports.sessionLoginEmployee = exports.loginEmployee = exports.registerEmployee = void 0;
const connection_1 = require("../../connection");
const hash_password_1 = require("../../utils/hash.password");
const compare_password_1 = require("../../utils/compare.password");
const jwt_sign_1 = require("../../utils/jwt.sign");
const registerEmployee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, name, phone, salary, leaveBalance = 12, shiftId, roleId, } = req.body;
        const findEmployeeByEmail = yield connection_1.prisma.employee.findFirst({
            where: {
                email,
            },
        });
        if (findEmployeeByEmail !== null) {
            throw { isExpose: true, status: 401, message: 'Email already exist' };
        }
        const hashedPassword = yield (0, hash_password_1.hashPassword)(password);
        yield connection_1.prisma.employee.create({
            data: {
                email,
                password: hashedPassword,
                name,
                phone,
                salary,
                leaveBalance,
                shiftId,
                roleId,
            },
        });
        res.status(201).json({
            success: true,
            message: `Employee ${name} registered successfully`,
            data: null,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.registerEmployee = registerEmployee;
const loginEmployee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const findEmployeeByEmail = yield connection_1.prisma.employee.findFirst({
            where: { email },
            include: {
                roles: true,
            },
        });
        if (findEmployeeByEmail === null) {
            throw { isExpose: true, status: 401, message: 'Email not found' };
        }
        const isPasswordMatch = yield (0, compare_password_1.comparePassword)(findEmployeeByEmail === null || findEmployeeByEmail === void 0 ? void 0 : findEmployeeByEmail.password, password);
        if (isPasswordMatch === false) {
            throw { isExpose: true, status: 401, message: 'Invalid password' };
        }
        const token = (0, jwt_sign_1.jwtSign)({
            userId: findEmployeeByEmail.id,
            userRole: findEmployeeByEmail.roles.title,
        });
        res.status(200).json({
            success: true,
            message: 'Login successfully',
            data: {
                token,
                email: findEmployeeByEmail.email,
                role: findEmployeeByEmail.roles.title,
            },
        });
    }
    catch (error) {
        next(error);
    }
});
exports.loginEmployee = loginEmployee;
const sessionLoginEmployee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { payload } = req.body;
        const findEmployeeByUserId = yield connection_1.prisma.employee.findFirst({
            where: { id: payload.userId },
            include: {
                roles: true,
            },
        });
        res.status(200).json({
            success: true,
            message: 'Session login successfully',
            data: {
                token: (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1],
                email: findEmployeeByUserId === null || findEmployeeByUserId === void 0 ? void 0 : findEmployeeByUserId.email,
                role: findEmployeeByUserId === null || findEmployeeByUserId === void 0 ? void 0 : findEmployeeByUserId.roles.title,
            },
        });
    }
    catch (error) {
        next(error);
    }
});
exports.sessionLoginEmployee = sessionLoginEmployee;
