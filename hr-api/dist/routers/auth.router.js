"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authRouter = (0, express_1.Router)();
const auth_controller_1 = require("../controllers/auth.controller");
const auth_validator_1 = require("../middlewares/express.validator/auth.validator");
const error_handler_1 = require("../middlewares/express.validator/error.handler");
authRouter.post('/register', auth_validator_1.registerEmployeeValidator, error_handler_1.errorValidatorHandler, auth_controller_1.registerEmployee);
exports.default = authRouter;
