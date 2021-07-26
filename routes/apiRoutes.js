const fs = require("fs");
const notes = require("../db/db.json");


module.exports = (app) => {
    //Filling in API routes
    app.get("/api/notes", (req, res) => res.json(notes));
}