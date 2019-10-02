import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  // ENTRADA, RODANDO, FIM
  const [estado, setEstado] = useState("ENTRADA");

  // Palpite
  const [palpite, setPalpite] = useState(150);
  const [numPalpite, setNumPalpite] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpite(1);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Començar Jogo</button>;
  }

  const menor = () => {
    setNumPalpite(numPalpite + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpite(numPalpite + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    let state = setEstado("FIM");
    validateState(state)
  };

  const validateState = state => {

      if (state === "FIM") {
        return (
          <div>
            <p>
              Acertei o número {palpite} com {numPalpite} chutes.
            </p>
            <button onClick={iniciarJogo}>Iniciar novamente</button>
          </div>
        );
      }
  }


  return (
    <div className="App">
      <p>O seu número de {palpite}?</p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
