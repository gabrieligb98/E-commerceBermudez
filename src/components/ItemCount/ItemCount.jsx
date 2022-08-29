// const Contador = ({carritoLength}) => {
//     return (
//         <div>
//             <h4>
//                 Has ingresado {carritoLength} productos al carrito
//             </h4>
//         </div>
//     )
// }

// export default Contador


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
        <div className="flex items-center justify center">
            <button className="" onClick ={restNumber}>-</button>
            <h3></h3>
            <button className="" onClick={addNumber}>+</button>
        </div>
        <div className="flex items-center justify center"> 
            <button onClick ={()=> onAdd(count)}> Agregar al carrito</button>
        </div>
    </div>
    )
}
export default ItemCount;