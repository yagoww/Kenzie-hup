
import './reset.css';
import './App.css';

import logo from "../src/logoKenzie.png"
import fundo from "./Home/assets/image.png"

import { useState } from 'react';

import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

function App() {

  const [listTransactions, setListTransactions] = useState([])
  const [listFilter, setlistFilter] = useState([]);
  const [homePage, setHomePage] = useState(true);

  function Filter(type){
    if (type === "todos") {
      return setlistFilter(listTransactions);
    }
    const filtrados = listTransactions.filter((item) => {
      return item.newType === type;
    });
    return setlistFilter(filtrados);
  }

const  Home = () => {
  setHomePage(!homePage);
};

return homePage ? 
(
  <div className='HomePage'>
      <div className='div-center'>
        <h1 className='logo-kenzie'><span className='logo-nu'>Nu</span> Kenzie</h1>
          <p className='title-login'>Centralize o controle das suas finanças</p>
          <label className='title-login-label'>de forma rápida e segura</label>
          <button className='submit' onClick={() => {
              Home();
            }}>Iniciar</button>
      </div>
        <div>
          <img  className='fundo' src={fundo} alt="fundo" />
          </div>
  </div>
) : (
  <section className='logado'>
  <header>
  <img className='logo' src={logo} alt="logoK" />
    <button className='btn-inicio' onClick={setHomePage}>Inicio</button>
  </header>
  <main>
    <aside>
      <Form
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
        listFilter={listFilter}
        setlistFilter={setlistFilter}
      />
      <TotalMoney listTransactions={listTransactions} />
    </aside>
    <section className='ctn-resumo'>
      <nav>
        <h2 className='title-resumo'>Resumo financeiro</h2>
        <div className='div-filter'>
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
      <List listFilter={listFilter} listTransactions={listTransactions}
        setListTransactions={setListTransactions}/>
    </section>
  </main>
</section>
);
}

export default App;
