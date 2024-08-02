const questionService = require('../services/question.service.js');

class QuestionController {
    constructor() {
        this.questionService = new questionService();
    }

    async findAll(req, res) {
        try {
            const questions = await this.questionService.findAll();
            res.status(200).json(questions);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async create(req, res) {
        try {
            const question = req.body;
            const newQuestion = await this.questionService.create(question);
            res.status(201).json(newQuestion);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const question = req.body;
            const updatedQuestion = await this.questionService.update(id, question);
            res.status(200).json(updatedQuestion);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            await this.questionService.delete(id);
            res.status(200).json();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findByDifficulty(req, res) {
        try {
            const difficulty = req.params.difficulty;
            const questions = await this.questionService.findByDifficulty(difficulty);
            res.status(200).json(questions);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = QuestionController;