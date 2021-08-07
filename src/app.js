const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/connect");

const port = process.env.PORT || 3000;           //assigning localport OR Server port to a constant

const static_path = path.join(__dirname, "../public");  //assigning path to a constant
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.use(express.static(static_path));     //passing static_path const 
app.set("view engine", "hbs");            //passing hbs const
app.set("views" , template_path);         //passing template_path 

hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("index")
});

app.listen(port, () => {                        //using that const port to listen
    console.log(`server is running fine on port number ${port}`);
})