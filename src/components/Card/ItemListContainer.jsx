import ItemCount from '../ItemCount/ItemCount'
import {useState,useEffect} from "react"
import ItemList from "./ItemList"

const onAdd = (quality) => {
    (console.log( `Compro ${quality} Items`))
}

const productosStock = [
  {"id":0,  "name":"Neumaticos 1",  "price":30 },
  {"id":1,  "name":"Neumaticos 2",  "price":35 },
  {"id":2,  "name":"Neumaticos 3",  "price":42 },
  {"id":3,  "name":"Neumaticos 4",  "price":50 },
  {"id":4,  "name":"Neumaticos 5",  "price":65 },
  {"id":5,  "name":"Neumaticos 6",  "price":78 },
  {"id":6,  "name":"Neumaticos 7",  "price":25 },
  {"id":7,  "name":"Neumaticos 8",  "price":70 },
  {"id":8,  "name":"Neumaticos 9",  "price":63 }
]

const getProducts = new Promise ((res,rej)=>{
  setTimeout(()=>{
    res(productosStock)
  },2000);
})

const ItemListContainer =({greeting,color})=> {
  const [productos,setProductos] = useState([]);
  useEffect(()=>{
    getProducts
    .then((data)=>{
      setProductos(data)
    })
  },[]);
  return (

    
  <div>
    <h1 className="articulos">
        ARTICULOS
    </h1>
    <ItemList productos={productos}/>
  </div>
)
}
export default ItemListContainer



