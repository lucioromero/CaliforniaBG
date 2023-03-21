import "./App.css"
import Navbar  from "./components/Navbar/Navbar";
import Titulo from "./components/Titulo/Titulo";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Titulo titulo="¡Bienvenidos a California Burgers!"/>
      <header className="App-header">
        <div style = {{display: "flex"}} className="main">
            <ItemListContainer />
          </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
