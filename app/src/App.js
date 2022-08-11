
import "./App.css"
import Header from './Client/components/header/header'
import Router from "./Routes/routes"

function App() {
  return (
    <div className="App">
      <header id="header" className="App-header">
       
        <Header/>
      </header>

      <section>
        {<Router/>}
      </section>

      <footer id="footer">

      <h1>FOOTER</h1>
      </footer>
    </div>
  );
}

export default App;
