import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

function ItemDetail(props){
    return (
        <div className="card-detail" id = {props.id}>
            <div>
                <h3 className="header-detail">{props.titulo}</h3>
            </div>
            <div>
            <img src={props.img} alt="imagen" className="img"/>
            </div>
            <div className="footer-detail">
                <h4>{props.precio}</h4>
                <p className="descripcion">{props.descripcion}</p>
                <ItemCount />
                <button className="agregar-carrito">Agregar al carrito</button>
            </div>
                
            
        </div>
        
        // <div className="card-detail" id = {props.id}>
        //         <h1>{props.titulo}</h1>
        //         <img src={props.img} alt="imagen"/>
        //         <div className="footer-detail">
        //         <h2>{props.precio}</h2>
        //         <p>{props.descripcion}</p>
        //         <ItemCount />
        //         <button className="agregar-carrito">Agregar al carrito</button>
        //         </div>
                
        // </div>
    )
}

export default ItemDetail;