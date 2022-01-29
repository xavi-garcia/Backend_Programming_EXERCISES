class User {
    constructor(name, surname, pets, books){
            this.name = name;
            this.surname = surname;
            this.pets = pets;
            this.numberOfPets = 0;
            this.books = books;

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

    getBooks(){
        return this.books;
    }

    addBooks(newBooks){
        this.books.push(newBooks);
    }


}


const user1 = new User ('Javier', 'Garcia', ['lizard', 'bat'], ['The Shining, Stephen King'])
console.log(user1)

user1.getFullName()
user1.addPets()
user1.countPets(3)
console.log(`The number of pets I have is ${user1.numberOfPets}`)
user1.addBooks('It, Stephen King');
console.log(user1.getBooks())

