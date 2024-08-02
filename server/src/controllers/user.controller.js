const UserService = require('../services/user.service.js')

class UserController {
    constructor() {
        this.userService = new UserService()
    }
    async findAll(req, res) {
        try {
            const users = await this.userService.findAll()
            res.status(200).json(users)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }

    async create(req, res) {
        try {
            const user = req.body
            const newUser = await this.userService.create(user)
            res.status(201).json(newUser, { message: 'Utilisateur créé' })
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id
            const user = req.body
            const updatedUser = await this.userService.update(id, user)
            res.status(200).json(updatedUser, { message: 'Utilisateur mis à jour' })
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id
            await this.userService.delete(id)
            res.status(200).json({ message: 'Utilisateur supprimé' })
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }

    async findTenBestScores(req, res) {
        try {
            const bestScores = await this.userService.findTenBestScores()
            res.status(200).json(bestScores)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}

module.exports = UserController
