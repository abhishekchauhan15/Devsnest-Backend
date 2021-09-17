
const express = require('express');

const app = express();

app.listen(5000);

//CRUD -> Create, Read, Update, Delete 
//Things to note: Security , performance, edge cases


app.get('/home', (req, res)=>{
    res.send(req.query);
}) 


 

app.get("/withjson", (req, res) => {
    res.json({ a: 1 });

})
app.get("/status", (req, res) => {
    res.status(200);   //just returns the status count
    res.send("hemlo");
})

//the above function can be written like this. 

app.get("/statusi", (req, res) => {                 //statusi can be written as abcd or anything right, ref neeche
    res.sendStatus(500).json({ a: 1 });
})
//This is pipelining - ek func ke baad dusra func is called pipelining

//This is query params, written as localhost:5000/query?k=key&v=value
app.get("/query", (req, res) => {
    // res.send(req.query);
    //to get only one key
    res.send(req.query.k)
})


//dynamic queries
app.get("/users/:userID/book/:bookID", (req, res) => {
    res.send(req.params);
    // res.send(req.params.id);

})



//sendStatus 
//200 -> everything went ok
//201 -> updated successfully
//400 -> nclint side validation error 
//500 -> server side error
