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
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const app = (0, express_1.default)();
const port = 5000;
// Body Parser: Method Supaya Express Dapat Mengambil Data dari Request
// Middleware
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Express-Typescript API</h1>');
});
// CRUD (Create, Read, Update & Delete)
app.get('/api/products', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let findData = yield fs_1.promises.readFile('./src/db/db.json', 'utf-8');
    let { products } = JSON.parse(findData);
    res.status(200).json({
        success: true,
        message: 'Get Products Success',
        data: products,
    });
}));
app.post('/api/products', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Step-01 Ambil Data dari Req
        const { name, price, unit } = req.body;
        // Step-02 Read All Data
        let findData = yield fs_1.promises.readFile('./src/db/db.json', 'utf-8');
        findData = yield JSON.parse(findData);
        // Step-03 Manipulasi Data Products
        const { products } = findData;
        products.push({
            id: products[products.length - 1].id + 1,
            name,
            price,
            unit,
        });
        // Step-04 Simpan Hasil Manipulasi Data Products ke Variable AllData
        findData.products = products;
        yield fs_1.promises.writeFile('./src/db/db.json', JSON.stringify(findData));
        res.status(201).json({
            success: true,
            message: 'Post Product Success',
            data: { name, price, unit },
        });
    }
    catch (error) {
        console.log(error);
    }
}));
app.put('/api/products/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Step-01 Ambil Data dari Request (req.body & req.params)
        const { name, price, unit } = req.body;
        const { id } = req.params;
        console.log(id);
        // Step-02 Read All Data
        let findData = yield fs_1.promises.readFile('./src/db/db.json', 'utf-8');
        findData = yield JSON.parse(findData);
        // Step-03 Manipulasi Data
        const { products } = findData; // [{}, {}, {}, ...]
        const findIndexOfProduct = products.findIndex((product) => product.id === Number(id));
        if (findIndexOfProduct === -1)
            return res.status(404).json({
                success: false,
                message: `Update Product Failed. Product with Id ${id} Not Found!`,
                data: null,
            });
        products[findIndexOfProduct] = { id: Number(id), name, price, unit };
        findData.products = products;
        yield fs_1.promises.writeFile('./src/db/db.json', JSON.stringify(findData));
        res.status(201).json({
            success: true,
            message: 'Update Product Success',
            data: { name, price, unit },
        });
    }
    catch (error) {
        console.log(error);
    }
}));
app.delete('/api/products/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        let findData = yield fs_1.promises.readFile('./src/db/db.json', 'utf-8');
        findData = yield JSON.parse(findData); // { products: [{}] }
        const { products } = findData;
        const findIndexOfProduct = products.findIndex((product) => product.id === Number(id));
        products.splice(findIndexOfProduct, 1);
        findData.products = products;
        yield fs_1.promises.writeFile('./src/db/db.json', JSON.stringify(findData));
        res.status(200).json({
            success: true,
            message: `Delete Product with Id ${id} Success`,
            data: null
        });
    }
    catch (error) {
        console.log(error);
    }
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
// Exercise:
// 1. Buatkan end-point API untuk update data product
// 2. Buatkan end-point API untuk delete data product
