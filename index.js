const express = require('express');
const app = express();

app.get('/reg', function(req,res) {
    res.send('Hello World!');
});

app.listen(3000, ()=>{
    console.log('server started at port 3000');
});