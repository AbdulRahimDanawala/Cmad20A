const express = require('express');
const app = express();
const port = 4000;


app.set("views", "./HTMLfiles");
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('./default.ejs')
})
app.get('/home', (req, res)=>{
    res.render('./view.ejs', {})
})

app.listen(port,(err)=>{
    if(err){
        console.log("Error Is running")
        console.log(err)
        return
    }
    console.log("Server Successfully start")
})