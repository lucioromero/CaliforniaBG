import "./Navbar.css"
import Carrito from "../Carrito/Carrito"

function Navbar(){
    return (
        <nav className="navbar">
            <img src="/images/logo.png" alt="logo" className="logo"/>
                <ul  className="navbar-items">
                    <a href="" className="boton"><li>Hamburguesas</li></a>
                    <a href="" className="boton"><li>Bebidas</li></a>
                    <a href="" className="boton"><li>Extras</li></a>
                    <a href="" className="boton"><Carrito /></a>
                </ul>
        </nav>
    )
}

export default Navbar;