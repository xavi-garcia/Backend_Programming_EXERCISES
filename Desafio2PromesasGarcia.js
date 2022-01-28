const fs = require('fs')

async function writeFile(){
     try {
        await fs.promises.writeFile('productos.txt', 'Lista de Productos')
       
    }catch (error) {
        console.log(error)
    }
}
writeFile()

const readFile = async path => {
    try {
        let data = await fs.promises.readFile(path, 'utf-8')
        console.log(data)
    }catch (error) {
        console.log(error)
    }
}
readFile('productos.txt', 'utf-8')

class Contenedor {
    constructor(productos) {
        this.nameFile = productos;
        this.producto = [];
    }
    
    
    async getAll(number){
        let fileExists = await readFile(this.nameFile);
        if (fileExists) {
            let dataFile = JSON.parse(fileExists);
            console.log(dataFile);
            return dataFile;
        }
    }
    

}

getAll(1)