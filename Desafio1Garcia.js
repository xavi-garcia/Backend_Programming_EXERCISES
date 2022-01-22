class User {
    constructor(name, surname, pets, books){
            this.name = name;
            this.surname = surname;
            this.pets = pets;
            this.books = books;
            this.numberOfPets = 1;

    }

    getFullName(){
        console.log(`I'm ${this.name} ${this.surname}`)
    }

    addPets(){
        return this.pets;
    }

    getNumberOfPets(){
        return this.numberOfPets
    }

    countPets(pets){
        this.numberOfPets += pets;
    }

}

const user1 = new User ('Javier', 'Garcia')
console.log(user1.getFullName())
user1.countPets(2)
console.log(user1.numberOfPets)

