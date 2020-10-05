const express = require('express');

const app = express();

app.post('/', (req, res) => {
    req.send("Hello from post request");
});

app.listen(3000, () => {
    console.log("Server listeing on port 3000");
});