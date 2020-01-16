const db = require("../db/db.json"); 
const fs = require("fs"); 

module.exports = function (app) {

    app.get("/api/notes", function(req, res){
        res.json(db); 
    }); 

    app.post("/api/notes", function(req, res){
        let newNote= req.body; 
        let notesArr = []; 
        fs.readFile("db/db.json", (err, data) => {
            if (err) throw err; 

            notesArr= JSON.parse(data); 
            notesArr.push(newNote); 
            console.log(notesArr);
            fs.writeFile("db/db.json", JSON.stringify(notesArr,null, 2), (err) =>{
                if (err) throw err; 
            }); 
        }); 

        res.json(db); 
    }); 
}; 