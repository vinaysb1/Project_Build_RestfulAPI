require('dotenv').config();
const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json({
        success: 1,
        message: "Hello World"
    });
});

const { createPool } = require("mysql");



app.listen(process.env.APP_PORT, () => {
    console.log("Server is running on port:", process.env.APP_PORT);
});
