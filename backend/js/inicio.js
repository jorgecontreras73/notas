"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var cors = require('cors');
var app = express();
var hostname = '127.0.0.1';
var port = 3001;
var url = 'http://127.0.0.1:3001/';
app.use(cors());
app.get('/notas', function (req, res) {
    var fs = require('fs');
    var rawdata = fs.readFileSync('notas.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    res.send(student);
});
app.post('/notas', function (req, res) {
    var fs = require('fs').promises;
    fs.writeFile('notas.json', req);
});
app.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
