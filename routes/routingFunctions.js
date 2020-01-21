const fs = require("fs"); 
const util = require ("util"); 

const readFileAsync = util.promisify(fs.readFile); 

async function postNotes(req, res) {
    let newNote= req.body; 
    let notesArr = []; 
    let Filedata=""; 
    try {
        await fs.readFile("db/db.json", "Utf8", (err,data)=>{
            if (err) throw err; 
            Filedata= data; 
        }); 

        notesArr= JSON.parse(Filedata); 
    let isOldNote= false; 
    //check to see if note is already saved and just being edited
    for (let i=0; i<notesArr.length; i++){
        if (notesArr[i].id === parseInt(newNote.id)){
            //new code to handle this situation 
            newNote.id = parseInt(newNote.id);  
            notesArr.splice(i, 1, newNote); 
            isOldNote= true; 
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
    
    res.json(newNote); 
    
    fs.writeFile("db/db.json", JSON.stringify(notesArr,null, 2), (err) =>{
        if (err) throw err;  
    }); 

    } catch (err) {
        console.log(err); 
    }

    
    // fs.readFile("db/db.json", (err, data) => {
    //     if (err) throw err; 
    //     notesArr= JSON.parse(data); 
    //     let isOldNote= false; 
    //     //check to see if note is already saved and just being edited
    //     for (let i=0; i<notesArr.length; i++){
    //         if (notesArr[i].id === parseInt(newNote.id)){
    //             //new code to handle this situation 
    //             newNote.id = parseInt(newNote.id);  
    //             notesArr.splice(i, 1, newNote); 
    //             isOldNote= true; 
    //         } 
    //     }

    //     if (!isOldNote){
    //         //moved inside the for statement from previous code
    //         let currentId= 0; 
    //         if (notesArr.length > 0){
    //             let currentLength= notesArr.length; 
    //             currentId= notesArr[currentLength-1].id;
    //         } else {
    //             currentId= 0; 
    //         }
    //         newNote.id= currentId +1; 
    //         notesArr.push(newNote);
    //     }
        
    //     res.json(newNote); 
        
    //     fs.writeFile("db/db.json", JSON.stringify(notesArr,null, 2), (err) =>{
    //         if (err) throw err;  
    //     }); 
    // }); 
}

function getNotes(req, res){
    fs.readFile("db/db.json", (err, data) => {
        if (err) throw err; 
        res.json(JSON.parse(data)); 
    }); 
}

function deleteNotes(req, res){
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
}

module.exports = {"postNotes": postNotes, 
                "getNotes": getNotes, 
                "deleteNotes": deleteNotes,
                "readFileAsync": readFileAsync}; 