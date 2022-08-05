import './style.css';

import {AiFillDelete} from 'react-icons/ai'


function Card({ listTransactions, setListTransactions, transaction, index}) {
  
  function delet(){
    const listaDelet = listTransactions.filter(item => item !== transaction);
    setListTransactions(listaDelet);
}


    return (
      <li className={transaction.newType === "entrada" ? "list" : "list-s"} key={index}>
        <div className='ctn-car'>
          <h2 className='class-description'>{transaction.newDescription}</h2>
          <h4 className='class-type'>{transaction.newType}</h4>
        </div>
        <h3 className="valor">R$ {transaction.newValue},00</h3>
        <button onClick={() => delet()}>
        <AiFillDelete/>
        </button>
      </li>
    
    );
  }
  
  export default Card;