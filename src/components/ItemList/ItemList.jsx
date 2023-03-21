import React from "react";
import Product from "../Product/Product";


function ItemList(props){
    const {products} = props;

    return (
        products.map((product) => 
        <Product 
            key = {product.id}
            titulo = {product.titulo}
            img = {product.img}
            descripcion = {product.descripcion}
            precio = {product.precio}
        />
        )
    )
}

export default ItemList;
