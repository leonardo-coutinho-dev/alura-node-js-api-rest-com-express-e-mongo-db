import books from "../models/Book.js";

class bookController {

    // get books - create

    static createBook = async (req, res) => {

      try {
        let book = new books(req.body);
        await books.save({ });
        res.status(201).send(book.toJSON());
        console.log(book);
      } catch (err) {
        res.status(500).send({message: `${err.message} - could not create book`})
      }

    }
      
    // get books - read

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
