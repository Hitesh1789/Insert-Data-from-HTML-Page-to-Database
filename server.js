const express = require("express")
const mongoose = require("mongoose")
const path = require("path")

const app = express()

app.use(express.json()) // Convert json to jsobject

app.use(express.static(path.join(__dirname,'frontend')));

//Connection with database
mongoose.connect("mongodb://0.0.0.0/sample_db")

const db = mongoose.connection

db.on("error", () => {
    console.log("Error while connecting to db.")
})

db.once("open", () => {
    console.log("Connected with db.")
})

require("./backend/route")(app)

app.listen(3000,()=>{
    console.log("Server is running on port number : 3000");
})