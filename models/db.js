const mongoose = require('mongoose');




mongoose.connect('mongodb://localhost:27017/ecommerceOrders', {
    useUnifiedTopology: true,
    useNewUrlParser: true})
    .then(() => console.log("Connected to Database"))
    .catch(err => console.error("An error has occured", err));
require('./order.model');
