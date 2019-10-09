// MongoDB
const mongo = require("mongodb").MongoClient;
const dsn =  "mongodb://localhost:27017/chat";


const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');


const app = express();

app.use(cors());


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.path);
    next();
});



// Just for testing the sever
app.get("/", (req, res) => {
    res.send("Hello World");
});


// Return a JSON object with list of all documents within the collection.
app.get("/chatlog", async (request, response) => {
    try {
        let res = await findInCollection(dsn, "chatlog", {}, {}, 0);

        console.log(res);
        response.json(res);
    } catch (err) {
        console.log(err);
        response.json(err);
    }
});





const server = app.listen(3000, function() {
    console.log('server running on port 3000');
});


const io = require('socket.io')(server);






// io.on('connection', function(socket) {
//     console.log(socket.id)
//     socket.on('SEND_MESSAGE', function(data) {
//         io.emit('MESSAGE', data)
//         console.log(data);
//     });
// });





io.on('connection', function(socket) {
    console.log(socket.id)
    // console.log(socket.id)
    socket.on('SEND_MESSAGE', function(data) {
        io.emit('MESSAGE', data)
        console.log(data);
        // console.log(data);




        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/chat";

        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("chat");
          var myobj = data;

          dbo.collection("chatlog").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
          });

//           dbo.createCollection("chatlog", function(err, res) {
//   if (err) throw err;
//   console.log("Collection created!");
//   db.close();
// });



          // dbo.collection("chatlog").insertOne(myobj, function(err, res) {
          //   if (err) throw err;
          //   console.log("1 document inserted");
          //   db.close();
          // });
        });





    });
    });







async function findInCollection(dsn, colName, criteria, projection, limit) {
    const client  = await mongo.connect(dsn);
    const db = await client.db();
    const col = await db.collection(colName);
    const res = await col.find(criteria, projection).limit(limit).toArray();

    await client.close();

    return res;
}



app.use((req, res, next) => {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    res.status(err.status || 500).json({
        "errors": [
            {
                "status": err.status,
                "title":  err.message,
                "detail": err.message
            }
        ]
    });
});






//
//
//
// // MongoDB
// const MongoClient = require("mongodb").MongoClient;
// const url =  "mongodb://localhost:27017/chat";
//
// const express = require('express');
// const app = express();
//
// //Nytt
// const bodyParser = require('body-parser');
// // const cors = require('cors');
// // const stuff = require('./models/stuff.js');
//
// // app.use(cors());
//
// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use((req, res, next) => {
//     console.log(req.method);
//     console.log(req.path);
//     next();
// });
//
//
// // Just for testing the sever
// app.get("/", (req, res) => {
//     res.send("Hello World");
// });
//
// // app.get('/chatlog', (req, res) => stuff.getLog(res, req));
//
// // Return a JSON object with list of all documents within the collection.
// app.get("/chatlog", async (request, response) => {
//     try {
//         let res = await findInCollection(url, "chatlog", {}, {}, 0);
//
//         console.log(res);
//         response.json(res);
//     } catch (err) {
//         console.log(err);
//         response.json(err);
//     }
// });
//
//
//
// //Nytt
// // var MongoClient = require('mongodb').MongoClient;
// // const url =  "mongodb://localhost:27017/chat";
// // const fs = require("fs");
// // const path = require("path");
// // const docs = JSON.parse(fs.readFileSync(
// //     path.resolve(__dirname, "setup.json"),
// //     "utf8"
// // ));
//
//
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });
//
//
//
//
//
// // Put this last
// // Nytt
// app.use((req, res, next) => {
//     var err = new Error("Not Found");
//     err.status = 404;
//     next(err);
// });
//
// app.use((err, req, res, next) => {
//     if (res.headersSent) {
//         return next(err);
//     }
//
//     res.status(err.status || 500).json({
//         "errors": [
//             {
//                 "status": err.status,
//                 "title":  err.message,
//                 "detail": err.message
//             }
//         ]
//     });
// });
//
//
// async function findInCollection(url, colName, criteria, projection, limit) {
//     const client  = await MongoClient.connect(url);
//     const db = await client.db();
//     const col = await db.collection(colName);
//     const res = await col.find(criteria, projection).limit(limit).toArray();
//
//     await client.close();
//
//     return res;
// }
//
//
//
//
//
//
// const server = app.listen(3000, function() {
//     console.log('server running on port 3000');
// });
//
//
// const io = require('socket.io')(server);
//
// //Nytillagt
// // io.origins(['https://me-app.dreamsofliden.me:443']);
// // io.origins(['localhost:3000']);
//
//
//
//
//
//
//
//
// io.on('connection', function(socket) {
//     // console.log(socket.id)
//     socket.on('SEND_MESSAGE', function(data) {
//         io.emit('MESSAGE', data)
//         // console.log(data);
//
//
//
//
//         var MongoClient = require('mongodb').MongoClient;
//         var url = "mongodb://localhost:27017/chat";
//
//         MongoClient.connect(url, function(err, db) {
//           if (err) throw err;
//           var dbo = db.db("chat");
//           var myobj = data;
//
//           dbo.collection("chatlog").insertOne(myobj, function(err, res) {
//             if (err) throw err;
//             console.log("1 document inserted");
//             db.close();
//           });
//
// //           dbo.createCollection("chatlog", function(err, res) {
// //   if (err) throw err;
// //   console.log("Collection created!");
// //   db.close();
// // });
//
//
//
//           // dbo.collection("chatlog").insertOne(myobj, function(err, res) {
//           //   if (err) throw err;
//           //   console.log("1 document inserted");
//           //   db.close();
//           // });
//         });
//
//
//
//
//
//     });
// });




// const cors = require('cors');
//
//
// const app = require('express')();
// app.use(
//     cors({
//       credentials: true,
//       origin:
//         process.env.NODE_ENV === 'production'
//           ? process.env.FRONTEND_HOST
//           : 'http://localhost:9595'
//     })
//   );
// const server = require('http').createServer(app);
// const io = require('socket.io')(server);
// // io.origins(['http://localhost:3000']);
//
// const port = 9595;
//
// app.listen(port, () => console.log(`Socket server listening on port ${port}!`));
