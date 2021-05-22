import { nextTick } from "process";

const express = require('express');
const cors=require('cors');
const app=express();

const hostname = '127.0.0.1';
const port = 3001;
const url = 'http://127.0.0.1:3001/';

app.use(cors())

app.get('/notas', (req:any,res:any)=>{
    const fs = require('fs');

    let rawdata = fs.readFileSync('notas.json');
    let student = JSON.parse(rawdata);
    console.log(student);

    res.send(student);
})

app.post('/notas', (req:any,res:any)=>{
  const fs = require('fs').promises;
  fs.writeFile('notas.json', req);
      
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

