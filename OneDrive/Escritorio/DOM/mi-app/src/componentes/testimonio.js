import React from "react";
import "../css/style.css"




 export function Testimonio(props) {
    return (
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio" src={props.imagen} alt="foto emma watson" />
            
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio">{props.nombre}</p>
                <p className="cargo-testimonio">{props.cargo} en <b>{props.empresa}</b></p>
                <p className="texto-testimonio">{props.Testimonio}</p>
                
            </div>
        </div>
    );
}


