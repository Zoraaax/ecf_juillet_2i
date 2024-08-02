const QuestionRepository = require('../repository/question.repository.js');

class QuestionService {
    constructor() {
        this.questionRepository = new QuestionRepository();
    }

    async create(question) {
        try {
            if (question.answers.length < 2 || question.answers.length > 4) {
                throw new Error('Une question doit avoir entre 2 et 4 réponses');
            }

            return await this.questionRepository.create(question);
        } catch (error) {
            throw new Error(error.message || 'Erreur lors de la création de la question');
        }
    }

    async update(id, question) {
        try {
            if (!id) {
                throw new Error('L\'identifiant est obligatoire');
            } else if (!question) {
                throw new Error('Les informations de la question sont obligatoires');
            } else {
                return await this.questionRepository.update(id, question);
            }
        } catch (error) {
            throw new Error(error.message || 'Erreur lors de la mise à jour de la question');
        }
    }

    async delete(id) {
        try {
            const result = await this.questionRepository.delete(id);
            if (!result) {
                throw new Error('Question introuvable');
            }
            return result;
        } catch (error) {
            throw new Error(error.message || 'Erreur lors de la suppression de la question');
        }
    }

    async findAll() {
        try {
            const questions = await this.questionRepository.findAll();
            if (questions.length === 0) {
                throw new Error('Aucune question trouvée');
            }
            return questions;
        } catch (error) {
            throw new Error(error.message || 'Erreur lors de la récupération des questions');
        }
    }

    async findByDifficulty(difficulty) {
        try {
            const questions = await this.questionRepository.findByDifficulty(difficulty);
            if (questions.length === 0) {
                throw new Error('Aucune question trouvée pour cette difficulté');
            }
            return questions;
        } catch (error) {
            throw new Error(error.message || 'Erreur lors de la récupération des questions par difficulté');
        }
    }
}

module.exports = QuestionService;