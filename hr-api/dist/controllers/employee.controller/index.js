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
exports.createEmployeeProfile = void 0;
const connection_1 = require("../../connection");
const createEmployeeProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const pathImage = `/public/images/${(_b = (_a = req === null || req === void 0 ? void 0 : req.files) === null || _a === void 0 ? void 0 : _a.images[0]) === null || _b === void 0 ? void 0 : _b.filename}`;
        const { birthDate, address } = JSON.parse(req.body.data);
        const { userId } = req.body.payload;
        yield connection_1.prisma.employeeProfile.create({
            data: {
                birthDate,
                address,
                imageProfile: pathImage,
                employeeId: userId
            }
        });
        res.status(201).json({
            success: true,
            message: 'Created profile successfully',
            data: null
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createEmployeeProfile = createEmployeeProfile;
