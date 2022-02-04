const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  day = date.getDate();
  res.render("list", {day: day, items: items });
});

app.post("/", function(req, res) {
  var item = req.body.toDoItem;
  items.push(item);

  res.redirect("/");
});

app.listen(3000, function() {
  console.log("The server started with port 3000");
});
