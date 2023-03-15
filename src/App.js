import logo from "./logo.svg";
import "./App.css";
import Home from "./Screen/Home";
import WishList from "./Screen/WishList/WishList";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Routing from "./Routing/Routing";
import EventDetails from "./Screen/EventDetails/EventDetails";
//import { GlobalContext } from "./context/GlobalContext";

function App() {
  return (
    <div className="App">
      {/* <header> */}
        {/* <EventDetails /> */}
        <Routing />
      {/* </header> */}
    </div>
  );
}

export default App;
