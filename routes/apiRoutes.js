const fs = require("fs");
const notes = require("../db/db.json");


module.exports = (app) => {
    //Filling in API routes
    app.get("/api/notes", (req, res) => res.json(notes));

    app.post("/api/notes", (req, res) => {
        const addNote = req.body;
        const noteID = (notes.length).toString();
        addNote.id = noteID;
        notes.push(addNote);
        fs.writeFileSync("./db/db.json", JSON.stringify(notes));
        return res.json(notes);
    });
}