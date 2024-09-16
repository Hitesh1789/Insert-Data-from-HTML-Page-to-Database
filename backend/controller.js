const usermodel = require("./userModel");

//insertStudent(user) into db

const insert  = async (req,res)=>{

    const req_body = req.body;

    const req_obj = {
        studentName: req_body.studentName,
        rollNumber: req_body.rollNumber
    };

    try {
        const newStudent  = await usermodel.create(req_obj);

        console.log("Successfully inserted");
        return res.status(200).send(newStudent);
    } 
    catch (err) {
        console.log("Error while inserting student to database",err);
        return res.status(500).send({message : "Error while inserting student to database"})
    }
}

module.exports = insert;