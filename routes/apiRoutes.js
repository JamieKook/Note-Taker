const fs = require("fs");  

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
            let currentId= 0; 
            if (notesArr.length > 0){
                let currentLength= notesArr.length; 
                currentId= notesArr[currentLength-1].id;
            } else {
                currentId= 0; 
            }
            newNote.id= currentId +1; 
            notesArr.push(newNote); 
            fs.writeFile("db/db.json", JSON.stringify(notesArr,null, 2), (err) =>{
                if (err) throw err;   
            }); 
        }); 
        res.json(newNote);  
    }); 

    app.delete("/api/notes/:id", function(req, res) {
        const chosenId= parseInt(req.params.id);
        fs.readFile("db/db.json", (err,data) =>{
            if (err) throw err; 
            notesArr = JSON.parse(data); 
            for (let i = 0; i< notesArr.length; i++){
                if (notesArr[i].id === chosenId){
                    res.json(notesArr.splice(i, 1)); 
                }
            }
            fs.writeFile("db/db.json", JSON.stringify(notesArr,null, 2), (err) =>{
                if (err) throw err;  

            }); 
        }); 
       
    }); 
}; 