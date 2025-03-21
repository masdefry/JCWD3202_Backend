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
exports.deleteArtist = exports.updateArtist = exports.findArtists = exports.createArtist = void 0;
const prisma_client_1 = require("../../connection/prisma.client");
const createArtist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, genre, firstDebutYear, country, description } = req.body;
        yield prisma_client_1.prisma.artist.create({
            data: { name, genre, firstDebutYear, country, description },
        });
        res.status(201).json({
            success: true,
            message: 'Create Artist Success',
            data: { name, genre, firstDebutYear, country, description },
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createArtist = createArtist;
const findArtists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findArtists = yield prisma_client_1.prisma.artist.findMany();
        res.status(200).json({
            success: true,
            message: 'Get Artists Success',
            data: findArtists,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.findArtists = findArtists;
const updateArtist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, genre, firstDebutYear, country, description } = req.body;
        yield prisma_client_1.prisma.artist.update({
            where: { id },
            data: {
                name,
                genre,
                firstDebutYear,
                country,
                description,
            },
        });
        res.status(200).json({
            success: true,
            message: `Update Artist with Id ${id} Success`,
            data: {
                name,
                genre,
                firstDebutYear,
                country,
                description,
            },
        });
    }
    catch (error) {
        next(error);
    }
});
exports.updateArtist = updateArtist;
const deleteArtist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield prisma_client_1.prisma.artist.delete({
            where: { id }
        });
        res.status(200).json({
            success: true,
            message: `Delete Artist with Id ${id} Success`,
            data: null
        });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteArtist = deleteArtist;
