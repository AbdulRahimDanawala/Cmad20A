const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 4000;

let allProperty = []


app.set("views", "./HTMLfiles");
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.get('/', (req, res)=>{
    res.render('./create')
}) 
app.post('/property/create', (req, res)=>{
    allProperty.push(req.body)
    res.send(allProperty)
})


app.listen(port,(err)=>{
    if(err){
        console.log("Error Is running")
        console.log(err)
        return
    }
    console.log("Server Successfully start")
})