const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const morgan = require("morgan");
const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./config/db");

// Connect to database
db.connect();

app.use(express.static(path.join(__dirname, "public")));

// Setup body HTTP
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// HTTP Logger
//app.use(morgan("combined"));

// Template engine
app.engine(
  ".hbs",
  exphbs.engine({
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
