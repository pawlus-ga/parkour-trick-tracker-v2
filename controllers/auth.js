const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user.js')

router.get('/sign-up', (req, res) => {
    res.render('auth/sign-up.ejs');
});

router.get('/sign-in', (req, res) => {
    res.render('auth/sign-in.ejs');
});

router.get('/sign-out', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

router.post('/sign-up', async (req, res) => {
    try {
        const userInDatabase = await User.findOne({ username: req.body.username });
        if (userInDatabase) {
            return res.send('Username already taken.');
        }

        if (req.body.password !== req.body.confirmPassword) {
            return res.send('Password and Confirm Password must match');
        }

        const passwordHash = bcrypt.hashSync(req.body.password, 10);
        
        await User.create({
            username: req.body.username, 
            passwordHash
        });

        res.redirect('/auth/sign-in');
    } catch (error) {
        if (error.code === 11000) {
            return res.send('Username already taken.');
        }
        console.log(error);
        res.redirect('/');
    }
});

router.post('/sign-in', async (req, res) => {
    try {
        const userInDatabase = await User.findOne({ username: req.body.username });
        if (!userInDatabase){
            return res.send('Login failed. Try again.');
        }
        
        const validPassword = bcrypt.compareSync(
            req.body.password,
            userInDatabase.passwordHash
        );
        if (!validPassword) {
            return res.send('Login failed. Try again.');
        }

        req.session.user = {
            username: userInDatabase.username,
            _id: userInDatabase._id
        };

        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

module.exports = router;