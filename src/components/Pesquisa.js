import { useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import api from '../services/api';
import '../style.css';
import Notificacao from './Notificacao';
import ResultadoCep from './ResultadoCep';

function Pesquisa(){

    const [input, setInput] = useState('');
    const [cep, setCep] = useState({});

    const [showMensagem, setShowMensagem] = useState('');

 
    const textTop = "Qual o seu CEP?"

    async function handleSeach(){
        if(input === ""){
            setShowMensagem(<Notificacao texto="Por favor preencha com CEP" type="error" />)
            setInput('');
            return;
        }

        try {
          const response = await api.get(`${input}/json`);
          setCep(response.data);
          setInput('');
          setShowMensagem('');
          
            if (Object.keys(response.data).length === 1) {
                setShowMensagem(<Notificacao texto="Não foi encontrado o CEP" type="error" />)
                setInput('');
                return;

            } 
          
        }catch{
            setShowMensagem(<Notificacao texto="Erro ao buscar CEP" type="error" />)
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
                {showMensagem}
                {Object.keys(cep).length > 1 && (
                    <ResultadoCep data={cep}/>
                )}
            </div>
        </>
    );
}

export default Pesquisa