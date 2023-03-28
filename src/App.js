import "./App.css"
import Navbar  from "./components/Navbar/Navbar";
import Titulo from "./components/Titulo/Titulo";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Flex from "./components/Flex/Flex";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    
    <BrowserRouter>
    <Navbar />
    <Titulo titulo = "CALIFORNIA BURGERS"/>
    <div style = {{display: "flex"}} className="main">
      <Routes>
        <Route path = "/" element = { <ItemListContainer />} />
        <Route path = "/categoria/:categoriaid" element = { <ItemListContainer />} />
        <Route path = "/detalle/:id" element = { <ItemDetailContainer />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


