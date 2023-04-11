import React, { useContext } from "react";
import "./Carrito.css"
import { cartContext } from "../../context/cartContext";

function Carrito (){
    const context = useContext(cartContext)
    const totalItems = context.totalItems
    return (
        <div>
            <img src="/images/carrito.png" alt="carrito" className="carrito" />
            <span className="total-carrito">{totalItems()}</span>
        </div>
        
    )
}

export default Carrito;