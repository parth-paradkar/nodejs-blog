const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('./config');

const router = express.Router();

const validateRegister = require('./validation/register');
const validateLogin = require('./validation/login');

const User = require('./models/User');

// Endpoint to create a new user
router.post('/register', (req, res)=> {
    // validation
    const {errors, isValid} = validateRegister(req.body);

    if(!isValid) {
        return res.status(400).json({
            message: "validation failed",
            error: errors
        })
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if(user) {
                return res.status(400).json({
                    message: "validation failed",
                    error: "Email already exists"
                });
            } else {
                const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
                })

                // Hash password before saving
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    })
                })
            }
    })
})

// Endpoint to validate login
router.post('/login', (req, res) => {
    // Validation
    const {errors, isValid} = validateLogin(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json({
            message: "Validation failed",
            error: errors
        })
    }
    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({ email: req.body.email })
        .then(user => {
            if(!user) {
                return res.status(404).json({
                    message: "Email not found!"
                })
            }

            // Check password, passes boolean to promise
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        // create JWT payload
                        const payload = {
                            id: user.id,
                            name: user.name
                        };

                        // Token
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            {
                                expiresIn: 311556926 // 1 year in seconds
                            },
                            (err, token) => {
                                res.set({
                                    Authorization: "Bearer "+ token
                                })
                                res.json({
                                    validation: true,
                                    message: "Login successful"
                                })
                            }
                        )
                    } else {
                        return res.status(400).json({
                            validation: false,
                            message: "Incorrect Password!"
                        })
                    }
                })
        })
        
})

module.exports = router;