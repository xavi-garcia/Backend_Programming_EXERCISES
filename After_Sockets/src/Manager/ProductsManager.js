const fs = require('fs');

const pathToProducts = __dirname +'/../files/products.json'

const fetch = async() =>{
    let data = await fs.promises.readFile(pathToProducts,'utf-8');
    let products = JSON.parse(data);
    return products;
}

class ProductManager {

    add = async (product) => {
        if (fs.existsSync(pathToProducts)) {
            try {
                let products = await fetch();
                if (products.length === 0){
                    product.id = 1;
                    await fs.promises.writeFile(pathToProducts, JSON.stringify([products],null,2))
                    return {status:"success",message:"one product was added"}
                }
                product.id = products[products.length -1].id+1;
                products.push(product);
                await fs.promises.writeFile(pathToProducts, JSON.stringify(products,null,2))
                return {status:"success",message:"one product was added"}
            }catch(error){
                return {status:"error",error:error}
            }
        }
        product.id = 1;
        await fs.promises.writeFile(pathToProducts, JSON.stringify([product],null,2))
        return {status:"success",message:"one product was added"}
    }

    getAll = async() =>{
        if(fs.existsSync(pathToProducts)){
            try{
                let products = await fetch()
                return {status:"success",payload:products}
            }catch(error){
                return {status:"error",error:error}
            }
        }
    }

    getById = async (id) =>{
        if(fs.existsSync(pathToProducts)){
            let products = await fetch();
            let product = products.find(p=>p.id===id);
            if(product) return {status: "success", payload:product}
            else return {status:"fail",error:"no such product"}
        }
    }

    deleteProduct = async (id) =>{
        if(fs.existsSync(pathToProducts)){
            let products = await fetch();
            let newProduct = products.filter(product=>product.id!==id)
            await fs.promises.writeFile(pathToProducts,JSON.stringify(newProduct,null,2))
            return {status:"success",message:"product deleted"}
        }
    }

    modifyProduct = async (id) =>{
        if(fs.existsSync(pathToProducts)){
            let products = await fetch();
            let product = products.find(p=>p.id===id);
            if(product) return {status: "success", payload:product}
            else return {status:"fail", error:"no such product"}
        }
    }
}
module.exports = ProductManager;