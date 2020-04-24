module.exports = app => {
    
    const bookstore = require("../controllers/bookstore.controller");

    let router = require("express").Router();

/*  "/api/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */
    
    /**
     * "/api/boks"
     * POST: creates a new book item
     * GET: returns all books items on the db
     */
    router.post("/", bookstore.create);

    router.get("/", bookstore.findAll);

    /**
     * "/api/books/published"
     * GET: returns all published books
     * API not implemented on this frontend
     */
    router.get("/published", bookstore.findAllPublished);

     /**
     * "/api/books/:id"
     * GET: retrieve one book by id
     * PUT: update a book item by id
     * DELETE: delete a book item by id
     */
    router.get("/:id", bookstore.findOne);

    router.put("/:id", bookstore.update);

    router.delete("/:id", bookstore.delete);

    /**
     * "/api/books"
     * DELETE: deletes all published books
     */
    router.delete("/", bookstore.deleteAll);

    app.use('/api/books', router);
}