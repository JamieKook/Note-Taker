// const { postNotes } = require("../routes/routingFunctions"); 

// const fs = require("fs"); 
// jest.mock("fs"); 

// const mockRequest = (sessionData, body) => ({
//     session: { data: sessionData },
//     body
//     });

// const mockResponse = () => {
//     const res = {};
//     res.status = jest.fn().mockReturnValue(res);
//     res.json = jest.fn().mockReturnValue(res);
//     return res;
//     };

// describe("Post Functions", () => {
//     it("the posted note's id is not changed if the note is being edited (it matches the id of a note in the file)", async () => {
//         let note= {title: "test edit",
//             text: "edited text",
//             id: 3}; 
//         let req= mockRequest(
//             {},
//             {note}
//         ); 
//         let res= mockResponse(); 
//         let data = '[{"title":"test","text":"test text","id":1},{"title":"test","text":"test text","id":2},{"title":"test","text":"test text","id":3}]'; 
//         fs.readFile.mockReturnValue(data);
//         await postNotes(req, res); 
//         expect(res.json).toHaveBeenCalledWith(note);  
//     }); 
// }); 

//Doesn't work- mock out file system but need it to run to test logic