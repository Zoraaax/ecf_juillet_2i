const questionController = require('../controllers/question.controller');

const BaseRouter = require('./base.route');

class QuestionRouter extends BaseRouter {
    constructor() {
        super('/api/v1/question');
        this.questionController = new questionController();
        this.initRoutes();
    }

    initRoutes() {
        const routes = [
            { method: 'post', path: '/', handler: this.questionController.create.bind(this.questionController) },
            { method: 'put', path: '/:id', handler: this.questionController.update.bind(this.questionController) },
            { method: 'delete', path: '/:id', handler: this.questionController.delete.bind(this.questionController) },
            { method: 'get', path: '/', handler: this.questionController.findAll.bind(this.questionController) },
            { method: 'get', path: '/difficulty/:difficulty', handler: this.questionController.findByDifficulty.bind(this.questionController) }
        ];

        this.bindRoutes(routes);
    }
}

module.exports = QuestionRouter;