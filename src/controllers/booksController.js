import books from "../models/Book.js";

class bookController {
    static findBooks = async (req, res) => {
        try {
            const booksFind = await books.find({ });
            res.send(booksFind);
            console.log(booksFind);
          } catch (err) {
            console.log(err);
          }
    }
};

export default bookController;
