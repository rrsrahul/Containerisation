const express = require('express');

const app = express();
app.get('/',(req,res)=>{
    res.send('<h2>Hello There</h2>')

})

app.listen(3000)