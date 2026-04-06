const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true, trim: true, minlength: 2, maxlength: 50 },
        password: { type: String, required: true, minlength: 3 },
        createdAt: { type: Date, default: Date.now }
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);