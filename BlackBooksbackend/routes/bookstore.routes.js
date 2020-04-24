module.exports = app => {
    
    const bookstore = require("../controllers/bookstore.controller");

    let router = require("express").Router();

    //create a new book
    router.post("/", bookstore.create);

    //retrieve all in bookstore_list
    router.get("/", bookstore.findAll);

    //retrieve all published books
    router.get("/published", bookstore.findAllPublished);

    //retrieve one book by id
    router.get("/:id", bookstore.findOne);

    //update a book item by id
    router.put("/:id", bookstore.update);

    //delete book item by id
    router.delete("/:id", bookstore.delete);

    //delete all books in the list
    router.delete("/", bookstore.deleteAll);

    app.use('/api/books', router);
}