const mongoose = require("mongoose")
uri = "mongodb+srv://menkatiwari79:tCgGDLleCLl2oopc@test-pro-db.7ay8phj.mongodb.net/test-pro-db?retryWrites=true&w=majority&appName=test-pro-db"
const Connectdb = ()=>{
return mongoose.connect(uri,{
   useNewUrlParser : true,
   useUnifiedTopology:true
});
};
module.exports= Connectdb;