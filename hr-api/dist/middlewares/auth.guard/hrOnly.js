"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hrOnly = void 0;
const hrOnly = (req, res, next) => {
    try {
        const { userRole } = req.body.payload;
        if (userRole !== 'HR') {
            throw {
                isExpose: true,
                status: 403,
                message: 'You are not authorized to access this resource',
            };
        }
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.hrOnly = hrOnly;
