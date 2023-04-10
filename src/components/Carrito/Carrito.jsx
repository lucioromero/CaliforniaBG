import { useContext } from "react";
import "./Carrito.css"
import { cartContext } from "../../context/cartContext";

function Carrito (){
    const { cart } = useContext(cartContext)
    return (
        <div>
            <img src="/images/carrito.png" alt="carrito" className="carrito" />
            <span className="total-carrito">{cart.length}</span>
        </div>
        
    )
}

export default Carrito;