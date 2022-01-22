class User {
    constructor(name, surname, pets){
            this.name = name;
            this.surname = surname;
            this.pets = pets;
            this.numberOfPets = 0;

    }

    getFullName(){
        console.log(`I'm ${this.name} ${this.surname}`)
    }

    addPets(){
         console.log(`I have : ${this.pets}`)
    }

    getNumberOfPets(){
        return this.numberOfPets
    }

    countPets(pets){
        this.numberOfPets += pets;
    } 

}


const user1 = new User ('Javier', 'Garcia', ['lizard', 'bat'])
console.log(user1)
user1.getFullName()
user1.addPets()
user1.countPets(2)
console.log(user1.numberOfPets)

