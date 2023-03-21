import React, { useState } from "react";
import products from "../../data/products";
import "./ItemCount.css"


function ItemCount(){
    const [count, setCount] = useState(0)

    function Suma(){
        setCount(count + 1)
    }

    function Resta(){
        setCount(count -1)
    }

    return (
        <div>
            <button onClick={Resta} className="count">-</button>
            <span>{count}</span>
            <button onClick = {Suma} className="count">+</button>
        </div>
    )
}

export default ItemCount;