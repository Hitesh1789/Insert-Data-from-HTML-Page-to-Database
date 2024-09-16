const user_controller = require("./controller")

module.exports = (app)=>{
    app.post("/sample/api/submit" , user_controller);
}