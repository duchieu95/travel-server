var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Config = require('../config/config');
var Utilities = require('../config/utilities');


var PostSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    content: {
        type: String
    },
    postBy: {
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'posts'
});

module.exports = mongoose.model('Posts', PostSchema);
