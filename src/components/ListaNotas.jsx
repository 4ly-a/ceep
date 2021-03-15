import React, { Component } from "react";
import CardNota from "./CardNota/CardNota";

import "./CardNota/StyleCardNota.css";

class ListaNotas extends Component {
  render() {
    return (
      <section className="card-container">
        <ul>
          {this.props.notas.map((nota, index) => {
            return (
              <li key={index}>
                <p> </p>
                <CardNota titulo={nota.titulo} texto={nota.texto} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ListaNotas;
