import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar/navbar";
import Title from "./container/ItemListContainer";
//import carrito from './../public/carrito.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import Carrusel from "./components/Carrusel/carrusel"


function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <header className="App-header">
          <Carrusel/>
          <Title msj="Hola a todos" color="grey" />
        </header>
      </div>
    </div>
  );
}





export default App;
