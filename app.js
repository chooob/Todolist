const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();

app.use(express.urlencoded());
app.set("view engine", "ejs");
app.use(express.static("public"));

var newListItems = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.get("/", function(req, res) {

let day  = date.getDate();

console.log(date.add(11,2));
  //looking into views folder for file called list.ejs, looking for a variable in the enclosed ejs marker <%=whatDay%> and passing the variable day to it.
  res.render("list", {
    whatDay: day,
    newListItems: newListItems
  });

})

app.post("/", function(req, res) {
  console.log(req.body.toDoList);
  console.log(req.body);
  let item = req.body.toDoList;

  //buttons have a name and value we can tap into with body parser
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    if (req.body.toDoList === "") {
      console.log("worked");
    } else {
      item = req.body.toDoList;
      newListItems.push(item);
    }



    res.redirect("/");
  }


});

app.get("/work", function(req, res) {
  res.render("list", {
    whatDay: "Work List",
    newListItems: workItems
  });
})

app.get("/work", function(req, res) {


})

app.get("/about",function(req,res){
  res.render("about");
})

app.listen(3000, function(req, res) {
  console.log("Local Hosted");
})
