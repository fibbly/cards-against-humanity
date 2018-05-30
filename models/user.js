const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const User = module.exports = mongoose.model('User', userSchema);

module.exports.getUsers = function(callback, limit) {
    User.find(callback).limit(limit);
};

module.exports.addUser = function(user, callback) {
    User.create(user, callback);
};