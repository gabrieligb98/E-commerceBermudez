import "./App.css";
import Navbar from "./components/NavBar/navbar";
import Title from "./container/ItemListContainer2";
//import carrito from './../public/carrito.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import Carrusel from "./components/Carrusel/carrusel";
import { useState } from "react";
import ItemListContainer from "./components/Card/ItemListContainer";
import bridgestone from './assets/bridgestone.jpg'
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  const [carrito, setCarrito] = useState([]);
  const onAdd = (quantity) => {
    (console.log(`Compro: ${quantity}`))
}
  // const [productos,setProductos] = useState([]);
  // const buscarProductos = async () => {
  //   try {
  //     const response = await fetch (`./data.json`)
  //     const data = await response.json();
  //     setProductos(data.results);
  //   }catch (e){
  //     console.log(e);
  //   }
  // }


  // useEffect (()=>{
  //   buscarProductos()
  // },[buscador])
// console.log(productos)


  return (
    <div className="App">
      <div className="container">
        <Navbar />  
          <Title msj="Hola a todos" color="grey" /> 
          <Carrusel />
        <div>
          <h2>Neumaticos</h2>
          <img src={bridgestone}></img>
        </div>
          <ItemListContainer/>
      </div>
    </div>
  );
}

export default App;
