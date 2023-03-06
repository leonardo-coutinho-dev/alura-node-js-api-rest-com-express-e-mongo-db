import express from "express";

import bookController from "../controllers/booksController.js";

const router = express.Router();

router.get('/books', bookController.findBooks);

export default router;
