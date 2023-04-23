import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom"
import "./CartContainer.css"
import ItemCart from "../ItemCart/ItemCart";
import { createOrder } from "../../services/db";
import swal from "sweetalert";
import Form from "../Form/Form";

function CartContainer(){
    const context = useContext(cartContext)
    const { cart, precioTotal, vaciarCarrito } = context

    async function order(userData){
        const order = {
            items: cart,
            buyer: userData,
            total: precioTotal(),
            date: new Date()
        }
        const orderId = await createOrder(order)
        const finalOrder = await swal({
            title: "Gracias por tu compra!",
            text: "El ID de tu compra es: " + orderId,
            icon: "success"
        })

        vaciarCarrito()
    }

    if(cart.length === 0){
        return (
            <>
                <div className="carrito-vacio">
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
                <h3>Total: ${precioTotal()}</h3>
                <button className="vaciar-carrito" onClick={vaciarCarrito}>Vaciar Carrito</button>
                <Form onCheckout = {order} />
            </div>
        </>    
        )
    }
}

export default CartContainer;