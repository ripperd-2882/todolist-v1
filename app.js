const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set('view engine', 'ejs'); //This line tells our app to use ejs as view engine

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {

    let day=date.getDate(); 
    // let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    // if (currentDay===6 || currentDay===0){
    //     day=weekday[currentDay];
    // } else {
    //     day="Weekday";
    // }

    // day=weekday[currentDay];

    res.render("list", { listTitle: day, newListItems: items });
})

app.post("/", function (req, res) {

    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    }
    else {

        let item = req.body.newItem;
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems })
});

app.post("/work", function (req, res) {
    let workItem = req.body.newItem;
    workItems.push(workItem);
    res.redirect("/work");
});

app.get("/about", function (req, res) {
    res.render("about")
});

app.listen(3000, function () {
    console.log("Server started at port 3000");
})