const mongoose = require('mongoose');

//schema for projects
const productSchema = mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
    name: { type: String, required: true, unique:true },
    description: { type: String, required: true },
    rating:{ type: Number, required: true },  
    price: { type: Number, required: true },
    image: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);