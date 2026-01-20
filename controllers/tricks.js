const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.get('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id)

        res.render('tricks/index.ejs', {
            tricks: currentUser.tricks
        })
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
});

router.get('/new', async (req, res) => {
    res.render('tricks/new.ejs')
});

router.post('/', async (req, res) => {
    try {
        const currentUser = await User.findById
        (req.session.user._id)
        currentUser.tricks.push(req.body)
        await currentUser.save()
        res.redirect(`/users/${currentUser._id}/tricks`)
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
});

router.get('/:trickId', async (req, res) => {
    try {
        const currentUser = await User.findById
        (req.session.user._id)

        const trick = currentUser.tricks.id(req.params.trickId)
        res.render('tricks/show.ejs', {
            trick: trick
        })
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
});

router.delete('/:trickId', async (req,res) => {
    try {
        const currentUser = await User.findById
        (req.session.user._id)
        currentUser.tricks.id(req.params.trickId).deleteOne()
        await currentUser.save()
        res.redirect(`/users/${currentUser._id}/tricks`)
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
});

router.get('/:trickId/edit', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id)
        const trick = currentUser.tricks.id(req.params.trickId)
        res.render('tricks/edit.ejs', {
            trick: trick,
        })
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
});

router.put('/:trickId', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id)
        const application = currentUser.tricks.id(req.params.trickId)
        trick.set(req.body)
        await currentUser.save()
        res.redirect(`/users/${currentUser._id}/tricks/${req.params.trickId}`)
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
});

module.exports = router;