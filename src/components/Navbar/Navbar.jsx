import "./Navbar.css"
import Carrito from "../Carrito/Carrito"
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar">
            <Link to="/"><img src="/images/logo.png" alt="logo" className="logo"/></Link>
                <ul className="navbar-items">
                <Link to="/categoria/burger" className="boton"><li>Hamburguesas</li></Link>
                <Link to="/categoria/bebida" className="boton"><li>Bebidas</li></Link>
                <Link to="/categoria/extra" className="boton"><li>Extras</li></Link>
                <Link to="/carrito" className="boton"><Carrito /></Link>
                </ul>
        </nav>
    )
}

export default Navbar;