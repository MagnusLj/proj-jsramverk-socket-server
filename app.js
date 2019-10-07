
const express = require('express');


const app = express();



const server = app.listen(3000, function() {
    console.log('server running on port 3000');
});


const io = require('socket.io')(server);

io.on('connection', function(socket) {
    console.log(socket.id)
    socket.on('SEND_MESSAGE', function(data) {
        io.emit('MESSAGE', data)
        console.log(data);
    });
});




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
