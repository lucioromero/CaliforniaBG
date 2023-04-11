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
        })
        
        return total;
    }   

    function precioTotal(){
        let precioTotal = 0
        cart.forEach((item) => {
            precioTotal += item.count * item.precio
        })

        return precioTotal
    }

    return (
        <Provider value = { { cart, agregarItem, precioTotal, totalItems } }>
            {props.children}
        </Provider>
    )
}

export { cartContext, CartProvider }