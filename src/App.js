import "./App.css"
import Navbar  from "./components/Navbar/Navbar";
import Titulo from "./components/Titulo/Titulo";
import Product from "./components/Product/Product";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Titulo titulo="¡Bienvenidos a California Burgers!"/>
      <header className="App-header">
        <div style = {{display: "flex"}}>
            <Product 
              titulo="Cheeseburger"
              precio="$1100"
              description="Medallon de 100grs. con cheddar"
            />
            <Product 
              titulo="Clásica"
              precio="$1250"
              description="Medallon de 100grs. con lechuga y tomate"
            />
            <Product 
              titulo="Cheesebacon"
              precio="$1500"
              description="Medallon de 100grs. con cheddar y bacon'"
            />
            <Product 
              titulo="Special Cali"
              precio="$1700"
              description="Medallon de 100grs. con cheddar, bacon y salsa especial 'Cali'"
            />
          </div>
      </header>
    </div>
  );
}

export default App;
