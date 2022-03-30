import React from 'react';

function Resultados(){
    const textTop = <p>Resultado para O CEP 72.236-220</p>
    const resultadoCep = <>
        <span><b>QUADRA:</b> QNP 32</span>
        <span><b>CONJUNTO:</b> T</span>
        <span><b>CASA:</b> 35</span>
        <span><b>CIDADE:</b> BRASILIA</span>
        <span><b>ESTADO:</b> DF</span>
    </>
    const button = <button>NOVA CONSULTA</button>

    return(
        <>
            <div className="App-header">
                {textTop}
                {resultadoCep}
                {button}
            </div>
        </>
    );
}

export default Resultados