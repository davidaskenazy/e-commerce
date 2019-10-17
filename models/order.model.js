const mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    order:{tipe:String},
    total:{type:String}
});

mongoose.model('Order',orderSchema);