import "./App.css";
import Header from "./Client/components/header/header";
import Router from "./Routes/routes";
import { CartProvider } from "./context/CartContext";
import { useEffect, useState } from "react";
import Loading from "./Client/components/loading/loading";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{setLoading(false)}, 3000);
  }, []);
  return (
    <>
      <CartProvider>
        {loading ? (
          <Loading />
        ) : (
          <div className="App">
            <header id="header" className="App-header">
              <Header />
            </header>

            <section>{<Router />}</section>

            <footer id="footer">
              <h1>FOOTER</h1>
            </footer>
          </div>
        )}
      </CartProvider>
    </>
  );
}

export default App;
