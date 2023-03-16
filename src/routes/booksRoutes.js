import express from "express";

import bookController from "../controllers/booksController.js";

const router = express.Router();

router
.get('/books', bookController.findBooks)
.post('/books', bookController.createBook);

export default router;
