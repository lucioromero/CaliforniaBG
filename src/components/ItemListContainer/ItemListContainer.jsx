import React , { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getItems, getCategoria } from "../../services/db";

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

    }, [categoriaid]);

    return (
        <ItemList products = {products} /> 
    )
}

export default ItemListContainer;



