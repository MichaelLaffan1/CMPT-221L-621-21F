let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');


let port = 3000;

app.get('/', function(req, res){
    var names = ["A", "B", "C", "D", "E"]
    var number = getRandomInt(5);
    res.render("index", {name: names[number]});
});

app.post('/', function(req, res){
    console.log(req.body);
    res.redirect('/');
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

app.listen(port, function() {
    console.log("Server running on localhost:3000");
})