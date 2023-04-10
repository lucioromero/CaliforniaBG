import React, { useState } from "react";
import "./ItemCount.css"


function ItemCount(props){
    const [count, setCount] = useState(1)

    function Resta(){
        if(count > 1){
            setCount(count -1)
        }
    }
    
    function Suma(){
        if(count < props.stock){
        setCount(count + 1)
        } else {
            alert("Alcanzaste el stock máximo.")
        }

    }

    return (
        <>
        <div>
            <button onClick = {Resta} className="count">-</button>
            <span>{count}</span>
            <button onClick = {Suma} className="count">+</button>
        </div>
        <div>
            <button onClick = { () => props.agregarCarrito(count)} className="agregar-carrito">Agregar al carrito</button>
        </div>
        
        </>
    )
}

export default ItemCount;