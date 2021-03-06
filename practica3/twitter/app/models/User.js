class User{
    constructor(id, username, name, bio){
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = new Date();
        this.lastUpdated = new Date();
    }

    get getUsername(){
        return this.name;
    }
    get getBio(){
        return this.bio;
    }
    get getDateCreated(){
        return this.dateCreated;
    }
    get getLastUpdated(){
        return this.lastUpdated;
    }

    set setUsername(name){
        this.username = name;
    }
    set setBio(bio){
        this.bio = bio;
    }
}

module.exports = User;