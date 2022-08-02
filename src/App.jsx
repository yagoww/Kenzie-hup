
import { useState } from 'react';
import './App.css';

import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

function App() {

  const [listTransactions, setListTransactions] = useState([])
  const [listFiltradas, setListFiltradas] = useState([]);
  const [homePage, setHomePage] = useState(true);

  function Filter(type){
    if (type === "todos") {
      return setListFiltradas(listTransactions);
    }
    const filtrados = listTransactions.filter((item) => {
      return item.newType === type;
    });
    return setListFiltradas(filtrados);
  }

const  Home = () => {
  setHomePage(!homePage);
};

return homePage ? 
(
  <div>
            <div>
            <h1><span>Nu</span> Kenzie</h1>
            <p>Centralize o controle das suas finanças</p>
            <label>de forma rápida e segura</label>
            <button  onClick={() => {
              Home();
            }}>Iniciar</button>
            </div>
            <div>
                {/* <img src="" alt="" /> */}
            </div>
        </div>
) : (
  <>
  <header>
    <img src="./public/logo_kenzie.png" alt="logo"  />
    <button className='btn-inicio' onClick={setHomePage}>Inicio</button>
  </header>
  <main>
    <aside>
      <Form
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
        listFiltradas={listFiltradas}
        setListFiltradas={setListFiltradas}
      />
      <TotalMoney listTransactions={listTransactions} />
    </aside>
    <section>
      <nav>
        <h2 className='title-resumo'>Resumo financeiro</h2>
        <div>
          <button className='btn-filter' onClick={() => Filter("todos")}>
            Todas
          </button>
          <button className='btn-filter'
            onClick={() => Filter("entrada")}
          >
            Entradas
          </button>
          <button className='btn-filter' onClick={() => Filter("saida")}>
            Despesas
          </button>
        </div>
      </nav>
      <List listFiltradas={listFiltradas} />
    </section>
  </main>
</>
);
}

export default App;
