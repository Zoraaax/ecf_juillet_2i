const express = require('express')

class BaseRouter {
    constructor(basePath) {
        this.basePath = basePath
        this.router = express.Router()
    }

    getRouter() {
        return this.router
    }

    bindRoutes(routes) {
        routes.forEach(route => {
            const { method, path, handler } = route
            this.router[method](path, handler)
        });
    }
}

module.exports = BaseRouter