import "./App.css";
import Navbar from "./components/NavBar/navbar";
import Title from "./container/ItemListContainer";
//import carrito from './../public/carrito.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import Carrusel from "./components/Carrusel/carrusel";
import { useState } from "react";
import Cards from "./components/Card/cards";
import bridgestone from './assets/bridgestone.jpg'
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  const [carrito, setCarrito] = useState([]);
  const onAdd = (quantity) => {
    (console.log(`Compro: ${quantity}`))
}
  const [productos,setProductos] = useState([]);
  const buscarProductos = async () => {
    try {
      const response = await fetch (`https://api.mercadolibre.com/sites/MLA/search?q=`)
      const data = await response.json();
      setProductos(data.results);
    }catch (e){
      console.log(e);
    }
  }
  // useEffect (()=>{
  //   buscarProductos()
  // },[buscador])
console.log(productos)

  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <ItemCount stock = {8} initial = {1} onAdd = {onAdd}/>
          { <Title msj="Hola a todos" color="grey" /> }
          <Carrusel />
        <div>
          <h2>Neumaticos</h2>
          <img src={bridgestone}></img>
        </div>
          {/* <button className ='btn btn btn-secondary' onClick={() => {
              setCarrito([...carrito, "Neumaticos Bridgestone"])
              console.log(carrito)
              }}>Agregar al carrito
          </button>
          <button className ='btn btn btn-secondary' onClick={() => {
              setCarrito( carrito - 1)
              console.log(carrito)
              }}>Desminuir el carrioto
          </button>
          <Contador carritoLength={carrito.length}/> */}
          <Cards/>
          <Cards/>
          <Cards/>
      </div>
    </div>
  );
}

export default App;
