/**
 * file that defines the schema the BSON file
 * stored on mongoDB handled by mongoose
 */
module.exports = mongoose => {
    const Bookstore = mongoose.model(
        "bookstore",
        mongoose.Schema(
            {
                theme: String,
                author: String,
                title: String,
                genre: String,
                price: String,
                published: Boolean
        },
        { timestamps: true }
      )
    );
    return Bookstore;
  };