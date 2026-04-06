const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
let isConnected = false;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Models
const Progress = require('./models/Progress');

// Свързване с MongoDB
async function connectToDatabase() {
    if (isConnected) {
        return;
    }

    if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI is not set');
    }

    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log('✓ Connected to MongoDB');
}

app.use(async (req, res, next) => {
    try {
        await connectToDatabase();
        next();
    } catch (err) {
        console.error('✗ MongoDB connection error:', err.message);
        res.status(500).json({ error: 'Database connection failed' });
    }
});

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

if (process.env.VERCEL !== '1') {
    connectToDatabase()
        .then(() => {
            app.listen(PORT, () => {
                console.log(`✓ Server running on http://localhost:${PORT}`);
            });
        })
        .catch(err => {
            console.error('✗ Failed to start server:', err.message);
            process.exit(1);
        });
}

module.exports = app;
