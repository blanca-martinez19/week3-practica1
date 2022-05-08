const UserService = require('../services/UserService')

class UserView {
  static createUser(payload) {
    if (payload === null) 
        return { error: "payload no existe" };
    if (payload.username === null || payload.name === null || payload.id === null)
        return { error: "necesitan tener un valor valido" };
    if(!('username' in payload) || !('name' in payload) || !('id' in payload))
        return { error: "necesitan tener un valor valido" };
        
    return UserService.create(payload.id, payload.username, payload.name);
  }
}

module.exports = UserView;
