
// local db
// mongoose.connect('mongodb://127.0.0.1:27017/pokemon', () => {
//     console.log("Connected to mongoDB database !");
// });

// cloud db
// mongoose.connect('mongodb+srv://adam:adam@cluster0.u6dkakw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0n', () => {
//     console.log("Connected to mongoDB database !");
// });

// mongoose.connect('mongodb+srv://adam:adam@cluster0.u6dkakw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0n', () => {
//     console.log("Connected to mongoDB database !");
// });

function connectionToDatabase(){
    const mongoose = require('mongoose');
    mongoose.connect(
        'mongodb+srv://shah:shah@cluster0.8qdm2pm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then(() => console.log("connected to mongodb"))
    .catch((err) => console.log(err));
}

