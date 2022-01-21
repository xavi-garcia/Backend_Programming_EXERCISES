class User {
    constructor (name, surname, pet) {
        this.name = name;
        this.surname = surname;
        this.pet = pet;

    }
        getFullName(){
            console.log(`Soy ${this.name} ${this.surname}`);
        }
        
        addPets("lizard") {
            
        }

        // countPets(){
        //     console.log(this.pet.length)
        // }
}


let user1 = new User("Snape", "Severus");


user1.getFullName();
user1.addPets();
// user1.countPets();


