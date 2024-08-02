const userModel = require('../models/user.model.js')

class UserRepository {
    async create(user) {
        return userModel.create(user)
    }
    async update(id, user) {
        return userModel.findByIdAndUpdate(id, user, { new: true })
    }
    async delete(id) {
        return userModel.findByIdAndDelete(id)
    }
    async findAll() {
        return userModel.find()
    }
}

module.exports = UserRepository