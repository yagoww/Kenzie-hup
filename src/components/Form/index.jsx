import './style.css';

import { useState } from "react";

function Form ({listTransactions, setListTransactions,listFiltradas,setListFiltradas}){
    
    const [newValue, setNewValue] = useState(0);
    const [newDescription, setNewDescription] = useState("");
    const [newType, setnewType] = useState("entraga");

    function handleForm(){
        const transation = {
            newValue: Number(newValue),
            newDescription, 
            newType
        };

        if(newDescription !== "" && newDescription !== " " && newValue !==0){
            setListTransactions([transation, ...listTransactions]);
            setListFiltradas([transation, ...listFiltradas]);
        } else {
            alert("Insira uma descrição ou valor.")
        }
    }

    return (
        <form className='s-form'>
            <h3 className="title">Descrição</h3>
            <input className="input-description"
                placeholder="Digite aqui sua descrição"
                
                type="text"
                value={newDescription}
                onChange={(event) => setNewDescription(event.target.value)}
            />
            <h4 className="title-ex">Ex: compra de roupa</h4>

            <div className="ctn-valor-tipo">
                <div>
                    <h3 className="title-value">Valor</h3>
                    <input className="input-value" type="number"
                    
                    value={newValue}
                    onChange={(event) => setNewValue(event.target.value)}
                    />
                </div>

                <div>
                    <h3 className="title-value">Tipo de valor</h3>
                    <select
                        onChange={(event) => setnewType(event.target.value)}
                        >
                        <option className="title-op" value="entrada">Entrada</option>
                        <option className="title-op" value="saida">Saída</option>
                    </select>
                </div>
            </div>
            <button className="btn-insere" onClick={() => handleForm()}>Inserir valor</button>
        </form>
    )

}

export default Form;