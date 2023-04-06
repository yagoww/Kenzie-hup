import "./reset.css";
import "./App.css";

import logo from "./assets/logoKenzie.png";
import fundo from "./assets/image.png";

import { useState } from "react";

import Form from "./components/Form";
import Nav from "./components/Nav";
// import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import Card from "./components/Card";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [listFilter, setlistFilter] = useState([]);
  const [list, setList] = useState("Todos");
  const [homePage, setHomePage] = useState(true);

  const Home = () => {
    setHomePage(!homePage);
  };

  return homePage ? (
    <div className="HomePage">
      <div className="div-center">
        <h1 className="logo-kenzie">
          <span className="logo-nu">Nu</span> Kenzie
        </h1>
        <p className="title-login">Centralize o controle das suas finanças</p>
        <label className="title-login-label">de forma rápida e segura</label>
        <button
          className="submit"
          onClick={() => {
            Home();
          }}
        >
          Iniciar
        </button>
      </div>
      <div>
        <img className="fundo" src={fundo} alt="fundo" />
      </div>
    </div>
  ) : (
    <section className="logado">
      <header>
        <img className="logo" src={logo} alt="logoK" />
        <button className="btn-inicio" onClick={setHomePage}>
          Sair
        </button>
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
        <section className="ctn-resumo">
          <Nav
            setList={setList}
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <ul>
            {listTransactions.length === 0 ? (
              <h3>Você não tem registro.</h3>
            ) : list === "Todos" ? (
              listTransactions.map((transaction, index) => (
                <Card
                  key={index}
                  transaction={transaction}
                  setListTransactions={setListTransactions}
                  listTransactions={listTransactions}
                />
              ))
            ) : list === "Entrada" ? (
              listTransactions
                .filter((transaction) => transaction.newType === "entrada")
                .map((transaction, index) => (
                  <Card
                    key={index}
                    transaction={transaction}
                    setListTransactions={setListTransactions}
                    listTransactions={listTransactions}
                  />
                ))
            ) : (
              listTransactions
                .filter((list) => list.newType === "saida")
                .map((transaction, index) => (
                  <Card
                    key={index}
                    transaction={transaction}
                    setListTransactions={setListTransactions}
                    listTransactions={listTransactions}
                  />
                ))
            )}
          </ul>
        </section>
      </main>
    </section>
  );
}

export default App;
