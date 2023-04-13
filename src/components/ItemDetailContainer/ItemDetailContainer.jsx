import React , { useState, useEffect } from "react";
import productsDatabase from "../../data/products";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getSingleItem } from "../../services/db";


function ItemDetailContainer(){
    const [product, setProduct] = useState([])

    let {id} = useParams()

    useEffect(() => {
        getSingleItem(id).then((respuesta) => { 
          setProduct(respuesta);
        });
  
      }, []);

      return (
        <div>
          <ItemDetail 
            titulo = {product.titulo}
            img = {product.img}
            descripcion = {product.descripcion}
            precio = {product.precio}
            stock = {product.stock}
            />
        </div>        
      )

}

export default ItemDetailContainer;