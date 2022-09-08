import { productosStock } from "../data/Data"

const pedirDatos = ()  => {
    return new Promise ((resolve,reject)=>{
        setTimeout (()=>{
            resolve (productosStock)
            console.log(pedirDatos)
            console.log(productosStock)
        },100)
    })
    
}

export default pedirDatos