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
        notes.push(newNote);
        fs.writeFileSync("./db/db.json", JSON.stringify(notes));
        return res.json(notes);
    });

    // //API delete route
    // app.delete("/api/notes/:id", (req, res) => {

    // })
}