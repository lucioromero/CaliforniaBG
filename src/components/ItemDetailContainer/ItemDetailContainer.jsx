import React , { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import productsDatabase from "../../data/products";
import Flex from "../Flex/Flex";
import Product from "../Product/Product";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

function getSingleItem(id){
    const promesa = new Promise((resolve, reject) => {
        setTimeout( () => {
          const encontrado = productsDatabase.find(item => {
            return (item.id === parseInt(id))
          })
                resolve(encontrado)
            },)
    })

return promesa;

}

function ItemDetailContainer(){
    const [product, setProduct] = useState([])

    let {id} = useParams()
    useEffect(() => {
        getSingleItem(id).then((respuesta) => { 
          setProduct(respuesta);
        });
  
      }, []);
    
      return (
        <ItemDetail 
            titulo = {product.titulo}
            img = {product.img}
            descripcion = {product.descripcion}
            precio = {product.precio}
        />
      )
}

export default ItemDetailContainer;