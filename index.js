const ContainerManager = require('./Desafio2Garcia')
const containerService = new ContainerManager();

let producto ={
    title: "funko Nezuko",
    price: 40,
    thumbnail: "https://i.ibb.co/Fkp6kDY/Nezuko-300x300.jpg",

}

containerService.saveProduct(producto).then(result=> console.log(result))

// containerService.getAll().then(result=> console.log(result))

// containerService.getById(1).then(result=> console.log(result))

// containerService.deleteProduct().then(result=> console.log(result))
