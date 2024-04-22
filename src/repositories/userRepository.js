const User = require('../models/User');

class UserRepository {
    async createUser(username, password) {
        const newUser = new User({ username, password });
        return await newUser.save();
    }

    async getUserByUsername(username) {
        return await User.findOne({ username });
    }
}

module.exports = new UserRepository();
