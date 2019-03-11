const express = require('express');

//setup express app
const app = express();

//listens for requests
app.listen(process.env.port || 4000,function(){
    console.log("now listening for requests");
});

//added to get git to push
