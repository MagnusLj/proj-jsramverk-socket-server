


// const stuff = {
//
//
//     getLog: function() {
//
//             var MongoClient = require('mongodb').MongoClient;
//             var url = "mongodb://localhost:27017/chat";
//
//             MongoClient.connect(url, function(err, db) {
//               if (err) throw err;
//               var dbo = db.db("chat");
//               // var myobj = data;
//
//               dbo.collection("chatlog").find({}).toArray(function(err, result) {
//                 if (err) throw err;
//                 console.log(result);
//                 db.close();
//                 res.status(200).json( {data: rows} );
//                 return result;
//               });
// });
//
// }


// getDescription: function(res, status=200) {
//     db.get("SELECT blahblah FROM stuff WHERE type = 'description_text'",
//         (err, rows) => {
//             if (err) {
//                 // return products.errorResponse(res, "/products", err);
//             }
//
//             res.status(200).json( {data: rows} );
//         });
// },



// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });




    // function(res, status=200) {
    //     db.get("SELECT blahblah FROM stuff WHERE type = 'description_text'",
    //         (err, rows) => {
    //             if (err) {
    //                 // return products.errorResponse(res, "/products", err);
    //             }
    //
    //             res.status(200).json( {data: rows} );
    //         });
    // }




// };

// module.exports = stuff;
