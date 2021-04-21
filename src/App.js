import "./index.css";
import Header from "./Components/Header/Header.component";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Routers from "./Routers"
import {DataProvider} from './Context/DataProvider'
function App(){
  return(
    <DataProvider>
    <div className="App">
    <Router>
      <Header> </Header>
      <div className="container">
      <Routers></Routers>
      </div>
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
