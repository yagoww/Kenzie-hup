import './style.css';

function TotalMoney({ listTransactions}) {
  
  function Real(number){
    return number.toLocaleString('pt-br', {style: 'currency', currency: "BRL"});
}

    const Total = listTransactions.reduce(

      (previous, current) =>
        current.newType === "saida"
          ? previous - current.newValue
          : previous + current.newValue,
  
      0
    );
  
    return (
      <>
        <div className='ctn'>
          <div className='ctn-value'>
            <h3>Valor total:</h3>
            <h3>{Real(Total)}</h3>
          </div>
          <p>O valor se refere ao saldo</p>
        </div>
      </>
    );
  }
  
  export default TotalMoney;