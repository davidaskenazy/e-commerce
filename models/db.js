const mongoose = require('mongoose');


//mongodb://localhost:27017/ecommerceOrders
const URI = "mongodb+srv://davidaskenazy:123456a@cluster0-syir3.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true})
    .then(() => console.log("Connected to Database"))
    .catch(err => console.error("An error has occured", err));
require('./order.model');
