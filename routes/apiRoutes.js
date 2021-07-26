const fs = require("fs");
const notes = require("../db/db.json");


module.exports = (app) => {
    //API get route
    app.get("/api/notes", (req, res) => res.json(notes));

    //API post route
    app.post("/api/notes", (req, res) => {
        const noteID = (notes.length).toString();
        const newNote = {
            id: noteID,
            title: req.body.title,
            text: req.body.text,
        };
        console.log(newNote);
        notes.push(newNote);
        fs.writeFileSync("./db/db.json", JSON.stringify(notes));
        return res.json(notes);
    });

    // //API put route
    // app.put("/api/notes:id", (req, res) => {
        
    // });

    //API delete route
    app.delete("/api/notes/:id", (req, res) => {
        const { id } = req.params;
        const deleteNote = notes.findIndex((n) => n.id == id);
        notes.splice(deleteNote, 1);
        fs.writeFileSync("./db/db.json", JSON.stringify(notes));
        return res.json(notes);
    });
};