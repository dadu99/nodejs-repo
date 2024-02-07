const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Setting the view engine to EJS and views directory
app.set("view engine", "ejs");
app.set("views", "views");

// Using body-parser middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware function to set the Content-Type header
app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  next(); //next to the middleware line
});

app.use((req, res, next) => {
  // Extracting user name from request body or setting it to "Unknown User" if not present
  const userName = req.body.username || "Unknown User";
  res.render("index", {
    user: userName,
  });
});

app.listen(8080);
