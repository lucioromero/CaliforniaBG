import { useState, createContext } from "react";

const cartContext = createContext({})
const Provider = cartContext.Provider

function CartProvider(props){
    const [cart, setCart] = useState([])

    function agregarItem(product, count){
        const newCart = [...cart]
        newCart.push({...product, count})
        setCart(newCart)
    }

    function totalItems(){
        let total = 0
        cart.forEach((item) => {
            total += item.count;
            return total;
        })
    }   
    return (
        <Provider value = { { cart, agregarItem, totalItems } }>
            {props.children}
        </Provider>
    )
}

export { cartContext, CartProvider }