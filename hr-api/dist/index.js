"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_router_1 = __importDefault(require("./routers/auth.router"));
const attendances_router_1 = __importDefault(require("./routers/attendances.router"));
const app = (0, express_1.default)();
const port = 5001;
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: '*',
}));
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Express Typescript Server</h1>');
});
app.use('/api/employee', auth_router_1.default);
app.use('/api/attendances', attendances_router_1.default);
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).json({
        success: false,
        message: err.isExpose ? err.message : err.message === 'jwt expired' ? 'Session login is expired' : 'Internal server error',
        data: null
    });
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
