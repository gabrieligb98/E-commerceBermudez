import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const addNumber = () => {
        if (count < stock) {
            setCount(count+1)
        }
    };
    const restNumber = () =>{
        if (count > 1 ) {
            setCount (count - 1);
        }
    };
    return(
    <div>
        <div className="flex items-center justify center p-2 m-2 text-black bg-white rounded">
            <button className="p-2" onClick={addNumber}>+</button>
            <span className="p-2">{count}</span>
            <button className="p-2" onClick ={restNumber}>-</button>
        </div>
        <div className="flex items-center justify center p-2 m-2 text-black bg-white rounded"> 
            <button onClick={() => onAdd(count)}>Agregar al carrito!</button>
        </div>
    </div>
    )
}
export default ItemCount;