const ScoreController = require('../controllers/score.controller.js');

const BaseRouter = require('./base.route');

class ScoreRouter extends BaseRouter {
    constructor() {
        super('/api/v1/score');
        this.scoreController = new ScoreController();
        this.initRoutes();
    }

    initRoutes() {
        const routes = [
            { method: 'post', path: '/', handler: this.scoreController.create.bind(this.scoreController) },
            { method: 'put', path: '/:id', handler: this.scoreController.update.bind(this.scoreController) },
            { method: 'delete', path: '/:id', handler: this.scoreController.delete.bind(this.scoreController) },
            { method: 'get', path: '/', handler: this.scoreController.findAll.bind(this.scoreController) },
            { method: 'get', path: '/user/:userId', handler: this.scoreController.findByUser.bind(this.scoreController) },
            { method: 'get', path: '/best', handler: this.scoreController.findTenBestScores.bind(this.scoreController) }
        ];

        this.bindRoutes(routes);
    }
}

module.exports = ScoreRouter;

