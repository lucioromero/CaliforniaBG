import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function ItemCart(props) {
  const context = useContext(cartContext);
  const { cart, eliminarItem, precioTotal } = context;

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <h1 className="carrito-titulo">Carrito</h1>
          {cart.map((item) => (
            <div className="item-carrito">
              <div className="item">
                <h4>{item.titulo}</h4>
              </div>
              <div className="item">
                <p>Subtotal: ${item.precio}</p>
              </div>
              <div className="item">
                <p>Cantidad: {item.count}</p>
              </div>
              <div className="item" onClick={() => eliminarItem(item.titulo)}>
                <img
                  src="../images/remove.png"
                  alt="remove"
                  className="remove"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemCart;
