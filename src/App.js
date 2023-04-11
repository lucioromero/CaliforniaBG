import "./App.css"
import Navbar  from "./components/Navbar/Navbar";
import Titulo from "./components/Titulo/Titulo";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/cartContext";
import CartContainer from "./components/CartContainer/CartContainer";

function App() {
  return (
    
    <CartProvider>
    <BrowserRouter>
    <Navbar />
    <Titulo titulo = "CALIFORNIA"/>
    <div style = {{display: "flex"}} className="main">
      <Routes>
        <Route path = "/" element = { <ItemListContainer />} />
        <Route path = "/categoria/:categoriaid" element = { <ItemListContainer />} />
        <Route path = "/detalle/:id" element = { <ItemDetailContainer />} />
        <Route path = "/carrito" element = { <CartContainer /> } />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;


