// require('dotenv').config()
// const express = require('express')   commonjs
import express from 'express';          //ES6 module syntax
const app = express()    //object

const port = process.env.PORT || 4000;

// app.get('/', (req, res) =>{
//     res.send('Hello Server is ready!')
// })

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "A joke",
            content: "Why don't scientists trust atoms? Because they makeup everything!" 
        },
        { 
            id: 2, 
            title: "Another joke",
            content: "Why did the scarecrow win an award? Because he was outstanding in his field!" 
        },
        { 
            id: 3,
            title: "A third joke",
            content: "What do you call fake spaghetti? An impasta!"
        }
    ];
    res.send(jokes);  //send the jokes array as a response
})

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);                   // start server
    
})