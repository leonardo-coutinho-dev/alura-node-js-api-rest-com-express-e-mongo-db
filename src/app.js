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

// get method

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js - API Rest com Express e MongoDB");
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

// post method

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("The book has been registered with success!");
});

// export the server

export default app;
