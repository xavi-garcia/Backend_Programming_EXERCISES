const fs = require ('fs')


const pathToProducts = './files/productos.json'
class Container {
    constructor(){}

    saveProduct = async (producto) =>{
        try {
            if(fs.existsSync(pathToProducts)){
                let data = await fs.promises.readFile(pathToProducts, 'utf-8');
                let productos = JSON.parse(data);
                let id = productos[productos.length-1].id+1;
                producto.id = id;
                productos.push(producto);
                await fs.promises.writeFile(pathToProducts, JSON.stringify(productos,null,2))
                return {status: "success",message: "nuevo producto"}
            }else{
                producto.id = 1
                await fs.promises.writeFile(pathToProducts,JSON.stringify([producto],null,2))
                return {status: "success",message: "nuevo producto"}

            }
        } catch (error) {
            return {status: "error",message: error}
        }
    }

    getAll = async () =>{
        if(fs.existsSync(pathToProducts)){
            let data = await fs.promises.readFile(pathToProducts, 'utf-8');
            let productos = JSON.parse(data);
            return {status: "success", productos: productos }
        }
    }

    getById = async (id) =>{
        if(fs.existsSync(pathToProducts)){
            let data = await fs.promises.readFile(pathToProducts, 'utf-8');
            let productos = JSON.parse(data);
            let producto = productos.find(p=>p.id===id);
            if(producto) return {status: "success", productos: producto}
            else return {status: "fail", error:"no existe"}
        }
    }

    deleteProduct = async (id) =>{
        if(fs.existsSync(pathToProducts)){
            let data = await fs.promises.readFile(pathToProducts, 'utf-8')
            let productos = JSON.parse(data);
            let nuevoProducto = productos.filter(producto=>producto.id!==id)
            await fs.promises.writeFile(pathToProducts,JSON.stringify(nuevoProducto,null,2))
            return {status:"success", message:"producto borrado"}
        }
    }

}


module.exports = Container;
