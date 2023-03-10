import express from 'express';

import books from './booksRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({title: 'Curso de Node.js - API Rest com Express e MongoDB - New arch'})
    })
    app.use(
        express.json(),
        books
    )
}

export default routes;