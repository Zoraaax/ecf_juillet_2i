const scoreService = require('../services/score.service.js');

class ScoreController {
    constructor() {
        this.scoreService = new scoreService();
    }

    async findAll(req, res) {
        try {
            const scores = await this.scoreService.findAll();
            res.status(200).json(scores);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async create(req, res) {
        try {
            const score = await this.scoreService.create(req.body);
            res.status(201).json(score);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const score = await this.scoreService.update(id, req.body);
            res.status(200).json(score);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            await this.scoreService.delete(id);
            res.status(200).json();
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async findByUser(req, res) {
        try {
            const userId = req.params.userId;
            const scores = await this.scoreService.findByUser(userId);
            res.status(200).json(scores);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async findTenBestScores(req, res) {
        try {
            const scores = await this.scoreService.findTenBestScores();
            res.status(200).json(scores);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = ScoreController;