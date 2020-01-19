
const {postNotes, getNotes, deleteNotes}= require("./routingFunctions"); 

module.exports = function (app) {

    app.get("/api/notes", getNotes); 

    app.post("/api/notes", postNotes); 

    app.delete("/api/notes/:id", deleteNotes); 
}; 