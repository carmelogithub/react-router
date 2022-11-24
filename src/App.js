import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cabecera from "./Componentes/Cabecera";
import Menu from "./Componentes/Menu";
import Ciudad from "./Componentes/Ciudad"

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Cabecera/>
        <Menu/>
        <Switch>
          
          <Route path="/saludo">
            hola qué tal
          </Route>
          <Route path="/adios">
            Hasta luego
          </Route>
          <Route path="/:ciudad">
            <Ciudad/>
          </Route>
          <Route path="/">
            Inicio de aplicación
          </Route>
        </Switch>

      </Router>
     <a href="/adios">Salir</a>
    </div>
  );
}

export default App;
