import "./App.css";
import Navbar from "./components/NavBar/navbar";
import Title from "./container/ItemListContainer2";
//import carrito from './../public/carrito.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import Carrusel from "./components/Carrusel/carrusel";
import { useState } from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import bridgestone from './bridgestone.jpg'
import ItemCount from "./components/ItemCount/ItemCount";
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Nosotros from "./components/Nosotros/Nosotros"


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
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
        </Routes>
      </BrowserRouter>



      {/* <div className="container">
        <Navbar />  
          <Title msj="Hola a todos" color="grey" /> 
          <Carrusel />
        <div>
          <h2>Neumaticos</h2>
          <img src={bridgestone}></img>
        </div>
          <ItemListContainer/>
      </div> */}
    </div>
  );
}

export default App;
