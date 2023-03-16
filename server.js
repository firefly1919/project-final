const routes = require("./routes")
const Connectdb = require('./connectdb')
const express = require("express")
const app = express()
const port = 6004
const sendEmail = require('./sendEmail.js');
const bcrypt = require('bcrypt');

app.use(express.json())
app.use("/", routes)
sendEmail()
app.listen(port, console.log(`app is running port:${port}`))

Connectdb()
