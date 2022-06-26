import { FiSearch } from 'react-icons/fi'
import './style.css'

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu cep..."
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF"/>
        </button>
    
      </div>

      <main className='main'>
        <h2>CEP:01885-039</h2>

        <span>Rua</span>
        <span>Complemento:</span>
        <span>Vila Rosa</span>
        <span>Campo Grande - MS</span>
      </main>

    </div>

    
  );
}

export default App;
