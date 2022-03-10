'use strict';

const express = require('express');
const app = express();
const cors = require("cors");
// App Level MW
app.use(cors());
app.use(express.json());

const { db } = require('./models/index');

const myRouter = require("./routes/router")


app.use(myRouter);

app.get("/", (req, res) => {
    res.status(200).send("Hello 👋 🖥 server");
});




const port = 5000;
const server = app.listen(port, () => {
    if (!port) { throw new Error('Missing Port') }
    else { console.log(`🌎  ==> API Server now listening on PORT ${port}!`) };
});



db.sync()
  .then(() => {
    console.log("DataBase Connected");
    console.log(new Date().toLocaleString());
  })
  .catch(console.error);




module.exports = {
  server: app,
};