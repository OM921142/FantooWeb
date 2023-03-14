import logo from "./logo.svg";
import "./App.css";
import Home from "./Screen/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Routing from "./Routing/Routing";

function App() {
  return (
    <div className="App">
      <header>
        {/* <Home /> */}
        <Routing />
      </header>
    </div>
  );
}

export default App;
