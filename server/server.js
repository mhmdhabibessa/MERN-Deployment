const express = require('express');
const cors = require('cors') // This is new
const app = express();
require('dotenv').config();
const port = process.env.PORT;
require('./config/user.config'); // This is new
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new

app.use(cors()) // This is new
require('./routes/user.routes')(app);

const server = app.listen(port, () => console.log(`Listening on port: ${port}`));
const io = require('socket.io')(server, { cors: true });

io.on("connection", socket => {

    socket.on("message", ({ name, message }) => {
        io.emit("message", { name, message })
    })


})
