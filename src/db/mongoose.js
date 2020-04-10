const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).catch((error) => console.log('Connection error! ' + error.message))

// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(DB_URI, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("task-manager-api").collection("users");
//     // perform actions on the collection object
//     collection.find({})
//     client.close();
// });
