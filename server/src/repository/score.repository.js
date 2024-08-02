const scoreModel = require('../models/score.model.js');

class ScoreModel {
    async findAll() {
        return scoreModel.find().populate('userId', 'username');
    }

    async create(score) {
        return scoreModel.create(score);
    }

    async update(id, score) {
        return scoreModel.findByIdAndUpdate(id, score, { new: true });
    }

    async delete(id) {
        return scoreModel.findByIdAndDelete(id);
    }

    async findByUser(userId) {
        return scoreModel.find({ userId }).populate('userId', 'username');
    }
    
    async findTenBestScores() {
        return scoreModel.find().sort({ score: -1 }).limit(10).populate('userId', 'username');
    }
}

module.exports = ScoreModel;