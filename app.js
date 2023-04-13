const express=require("express");
const bodyParser=require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/",function (req,res) {

    var today=new Date();
    var currentDay=today.getDay();
    var day="";
    var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    // if (currentDay===6 || currentDay===0){
    //     day=weekday[currentDay];
    // } else {
    //     day="Weekday";
    // }

    day=weekday[currentDay];

    res.render("list",{kindOfDay:day});
})

app.listen(3000,function () {
    console.log("Server started at port 3000");    
})