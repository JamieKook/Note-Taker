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
            console.log(notesArr); 
            let isOldNote= false; 
            //check to see if note is already saved and just being edited
            for (let i=0; i<notesArr.length; i++){
                if (notesArr[i].id === parseInt(newNote.id)){
                    //new code to handle this situation 
                    newNote.id = parseInt(newNote.id);  
                    notesArr.splice(i, 1, newNote); 
                    isOldNote= true; 
                    console.log(notesArr); 
                } 
            }

            if (!isOldNote){
                //moved inside the for statement from previous code
                let currentId= 0; 
                if (notesArr.length > 0){
                    let currentLength= notesArr.length; 
                    currentId= notesArr[currentLength-1].id;
                } else {
                    currentId= 0; 
                }
                newNote.id= currentId +1; 
                notesArr.push(newNote);
            }
          
            
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