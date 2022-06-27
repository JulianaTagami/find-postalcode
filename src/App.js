import api from './services/api.js';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';



function App() {

  const [ input, setInput] = useState ('');
  const [ cep, setCep] = useState ('');

  async function handleSearch(){
    
    if(input === ''){
      alert("Preencha o CEP")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("");

    }catch{
      alert("CEP Inválido");
      setInput("")
    }


  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu cep..."
        value={input}
        onChange={(evento) => setInput(evento.target.value)} 
        maxLength="8"
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
    
      </div>

      {Object.keys(cep).length > 0 && (
        <main className='main'>
          <h2>CEP: {cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}

    </div>

    
  );
}

export default App;
