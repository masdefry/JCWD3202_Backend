"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const artists_router_1 = __importDefault(require("./routers/artists.router"));
const app = (0, express_1.default)();
const port = 5000;
// Body Parser: Method Supaya Express Dapat Mengambil Data dari Request
// Middleware
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Express-Typescript API</h1>');
});
app.use('/api/artists', artists_router_1.default);
// Centralized Error Middleware
app.use((error, req, res, next) => {
    res.status(500).json({
        success: false,
        message: error.isExpose ? error.message : 'Something Went Wrong',
        data: null
    });
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
