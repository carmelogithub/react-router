import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

const CIUDADES=['madrid','sevilla','valencia'];
function Menu(){
    return(
        <div>
            <a href="/saludo">Saludar</a>
            <hr/>
            <a href="/adios">Adios</a>
            <hr/>
            
            <a href="/">Inicio</a>
            {CIUDADES.map((ciudad) => (
                <div>
                    <hr/>
                <Link to={ciudad}>{ciudad}</Link>
                </div>
            ))}

        </div>
       

    );
}
export default Menu;