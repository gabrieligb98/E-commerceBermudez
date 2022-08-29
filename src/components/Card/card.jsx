import React from 'react';
import imgg from '../../assets/neumaticos2.jpg';


function Card () {
    return (
        <div className="card">
            <div className ="card-body">
                <img src={imgg}></img>
                <h3 className="card-title"> Producto </h3>
                <p className="card-text">Descripcion: lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur</p>  
                <p> precio: </p>    
                    
            </div>
        </div>
    )
}

export default Card;