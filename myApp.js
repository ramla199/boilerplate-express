var express = require('express');
var app = express();
const path = require('path');
const absolutePath = path.join(__dirname, '/views/index.html');
app.use("/public", express.static(path.join(__dirname, "/public")));
app.get("/", function (req, res) {
    res.sendFile(absolutePath);

})








































module.exports = app;
