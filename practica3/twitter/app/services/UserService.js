const User = require('../models/User');

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio");
    }
    static getInfo(user){
        const arr = [];
        arr.push(user.id);
        arr.push(user.username);
        arr.push(user.name);
        arr.push(user.bio);
        return arr;
    }

    static updateUsername(user, newUsername){
        user.setUsername = newUsername;
    }

    static getAllUserNames(users){
        return users.map(user => user.username);
    }
}

module.exports = UserService;