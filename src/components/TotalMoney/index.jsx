import './style.css';

function TotalMoney({ listTransactions }) {
    const lista = listTransactions.reduce(
      (previous, current) =>
        current.newType === "entrada"
          ? previous + current.newValue
          : previous - current.newValue,
  
      0
    );
  
    return (
      <div className='ctn'>
        <div className='ctn-value'>
          <h3>Valor total:</h3>
          <h3>$ {lista},00</h3>
        </div>
        <p>O valor se refere ao saldo</p>
      </div>
    );
  }
  
  export default TotalMoney;