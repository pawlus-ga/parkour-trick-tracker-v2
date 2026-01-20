const mongoose = require('mongoose');

const tricksSchema = mongoose.Schema({
    name: {type: String, required: true},
    category: {type: String, enum: ['flips', 'wallFlips', 'vaults', 'transitions'], required: true},
    stomped: {type: String, enum: ['not landed', 'landed once', 'inconsistent', 'semi-consistent', 'consistent'], required: true},
    takeoff: {type: String, enum: ['n/a', 'flatground', 'off ledge']},
    difficulty: {type: String, enum: ['easy', 'medium', 'hard', 'pro'], required: true},
    notes: {type: String}
});

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true,
    },
    tricks: [tricksSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;