import React from 'react';
import img from '../../assets/neumaticos2.jpg';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

// function Item () {
//     return (
//         <div className="card">
//             <div className ="card-body">
//                 <img src={imgg}></img>
//                 <h3 className="card-title"> Producto </h3>
//                 <p className="card-text">Descripcion: lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur</p>  
//                 <p> precio: </p>    
                    
//             </div>
//         </div>
//     )
// }

// export default Item;

const Item = ({name,id,price}) => {
    return (
                <div className="card">
                    <div className ="card-body">
                        { <img src={img}></img> }
                        <h3 className="card-title">{name}</h3>
                        <p className="card-text">Descripcion: lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur</p>  
                        <p> precio: $  {price} Dolares</p>    
                        <ItemCount initial ={1} stock={15} />  
                        <Link to= {`/item/${id}`} className="btn btn-primary my-2 button" variant="primary">Ver Mas</Link> 
                    </div>
                </div>
            )
        }

export default Item;