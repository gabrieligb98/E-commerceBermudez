import React, {useState, useEffect} from "react";

const CartContext = React.createContext();

const CartProvider = ({children}) => {

    const [productos, setProductos] = useState([]); // carrito 
    const [productosQuantity, setProductosQuantity] = useState(0);
    // const addItem = (item,quantity) =>{
    //     item.quantity = quantity;
    //     setProductos([...productos,item]);
    // }

    const cantidadDeProductos = () =>  {
        let cantidad = 0;
    
        productos.forEach( producto => {
            cantidad += producto.cantidad
    });
    setProductosQuantity(cantidad);
    }

    useEffect( () => {

        cantidadDeProductos();
    }, [productos]);
    

    const addItemCart = (producto) => {
    if(isInCart(producto.id)){
    const encontrado = productos.find( prod => prod.id === producto.id);
    const productoEncontradoIndex = productos.indexOf(encontrado);
    const productosAuxiliar = [...productos];

    productosAuxiliar[productoEncontradoIndex].cantidad += producto.cantidad;
    setProductos(productosAuxiliar)

    } else {

    setProductos([...productos, producto]);
    }
    }

const RemoveItem = (id) => {
    setProductos(productos.filter (producto => producto.id !== id)  );
    setProductosQuantity();
}

const clear = () => {
        setProductos([]);
        setProductosQuantity(0);
}

const precioTotal = () => {
    let total = 0;
    productos.forEach( producto => {
    total += (producto.precio * producto.cantidad);
})
    return total;
}

const isInCart = (id) => {
    return productos.some( product => product.id === id );
}

const data = {
    productos,
    addItemCart,
    RemoveItem,
    clear,
    productosQuantity,
    precioTotal
}

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}  
// value = {data} en CartContext.provider 

export default CartProvider;

export {CartContext}