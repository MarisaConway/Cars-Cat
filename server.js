var express = require("express");

var app = express();


app.get('/', function(request,response){
    response.send("<h1> Welcome to cats and cars! </h1>");
    response.sendfile(__dirname + '/static/index.html');
})

app.listen(8000, function() {
})
app.use(express.static(__dirname + "/static"))

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get("/cars", function (request, response){

    response.render('cars');
})
app.get("/cats", function (request, response){
    response.render('cats');
})
app.get("/forms", function (request, response){
    response.render('forms');
})