//libs
const express = require('express')
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");

//adding root library
app.use(express.static('./'))

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//sending index page
app.get('/', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname})
})

//reciving and saving post req from website
app.post('/', function(req, res, next) {
    fs.writeFile('./note.json', JSON.stringify(req.body), err => {
        if (err) {
            console.log(err);
        } else {
            console.log('File successfully written!')
        }
    });
})


//app init
app.listen(8000, function(){
    console.log('Słucham localhost:8000');
})