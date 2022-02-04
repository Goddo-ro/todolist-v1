const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  var day = today.toLocaleDateString("en-US", options);
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
