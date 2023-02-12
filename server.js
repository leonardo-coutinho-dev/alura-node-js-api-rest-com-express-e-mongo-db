import app from "./src/app.js";

// const http = require("http");

const port = process.env.PORT || 8080;

// const routes = {
//   "/": "Curso de Node.js - API Rest com Express e MongoDB.",
//   "/books": "This is the page where all the books are listed.",
//   "/authors": "This is the page where all the authors are listed.",
//   "/about":
//     "This is the page where you can find all the information about the website.",
// };

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end(routes[req.url]);
// });

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
