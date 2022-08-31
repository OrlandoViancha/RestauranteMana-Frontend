import "./App.css";
import Header from "./Client/components/header/header";
import Router from "./Routes/routes";
import {CartProvider} from "./context/CartContext"
function App() {
  return (
    <CartProvider>
      <div className="App">
        <header id="header" className="App-header">
          <Header />
        </header>

        <section>{<Router />}</section>

        <footer id="footer">
          <h1>FOOTER</h1>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;
