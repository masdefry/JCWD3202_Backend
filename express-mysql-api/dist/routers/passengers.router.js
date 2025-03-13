"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passengersRouter = (0, express_1.Router)();
const passengers_controller_1 = require("../controllers/passengers.controller");
passengersRouter.get('/', passengers_controller_1.findPassengers);
passengersRouter.post('/', passengers_controller_1.createPassenger);
exports.default = passengersRouter;
