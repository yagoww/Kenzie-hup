import './style.css';

function Card({ transaction, index }) {
    return transaction.newType === "entrada" ? (
      <li key={index}>
        <div>
          <h2>{transaction.newDescription}</h2>
          <h4>{transaction.newType}</h4>
        </div>
        <h3 className="valor">R$ {transaction.newValue},00</h3>
        <button>X</button>
      </li>
    ) : (
      <li key={index}>
        {" "}
        <div>
          <h2>{transaction.newDescription}</h2>
          <h4>{transaction.newType}</h4>
        </div>
        <h3>R$ {transaction.newValue},00</h3>
        <button>X</button>
      </li>
    );
  }
  
  export default Card;