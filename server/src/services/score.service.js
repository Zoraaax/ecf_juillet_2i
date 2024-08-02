const scoreRepository = require('../repository/score.repository.js');

class ScoreService {
    constructor() {
        this.scoreRepository = new scoreRepository();
    }

    async findAll() {
        try {
            const score = await this.scoreRepository.findAll();
            if (score.length === 0) {
                throw new Error("Aucun score n'a été trouvé");
            }

            const scores = score.map((score) => {
                return {
                    username: score.userId.username,
                    score: score.score,
                    level: score.levelReached,
                    date: score.date
                };
            })

            return scores;
        } catch (error) {
            throw new Error(error);
        }
    }

    async create(score) {
        try {
            return await this.scoreRepository.create(score);
        } catch (error) {
            throw new Error(error);
        }
    }

    async update(id, score) {
        try {
            return await this.scoreRepository.update(id, score);
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete(id) {
        try {
            return await this.scoreRepository.delete(id);
        } catch (error) {
            throw new Error(error);
        }
    }

    async findByUser(userId) {
        try {

            if (!userId || userId === undefined) {
                throw new Error("L'identifiant de l'utilisateur est requis");
            }

            return await this.scoreRepository.findByUser(userId);
        } catch (error) {
            throw new Error(error);
        }
    }

    async findTenBestScores() {
        try {
            return await this.scoreRepository.findTenBestScores();
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = ScoreService;