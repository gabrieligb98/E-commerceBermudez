import * as React from "react"
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const CartWidget  = ({productos}) => {

  const { productosQuantity } = useContext(CartContext);

    return(
      <>
      {productos.lenght != 0 && <span>{productosQuantity}</span>}
      <svg xmlns="http://www.w3.org/2000/svg" height={48} width={48}>
      <path d="m24 19.3-2.1-2.1 3.7-3.7h-9.1v-3h9.1l-3.7-3.7L24 4.7l7.3 7.3ZM14.5 44q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55Q13 36.8 14.5 36.8q1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55Q16 44 14.5 44Zm20.2 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55Q36.2 44 34.7 44ZM3.1 7V4h5.8l8.5 18.2h14.4l8-14h3.35l-8.1 15.15q-.55.95-1.425 1.525t-1.925.575H16.55l-2.8 5.2H38.3v3H14.2q-1.9 0-2.875-1.5-.975-1.5-.125-3.05l3.2-5.9L7 7Z" />
      </svg>
      </>
      
    )
}

export default CartWidget;