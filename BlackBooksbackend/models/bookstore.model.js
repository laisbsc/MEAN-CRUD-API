/**
 * file that defines the schema for mongoose
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