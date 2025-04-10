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
exports.registerEmployee = void 0;
const connection_1 = require("../../connection");
const hash_password_1 = require("../../utils/hash.password");
const registerEmployee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, name, phone, salary, leaveBalance = 12, shiftId, roleId } = req.body;
        const findEmployeeByEmail = yield connection_1.prisma.employee.findFirst({
            where: {
                email
            }
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
                roleId
            }
        });
        res.status(201).json({
            success: true,
            message: `Employee ${name} registered successfully`,
            data: null
        });
    }
    catch (error) {
        next(error);
    }
});
exports.registerEmployee = registerEmployee;
