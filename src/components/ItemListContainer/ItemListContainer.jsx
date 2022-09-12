import ItemCount from "../ItemCount/ItemCount";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import pedirDatos from "../../helper/pedirDatos";
import { useParams } from "react-router-dom";

const onAdd = (quality) => {
  console.log(`Compro ${quality} Items`);
};
const ItemListContainer = () => {
const [productos, setProductos] = useState([]);
const [loading, setLoading] = useState(true);

const { categoryId } = useParams();
console.log(categoryId);

useEffect(() => {
  setLoading(true);

  pedirDatos()
    .then((res) => {
      if (!categoryId) {
        setProductos(res);
      } else {
        setProductos(res.filter((prod) => prod.category === categoryId));
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
}, []);

return (
  <div>
    {
    loading 
    ? <h2>Cargando.</h2> 
    : <ItemList productos={productos} />
    }
    </div>
);
}

export default ItemListContainer;

// const getProducts = new Promise ((res,rej)=>{
//   setTimeout(()=>{
//     res(productosStock)
//   },2000);
// })

// const ItemListContainer =({greeting,color})=> {
//   const [productos,setProductos] = useState([]);
//   useEffect(()=>{
//     getProducts
//     .then((data)=>{
//       setProductos(data)
//     })
//   },[]);
//   return (

//   <div>
//     <h1 className="articulos">
//         ARTICULOS
//     </h1>
//     <ItemList productos={productos}/>
//   </div>
// )
// }
// export default ItemListContainer