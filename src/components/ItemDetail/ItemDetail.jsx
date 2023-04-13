import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { useState } from "react";
import products from "../../data/products";

function ItemDetail(props){
    const [products, setProducts] = useState([])
    const {cart, agregarItem } = useContext(cartContext)
    
    function agregarCarrito(count){
        agregarItem(props, count)
    }


    return (
        <div className="card-detail" id = {props.id}>
            <div>
                <h3 className="header-detail">{props.titulo}</h3>
            </div>
            <div>
            <img src={props.img} alt="imagen" className="img"/>
            </div>
            <div className="footer-detail">
                <h4>${props.precio}</h4>
                <p className="descripcion">{props.descripcion}</p>
                <ItemCount agregarCarrito = {agregarCarrito}
                    stock = {props.stock}/>
            </div>   
        </div>
    )
}

export default ItemDetail;