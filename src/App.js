import { FiSearch } from 'react-icons/fi'

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
      </main>

    </div>

    
  );
}

export default App;
