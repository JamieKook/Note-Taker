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
            let currentLength= notesArr.length; 
            newNote.id = currentLength+1; 
            notesArr.push(newNote); 
            fs.writeFile("db/db.json", JSON.stringify(notesArr,null, 2), (err) =>{
                if (err) throw err;   
            }); 
        }); 
        res.json(newNote);  
    }); 

    app.delete("/api/notes/:id", function(req, res) {
        const chosenId= parseInt(req.params.id);
        console.log(chosenId); 
        fs.readFile("db/db.json", (err,data) =>{
            if (err) throw err; 
            notesArr = JSON.parse(data); 
            for (let i = 0; i< notesArr.length; i++){
                if (notesArr[i].id === chosenId){
                    console.log(i); 
                    notesArr.splice(i, 1); 
                }
            }
            fs.writeFile("db/db.json", JSON.stringify(notesArr,null, 2), (err) =>{
                if (err) throw err;   
            }); 
        }); 
       
    }); 
}; 