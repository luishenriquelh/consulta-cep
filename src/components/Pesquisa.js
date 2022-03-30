import { useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import api from '../services/api';
import '../style.css';

function Pesquisa(){

    const [input, setInput] = useState('');
    const [cep, setCep] = useState({});

    const [showMessage, setShowMessage] = useState(false)

 
    const textTop = "Buscador CEP"    
    const inputCep = <input/>
    const button = <button>CONSULTAR</button>

    async function handleSeach(){
        if(input === ""){
            alert("preencha algum CEP");
            setInput('');
            return;
        }

        try {
          const response = await api.get(`${input}/json`);
          setCep(response.data);
          setInput('');
          
            if (Object.keys(response.data).length === 1) {
                alert("Verifique o campo preenchido e tente novamente!");
                setInput('');
                return;

            } 
          
        }catch{
            alert("Erro ao buscar CEP");
            setInput('');
            return;
        }

    }

    return(
        <>
            <div className="container">
                <h1 className="title">{textTop}</h1> 
                <div className="containerInput">
                    <input 
                        type="text"
                        placeholder="Digite seu CEP"
                        value={input}
                        onChange={(e)=> setInput(e.target.value)}
                    />
                    <button className="buttonSearch" onClick={handleSeach}>
                        <FiSearch size={25} color="#FFF" />
                    </button>
                </div>

                {Object.keys(cep).length > 1 && (
                    <main className="main">
                        <h2>CEP: {cep.cep}</h2>
                        <span>Rua: {cep.logradouro}</span>
                        <span>Complemento: {cep.complemento}</span>
                        <span>Bairro: {cep.bairro}</span>
                        <span>Cidade: {cep.localidade}</span>
                        <span>Estado: {cep.uf}</span>
                    </main>
                )} 

            </div>
        </>
    );
}

export default Pesquisa