import Item from './Item'


// export default function ItemList() {
//   return (
//     <div className="container d-flex justify-content-center align-items-center h-100 bg-terciary">
//         <div className="row">
//             <div className="col-md-4">
//                 <Item/>    
//             </div>
//             <div className="col-md-4">
//                 <Item/>    
//             </div>
//             <div className="col-md-4">
//                 <Item/>    
//             </div>
//         </div>
//     </div>
// )
// }


const ItemList = ({productos}) => {
    return (
        <div>
            {
                productos?.map(producto => {
                    return <Item name={producto.name} id={producto.id} price={producto.price} img={producto.img}/>
                    })
            }
        </div>
    )
}

export default ItemList;