const questionModel = require('../models/question.model.js')

class QuestionRepository {
    async create(question) {
        return questionModel.create(question)
    }
    async update(id, question) {
        return questionModel.findByIdAndUpdate(id, question)
    }
    async delete(id) {
        return questionModel.findByIdAndDelete(id)
    }
    async findAll() {
        return questionModel.find()
    }
    async findByDifficulty(difficulty) {
        return questionModel.find({difficulty: difficulty})
    }
}

module.exports = QuestionRepository