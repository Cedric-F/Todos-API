const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 3
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    unique: true,
    timestamps: false
});

const Items = mongoose.model('Items', ItemSchema);

module.exports = Items;