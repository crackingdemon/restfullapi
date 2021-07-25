const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/studentsapi",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify:false,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection is sucessful")
}).catch((e)=>{
    console.log("No connection")
})