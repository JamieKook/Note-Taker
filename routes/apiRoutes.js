const fs = require("fs"); 
const db = require("../db/db.json"); 

module.exports = function (app) {

    app.get("/api/notes", function(req, res){
        fs.readFile("db/db.json", (err, data) => {
            if (err) throw err; 
            res.json(JSON.parse(data)); 
        }); 
         
    }); 

    app.post("/api/notes", function(req, res){
        let newNote= req.body; 
        let notesArr = []; 
        fs.readFile("db/db.json", (err, data) => {
            if (err) throw err; 
            notesArr= JSON.parse(data); 
            notesArr.push(newNote); 
            fs.writeFile("db/db.json", JSON.stringify(notesArr,null, 2), (err) =>{
                if (err) throw err;   
            }); 
        }); 
        res.json(newNote);  
    }); 
}; 