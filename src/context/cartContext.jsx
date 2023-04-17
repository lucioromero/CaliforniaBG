import { useState, createContext } from "react";

const cartContext = createContext({})
const Provider = cartContext.Provider

function CartProvider(props){
    const [cart, setCart] = useState([])
    const newCart = [...cart]
    
    function agregarItem(product, count){
        if(itemAgregado(product.titulo)){
            const i = cart.findIndex((itemAgregado) => itemAgregado.titulo === product.titulo)
            newCart[i].count += count
        }else{
            newCart.push({...product, count})
        }
        setCart(newCart)
    }
    
    function itemAgregado(titulo){
        return cart.some((itemAgregado) => itemAgregado.titulo === titulo)
    }

    function eliminarItem(titulo){
        setCart(cart.filter(item => item.titulo !== titulo))
    }

    function vaciarCarrito(){
        (cart.splice(0, cart.length))
    }

    function totalItems(){
        let total = 0
        cart.forEach((item) => {
            total += item.count
        })
        
        return total
    }   

    function precioTotal(){
        let precioTotal = 0
        cart.forEach((item) => {
            precioTotal += item.count * item.precio
        })

        return precioTotal
    }

    return (
        <Provider value = { { cart, agregarItem, precioTotal, totalItems, eliminarItem, vaciarCarrito } }>
            {props.children}
        </Provider>
    )
}

export { cartContext, CartProvider }