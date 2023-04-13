const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items=["Buy Food","Cook Food","Eat Food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {

    let today = new Date();
    let currentDay = today.getDay();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);
    // let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    // if (currentDay===6 || currentDay===0){
    //     day=weekday[currentDay];
    // } else {
    //     day="Weekday";
    // }

    // day=weekday[currentDay];

    res.render("list", { kindOfDay: day, newListItems: items });
})

app.post("/", function (req, res) {
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Server started at port 3000");
})