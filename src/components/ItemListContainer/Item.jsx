import React from 'react';
// import img from '../../../neumaticos2.jpg';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {CartContext} from './../../context/cartContext'



const Item = ({name,id,price,img}) => {
    const value = useContext (CartContext)
console.log(value)
    return (
                <div className="card">
                    <div className ="card-body">
                        { <img src={img}></img> }
                        <h3 className="card-title">{name}</h3>
                         
                         
                        <Link to= {`/item/${id}`} className="btn btn-primary my-2 button" variant="primary">Ver Mas información sobre el producto</Link> 
                    </div>
                </div>
            )
        }

export default Item;