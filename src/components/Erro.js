import React from 'react';

function Erro(){

    const textTop = <p>Erro na consulta</p>
    const mensagemErro = <p><h2>Servidor indisponivel</h2></p> 
    const button = <button>NOVA CONSULTA</button>

    return(
        <>
            <div className="App-header">
                {textTop}
                {mensagemErro}
                {button}
            </div>
        </>
    );
}

export default Erro