const mongoose = require('mongoose');

//schema for orders
const orderSchema = mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, default: 1 }
},{
    //allowing virtuals
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true 
    }
});


//creating virtual for total of order 
orderSchema.virtual('total').get(function () {
    return (this.quantity * this.product.price)
  });

module.exports = mongoose.model('Order', orderSchema);