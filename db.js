const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.dbst6.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    console.log("Connected to MongoDB.")
);

exports.connection = mongoose.connection;


// const connection = mongoose.connect(`mongodb://${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`, 
//     {useNewUrlParser: true, useUnifiedTopology: true},
//     console.log("Connecton found.")
// );

// mongodb+srv://<username>:<password>@cluster0.dbst6.mongodb.net/<database>?retryWrites=true&w=majority
