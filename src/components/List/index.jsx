import Card from "../Card";

function List({listFilter, listTransactions, setListTransactions}){

    return (
        <ul>
            {listTransactions.map((transaction, index) => (
            <Card transaction={transaction} 
            key={transaction.newDescription} 
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}/>
            ))}
        </ul>
    );
}

export default List;
