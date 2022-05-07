class Spiderman{
    constructor(name, age, actor, noMovies, cinemaStudio){
        this.name = name;
        this.age = age;
        this.actor = actor;
        this.noMovies = noMovies;
        this.cinemaStudio = cinemaStudio;
    }
    
    getInfo(){
        return `Hey, I'm ${this.name} from ${this.cinemaStudio}`;
    }
}

module.exports = Spiderman;