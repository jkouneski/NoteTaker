const express = require("express");

const app = express();
const PORT = process.env || 3001;

//Set up body parsing, static, and route middleware.
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

