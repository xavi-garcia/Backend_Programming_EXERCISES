class Cliente {
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }

    getName(){
        console.log(`Soy ${this.nombre} ${this.apellido}`)
    }
}

let cliente1 = new Cliente("Tanjiro", "uta");
cliente1.getName()