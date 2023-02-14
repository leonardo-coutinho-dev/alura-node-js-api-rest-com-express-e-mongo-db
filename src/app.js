import express from "express";

// creating the server

const app = express();

// prepare the server to read json format

app.use(express.json());

// array of books

const books = [
  { id: 1, title: "Farewell to arms" },
  { id: 2, title: "For whom the bell tolls" },
];

// read method

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js - API Rest com Express e MongoDB");
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

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
