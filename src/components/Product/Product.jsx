import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./Product.css"

function Product(props){
    return (
        <div className="card" id = {props.id}>
            <div>
                <h3 className="header">{props.titulo}</h3>
            </div>
            <img src={props.img} alt="imagen" className="img"/>
            <div className="footer">
                <h4>{props.precio}</h4>
                <ItemCount />
                <Link to={`/detalle/${props.id}`}>
                    <button className="detalle">Detalles</button>
                </Link>
                <button className="agregar-carrito">Agregar al carrito</button>
            </div>
                
            
        </div>
    )
}

export default Product;