const mongoose = require("mongoose");


/*const Connection = async (username, password) => {
    const URL=`mongodb://${username}:${password}@ac-v5hv0qm-shard-00-00.78be0yw.mongodb.net:27017,ac-v5hv0qm-shard-00-01.78be0yw.mongodb.net:27017,ac-v5hv0qm-shard-00-02.78be0yw.mongodb.net:27017/?ssl=true&replicaSet=atlas-qk0uj4-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};*/

mongoose.connect("mongodb://0.0.0.0:27017/BLOG-APP").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log("error");
})

//module.exports=Connection; 