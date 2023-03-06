import express from "express";

import db from "./config/dbConnect.js";

import books from "./models/Book.js";

import routes from "./routes/index.js";

/**
 * GET: search information
 * POST: create information
 * PUT: Update information (completely)
 * PATCH: Update information (partially)
 * DELETE: Delete information
 */

// connection from database

// 1. error message in case of unsuccessful connection

db.on("error", console.log.bind(console, "Erro de conexão:"));

// 2. atempt of connection (once)

db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso!")
});

// creating the server

const app = express();

// prepare the server to read json format

app.use(express.json());

// rotas importadas do arquivo index

routes(app);

// array of books

// const books = [
//   { id: 1, title: "Farewell to arms" },
//   { id: 2, title: "For whom the bell tolls" },
// ];

// read method

// app.get("/", (req, res) => {
//   res.status(200).send("Curso de Node.js - API Rest com Express e MongoDB");
// });

// app.get("/books", async (req, res) => {
//   // books.find((err, books) => {res.status(200).json(books)}) - model.find() no longer accepts callback functions
//   try {
//     const booksFind = await books.find({ });
//     res.send(booksFind);
//     console.log(booksFind);
//   } catch (err) {
//     console.log(err);
//   }
// });

app.get("/books/:id", (req, res) => {
  let index = searchBooks(req.params.id);
  res.json(books[index]);
});

// create method

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("The book has been registered with success!");
});

// update method

app.put("/books/:id", (req, res) => {
  let index = searchBooks(req.params.id);
  books[index].title = req.body.title;
  res.json(books);
});

// delete method

app.delete("/books/:id", (req, res) => {
  let { id } = req.params;
  let index = searchBooks(id);
  books.splice(index, 1);
  res.send(`The book has been removed with success!`);
});

// function to filter the books array based on id

let searchBooks = (id) => {
  return books.findIndex((book) => book.id == id);
};

// export the server

export default app;
