import React, { useState } from "react";

const ItemCount = ({ stock, onAdd}) => {

    const [count, setCount] = useState(1);
    const [stockProducto, setStockProducto] = useState(stock);

    const addNumber = () => {
        if (count < stockProducto) {
            setCount(count+1)
        }
    };
    const restNumber = () =>{
        if (count > 1 ) {
            setCount (count - 1);
        }
    };

    const agregarAlCarrito = () => {
        if(count > 0) {
            onAdd(count)
            setStockProducto(stockProducto - count)
            setCount(1)
        } else console.log("No hay mas stock");
    }
    return(
    <div>
        <div className="flex items-center justify center p-2 m-2 text-black bg-white rounded">
            <button className="p-2" onClick={addNumber}>+</button>
            <span className="p-2">{count}</span>
            <button className="p-2" onClick ={restNumber}>-</button>
        </div>
        <div className="flex items-center justify center p-2 m-2 text-black bg-white rounded"> 
            <button onClick={agregarAlCarrito}>Agregar al carrito!</button>
        </div>
    </div>
    )
}
export default ItemCount;