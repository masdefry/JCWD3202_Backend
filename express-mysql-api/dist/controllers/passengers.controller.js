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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPassenger = exports.findPassengers = void 0;
const connection_1 = __importDefault(require("../connection"));
const util_1 = require("util");
const query = (0, util_1.promisify)(connection_1.default.query).bind(connection_1.default);
const findPassengers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findPassengers = yield query({ sql: 'SELECT * FROM passengers' });
        res.status(200).json({
            success: true,
            message: 'Get Passengers Success',
            data: findPassengers,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.findPassengers = findPassengers;
const createPassenger = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Survived, Pclass, Name, Sex, Age, SibSp, Parch, Ticket, Fare, Cabin, Embarked, } = req.body;
        const findPassengers = yield query({
            sql: 'SELECT PassengerId from passengers ORDER BY PassengerId DESC'
        });
        console.log(findPassengers);
        yield query({
            sql: `INSERT INTO passengers(PassengerId, Survived,
      Pclass,
      Name,
      Sex,
      Age,
      SibSp,
      Parch,
      Ticket,
      Fare,
      Cabin,
      Embarked) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            values: [
                parseInt(findPassengers[0].PassengerId) + 1,
                Survived,
                Pclass,
                Name,
                Sex,
                Age,
                SibSp,
                Parch,
                Ticket,
                Fare,
                Cabin,
                Embarked,
            ],
        });
        res.status(201).json({
            success: true,
            message: 'Create Passenger Success',
            data: {
                Survived,
                Pclass,
                Name,
                Sex,
                Age,
                SibSp,
                Parch,
                Ticket,
                Fare,
                Cabin,
                Embarked,
            },
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.createPassenger = createPassenger;
