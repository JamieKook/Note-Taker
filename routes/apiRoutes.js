const db = require("../db/db.json"); 
const fs = require("fs"); 

module.exports = function (app) {

    app.get("/api/notes", function(req, res){
        res.json(db); 
    }); 

    app.post("/api/notes", function(req, res){
        let newNote= req.body; 
        let notesArray = []; 
        fs.readFile("db/db.json", (err, data) => {
            if (err) throw err; 
            let dataObj= JSON.parse(data); 
            console.log("This is the read data from the file:"); 
            console.log(dataObj); 
            notesArray.push(dataObj); 
            console.log("This is the notes array with saved data:"); 
            console.log(notesArray);
        })
         
        notesArray.push(newNote); 
        console.log("This is the notes array with all data"); 
        console.log(notesArray); 

        fs.writeFile("db/db.json", JSON.stringify(notesArray, null, 3), (err) => {
            if (err) throw err; 
            console.log("New note added to db.json"); 
        }); 

        res.json(newNote); 
    }); 
}; 