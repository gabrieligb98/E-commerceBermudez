import {useState,useEffect} from React 
import {getFirestore,doc, getDoc} from 'firebase/firestore';

const ItemById = () => {
    
    const [id,setId] = useState ("");
    const [producto,setProducto] = useState ({});
    // const inputChangeHandler = (ev) =>{
    //     setId(ev.target.value);
    // };

    useEffect(()=>{
        if (id){

            const db = getFirestore();
            itemRef = doc (db, 'items' ,id.trim());
            getDoc (itemRef).then((snapshot)=>{
                if (snapshot.exists()) {

                    const newProducto = {
                        id: snapshot.id,
                        ...snapshot.data(),
                    };
                    setProducto(newProducto)
                }
                console.log(snapshot.data())
            });
        }
    },[id]);

    return (
        <>
            <h1> PRODUCTO </h1>

            <p> Nombre: {producto?.name}</p>
            <p> Precio: {producto?.price}</p>
            <p> Descripcion: {producto?.descripcion}</p>
            <p> Imagen: {producto?.img}</p>



        </>
    )

}


export default ItemById;