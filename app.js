var app = require('express')();
var http = require('http').Server(app);
const io = require('socket.io')(http);
const stock = require("./stock.js");


var apple = {
    name: "Äpple",
    rate: 1.002,
    variance: 0.6,
    startingPoint: 20,
};

var paron = {
    name: "Päron",
    rate: 1.001,
    variance: 0.4,
    startingPoint: 20,
};

var banan = {
    name: "Banan",
    rate: 1.001,
    variance: 0.4,
    startingPoint: 20,
};

var fruits = [apple, paron, banan];

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});

setInterval(function () {
    fruits.map((fruit) => {
        fruit["startingPoint"] = stock.getStockPrice(fruit);
        // console.log(fruit);
        return fruit;
    });

    console.log(fruits);

    io.emit("stocks", fruits);
}, 5000);


http.listen(3333, function() {
    console.log('listening on *:3333');
});
