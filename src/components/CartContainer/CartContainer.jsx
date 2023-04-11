import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import "./CartContainer.css"
import ItemCount from "../ItemCount/ItemCount";

function CartContainer(){
    const context = useContext(cartContext)
    const cart = context.cart
    const precioTotal = context.precioTotal
    return (
        <>
        <div style = {{display: "flex"}}>
            <div>
                <h1 className="carrito-titulo">Carrito</h1>
                {cart.map((item) =>(
                        <div className = "item-carrito">
                            <div className="item"><h4>{item.titulo}</h4></div>
                            <div className="item"><p>Subtotal: ${item.precio}</p></div>
                            <div className="item"><p>Cantidad: {item.count}</p></div>
                            <div className="item"></div><img src="../images/remove.png" alt="remove" className="remove" />
                        </div> 
                    ))}
                    <div className="total">
                        <p>Total: ${precioTotal()}</p>
                        <button className="comprar">Finalizar compra</button>
                    </div>
            </div>
        </div>    
        </>
    )
}

export default CartContainer;