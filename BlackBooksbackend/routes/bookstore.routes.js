module.exports = app => {
    
    const bookstore = require("../controllers/bookstore.controller");

    let router = require("express").Router();

     /**
     * "/api/books"
     * GET: returns all books in the db
     * POST: create a new book
     */
    router.post("/", bookstore.create);

    router.get("/", bookstore.findAll);

     /**
     * "/api/books/published"
     * GET: returns all published books
     */
    router.get("/published", bookstore.findAllPublished);

    
     /**
     * "/api/books/:id"
     * GET: retrieves a single book by id
     * PUT: update a book item by id
     * DELETE: delete book item with matching id
     */
    router.get("/:id", bookstore.findOne);

    router.put("/:id", bookstore.update);

    router.delete("/:id", bookstore.delete);

    
     /**
     * "/api/books/:id"
     * DELETE: deletes all books in the list
     */
    router.delete("/", bookstore.deleteAll);

    app.use('/api/books', router);
}