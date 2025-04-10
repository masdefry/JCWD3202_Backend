import { body } from "express-validator"

export const registerEmployeeValidator = [
    body(['email', 'password', 'name', 'phone', 'salary', 'shiftId', 'roleId']).notEmpty().withMessage('All fields are required'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('phone').isMobilePhone('any').withMessage('Invalid phone number format')
]