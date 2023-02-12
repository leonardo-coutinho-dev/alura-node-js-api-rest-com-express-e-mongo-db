import express from "express";

const app = express();

const books = [
  { id: 1, title: "Farewell to arms" },
  { id: 2, title: "For whom the bell tolls" },
];

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js - API Rest com Express e MongoDB");
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

export default app;
