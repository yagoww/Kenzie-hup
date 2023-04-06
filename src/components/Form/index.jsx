import "./style.css";

import { useState } from "react";

function Form({
  listTransactions,
  setListTransactions,
  listFilter,
  setlistFilter,
}) {
  const [newDescription, setNewDescription] = useState("");
  const [newValue, setNewValue] = useState(0);
  const [newType, setnewType] = useState("entrada");

  function handleForm(event) {
    event.preventDefault();
    const handle = {
      newValue: Number(newValue),
      newDescription,
      newType,
    };

    if (handle.newDescription === "") {
      alert("Insira uma descrição.");
    } else if (handle.newValue === 0) {
      alert("Insira um valor.");
    } else {
      setListTransactions([handle, ...listTransactions]);
      setlistFilter([handle, ...listFilter]);
    }
  }

  return (
    <form className="s-form">
      <h3 className="title">Descrição</h3>
      <input
        className="input-description"
        placeholder="Digite aqui sua descrição"
        type="text"
        value={newDescription}
        onChange={(event) => setNewDescription(event.target.value)}
      />
      <h4 className="title-ex">Ex: Compra de roupas</h4>

      <div className="ctn-valor-tipo">
        <div>
          <h3 className="title-value">Valor</h3>
          <input
            className="input-value"
            type="number"
            value={newValue}
            onChange={(event) => setNewValue(event.target.value)}
          />
        </div>

        <div>
          <h3 className="title-value">Tipo de valor</h3>
          <select onChange={(event) => setnewType(event.target.value)}>
            <option className="title-op" value="entrada">
              Entrada
            </option>
            <option className="title-op" value="saida">
              Despesa
            </option>
          </select>
        </div>
      </div>
      <button className="btn-insere" type="submit" onClick={handleForm}>
        Inserir valor
      </button>
    </form>
  );
}

export default Form;
