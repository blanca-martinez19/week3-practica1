const User = require('../../app/models/User');

describe("Unit Test for User class",() =>{
    //aqui invocas el codigo que vas a usar en tu app
    const user = new User(1, "carlogilmar", "Carlo", "bio");
    test("Create an User object", ()=>{
        //aqui validas los resultados del codigo
        expect(user.id).toBe(1);
        expect(user.username).toBe("carlogilmar");
        expect(user.name).toBe("Carlo");
        expect(user.bio).toBe("bio");
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    });

    test("Add getters", ()=>{
        //getters
        expect(user.getUsername).not.toBeUndefined();
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    });

    test("Add setters", ()=>{
        //getters
        user.setUsername ='Gilmar';
        expect(user.getUsername).toBe('Gilmar');

        user.setBio = 'New bio';
        expect(user.getBio).toBe('New bio');
    });
})