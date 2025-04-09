"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploader = void 0;
const multer_1 = require("../utils/multer");
const uploader = (req, res, next) => {
    const uploaded = multer_1.uploadMulter.fields([{ name: 'images', maxCount: 3 }]);
    const { usersId, authorizationRole } = req.body;
    uploaded(req, res, function (err) {
        var _a, _b;
        try {
            if (err)
                throw { msg: err.message };
            if (!Array.isArray(req === null || req === void 0 ? void 0 : req.files) && !((_b = (_a = req === null || req === void 0 ? void 0 : req.files) === null || _a === void 0 ? void 0 : _a.images) === null || _b === void 0 ? void 0 : _b.length))
                throw { msg: 'File Tidak Ditemukan' };
            if (usersId && authorizationRole) {
                req.body.usersId = usersId;
                req.body.authrorizationRole = authorizationRole;
            }
            next();
        }
        catch (err) {
            next(err);
        }
    });
};
exports.uploader = uploader;
