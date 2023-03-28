import React , { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import productsDatabase from "../../data/products";
import Flex from "../Flex/Flex";
import { useParams } from "react-router-dom";


function getItems() {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsDatabase);
      },);
    });
  
    return promesa;
  }
  
  function getCategoria(categoriaid) {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        const cat = productsDatabase.filter(producto => producto.categoria === categoriaid)
        resolve(cat);
      },);
    });
  
    return promesa;
  }

  function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const {categoriaid} = useParams()
  
    useEffect(() => {
      if(categoriaid === undefined){
        getItems().then((respuesta) => { 
          setProducts(respuesta);
        });
      }
      else{
        getCategoria(categoriaid).then((respuesta) => 
          setProducts(respuesta)
        )
      }

    }, []);

    return (
        <ItemList products = {products} /> 
    )
}

export default ItemListContainer;



