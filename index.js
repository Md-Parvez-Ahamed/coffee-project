const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

//middleware
app.use(cors())
app.use(express.json());

//root
app.get('/',(req,res)=>{
    res.send('My coffee Server is running');
})

app.listen(port,()=>{
    console.log(`My coffee server is running,${port}`);
})