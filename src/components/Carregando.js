import React from "react";

function Carregando(){
    const textTop = <p>Carregando resultados...</p>
    const button = <button>CANCELAR</button>

    return(
        <>
            <div className="App-header">
                {textTop}
                {button}
            </div>
        </>
    );
}

export default Carregando