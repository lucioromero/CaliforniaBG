import React , { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import productsDatabase from "../../data/products";

function getItems() {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsDatabase);
      },);
    });
  
    return promesa;
  }
  
  function ItemListContainer() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      getItems().then((respuesta) => { 
        setProducts(respuesta);
      });

    }, []);

    return (
        <ItemList products = {products} /> 
    )
}

export default ItemListContainer;



