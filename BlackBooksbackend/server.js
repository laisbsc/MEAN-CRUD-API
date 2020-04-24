const express = require("express"); //build the resp APIs , HTML, C?SS, client-side JS files
const bodyParser = require("body-parser"); //parses the request and creates the req. body object
const cors = require("cors"); //express Middleware to enable CORS w several options
const http = require("http"); //HTTP server functionalities

const app = express(); // setting the routing to be handled by Express
let server = http.createServer(app); //This is where our server gets created

let corsOptions = {
    origin: "http://localhost:8080"
};

const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.use(cors(corsOptions));

//parse requests of content type - app/JSON
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to BlackBooks Bookstore application." });
});

require("./routes/bookstore.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});