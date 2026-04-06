const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    username: { type: String, default: 'User' },
    completedLessons: [
        {
            lessonId: Number,
            title: String,
            completedTasks: [Number],
            completedDate: { type: Date, default: Date.now }
        }
    ],
    totalScore: { type: Number, default: 0 },
    currentLesson: { type: Number, default: 0 },
    lastUpdated: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Progress', progressSchema);
