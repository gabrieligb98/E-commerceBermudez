import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";
import {useState,useContext} from 'react';
import ItemCount from "../ItemCount/ItemCount";
// import Modul from "../Modal/modal";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";




const ItemDetail = ({ item }) => {
  
  const {addItemCart} = useContext (CartContext)
  const [cantidadSeleccionada,setCantidadSeleccionada] = useState (false);
  
  
  const itemsAdded = (count) => {
    addItemCart({...item, cantidad: count});
    setCantidadSeleccionada(true);
  }

  return (
    <div className="container my-5">
      <Card style={{ width: "18rem" }} className="producto mx-auto">
        <Card.Title>  {item.name} <br></br>{item.modelo} </Card.Title>
        <Card.Img src={item.img}></Card.Img>
        <Card.Body> <b>{item.descripcion}</b> </Card.Body>
        {!cantidadSeleccionada ? (<ItemCount stock={10} onAdd={itemsAdded} productoData={item} />) :  (<Link to ="/cart">Desea terminar su compra?</Link>)}        
      {/* {cantidad >= 1 ? ( <Link to="/cart" className="btn btn-success">Desea terminar su compra?</Link> ) : (<ItemCount initial={1} stock={15} onAdd={guardarValor} />)} */}
        {/* <button onClick={agregarAlCarrito}>Añadir Al Carrito</button>  */}
      </Card>
      {/* <Link to={``} className="btn btn-success my-2" variant="primary">
        Agregar al carrito.
      </Link> */}
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
