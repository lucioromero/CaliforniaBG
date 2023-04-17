import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom"
import "./CartContainer.css"
import ItemCart from "../ItemCart/ItemCart";
import { createOrder } from "../../services/db";
import swal from "sweetalert";

function CartContainer(){
    const context = useContext(cartContext)
    const { cart, precioTotal, vaciarCarrito } = context

    async function order(){
        const order = {
            items: cart,
            buyer: {name: "Lucio"},
            total: precioTotal(),
            date: new Date()
        }
        const orderId = await createOrder(order)
        const finalOrder = await swal({
            title: "Gracias por tu compra!",
            text: "El ID de tu compra es: " + orderId,
            icon: "success"
        })
    }

    if(cart.length === 0){
        return (
            <>
                <div style = {{display: "flex"}}>
                    <h1 className="carrito-titulo">El carrito esta vacío</h1>
                            <Link to = "/">
                                <button className="comprar">Ver todos los productos</button>
                            </Link>
                </div>  
            </>
        )
    } else{
        return (
        <> 
            <ItemCart />
            <div className="total">
                <p>Total: ${precioTotal()}</p>
                <button className="comprar" onClick={order}>Finalizar compra</button>
                <button className="vaciar-carrito" onClick={vaciarCarrito()}>Vaciar Carrito</button>
            </div>
        </>    
        )
    }
}

export default CartContainer;