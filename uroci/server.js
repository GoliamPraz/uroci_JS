const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Models
const Progress = require('./models/Progress');

// Свързване с MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✓ Connected to MongoDB'))
.catch(err => console.error('✗ MongoDB connection error:', err));

// API Routes

// Зареди прогреса на юзер
app.get('/api/progress/:userId', async (req, res) => {
    try {
        const progress = await Progress.findOne({ userId: req.params.userId });
        
        if (!progress) {
            return res.json({
                completedLessons: [],
                totalScore: 0,
                currentLesson: 0
            });
        }
        
        res.json(progress);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Запази/обнови прогреса
app.post('/api/progress', async (req, res) => {
    try {
        const { userId, username, completedLessons, totalScore, currentLesson } = req.body;
        
        const progress = await Progress.findOneAndUpdate(
            { userId },
            { 
                username, 
                completedLessons, 
                totalScore, 
                currentLesson,
                lastUpdated: new Date() 
            },
            { upsert: true, new: true }
        );
        
        res.json(progress);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Отметни задача като выполнена
app.post('/api/progress/:userId/complete-task', async (req, res) => {
    try {
        const { lessonId, taskId, lessonTitle } = req.body;
        const userId = req.params.userId;
        
        let progress = await Progress.findOne({ userId });
        
        if (!progress) {
            progress = new Progress({ userId, username: 'User' });
        }
        
        const lesson = progress.completedLessons.find(l => l.lessonId === lessonId);
        
        if (lesson) {
            if (!lesson.completedTasks.includes(taskId)) {
                lesson.completedTasks.push(taskId);
            }
        } else {
            progress.completedLessons.push({
                lessonId,
                title: lessonTitle,
                completedTasks: [taskId],
                completedDate: new Date()
            });
        }
        
        progress.totalScore = progress.completedLessons.reduce((sum, l) => sum + l.completedTasks.length * 10, 0);
        progress.lastUpdated = new Date();
        
        await progress.save();
        res.json(progress);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Изтрий прогреса
app.delete('/api/progress/:userId', async (req, res) => {
    try {
        await Progress.findOneAndDelete({ userId: req.params.userId });
        res.json({ message: 'Progress deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✓ Server running on http://localhost:${PORT}`);
});
