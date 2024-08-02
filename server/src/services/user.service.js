const UserRepository = require('../repository/user.repository.js')
const bcrypt = require('bcrypt')

class UserService {
    constructor() {
        this.userRepository = new UserRepository()
    }

    async hashPassword(password = '') {
        return bcrypt.hash(password, 10)
    } 

    async create(user) {
        try {
            let password = user.password
            const hashedPassword = await this.hashPassword(password)
            user.password = hashedPassword
    
            return this.userRepository.create(user)
        } catch (error) {
            throw new Error(error)
        }
    }

    async update(id, user) {
        try {
            if(!id) {
                throw new Error('L\'identifiant est obligatoire')
            } else if (!user) {
                throw new Error('Les informations de l\'utilisateur sont obligatoires')
            } else {
    
                let password = user.password
                const hashedPassword = await this.hashPassword(password)
                user.password = hashedPassword
        
                return this.userRepository.update(id, user)
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    async delete(id) {
        try {
            const userId = this.userRepository.delete(id)
            if (!userId) {
                throw new Error('Utilisateur introuvable')
            }
            return userId
        } catch (error) {
            throw new Error(error)
        }
    }

    async findAll() {
        try {
            const users = await this.userRepository.findAll()
            if (users.length === 0) {
                throw new Error('Aucun utilisateur trouvé')
            }

            return users;
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = UserService