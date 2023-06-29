const { body } = require('express-validator');

const addUserSchema = [
    body('firstName').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name is requried'),
    body('username').notEmpty().withMessage('Username is requried'),
    body('username').isLength({ min: 6, max: 16 }).withMessage('Username must be at least 6 and not exceed 16 characters'),
    body('email').notEmpty().withMessage('Email is requried'),
    body('password').notEmpty().withMessage('Password is requried'),
    body('password')
    .isString()
    .isStrongPassword()
    .withMessage('Password must contain 8 characters, 1 lower case letter, 1 upper case letter, 1 number and 1 symbol'),
    body('email').isEmail().withMessage('Incorrect email'),
    body('role').notEmpty().isNumeric().withMessage('Role is requried with valid integer')
];

const loginSchema = [
    body('username').notEmpty().withMessage('Username is requried'),
    body('password').notEmpty().withMessage('Password is requried')
]

module.exports = { addUserSchema, loginSchema }