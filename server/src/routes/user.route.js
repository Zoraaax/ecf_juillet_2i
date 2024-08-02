const UserController = require('../controllers/user.controller.js')
const BaseRouter = require('./base.route.js')

class UserRouter extends BaseRouter {
    constructor() {
        super('/api/v1/user')
        this.userController = new UserController()
        this.initRoutes()
    }

    initRoutes() {
        const routes = [
            { method: 'post', path: '/', handler: this.userController.create.bind(this.userController) },
            { method: 'put', path: '/:id', handler: this.userController.update.bind(this.userController) },
            { method: 'delete', path: '/:id', handler: this.userController.delete.bind(this.userController) },
            { method: 'get', path: '/', handler: this.userController.findAll.bind(this.userController)}
        ];

        this.bindRoutes(routes);
    }
}

module.exports = UserRouter