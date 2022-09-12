import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import {useEffect,useState} from 'react';
import ItemCount from "../ItemCount/ItemCount";




const ItemDetail = ({ item }) => {
    
  return (
    <div className="container my-5">
      <Card style={{ width: "18rem" }} className="producto mx-auto">
        <Card.Title>  {item.name} <br></br>{item.modelo} </Card.Title>
        <Card.Img src={item.img}></Card.Img>
        <Card.Body> <b>{item.descripcion}</b> </Card.Body>
        <ItemCount initial ={1} stock={15} />  
      </Card>
      <Link to={``} className="btn btn-success my-2" variant="primary">
        Agregar al carrito.
      </Link>
    </div>
  );
};

export default ItemDetail;

// const ItemDetailContainer = () => {
//     return (
//         <>

//         </>
//     )
// }
