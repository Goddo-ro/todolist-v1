const express = require("express");
const bodyParser = require("body-parser");

const app = express();

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
  res.render("list", {day: day});
});

app.post("/", function(req, res) {
  var item = req.body.toDoItem;
  console.log(item);
});

app.listen(3000, function() {
  console.log("The server started with port 3000");
});
