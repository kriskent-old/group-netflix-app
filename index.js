//local db test

require("dotenv").config();
const express = require("express");

const { connection } = require("./db.js");
const port = process.env.PORT;

const app = express();

// app.listen(port, () => {
//     console.log("listening");
// });
