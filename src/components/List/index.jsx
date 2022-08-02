import Card from "../Card";

function List({listFiltradas}){

    

    return (
        <ul>
            {listFiltradas.map((transaction, index) => (
            <Card transaction={transaction} key={transaction.newDescription} />
            ))}
        </ul>
    );
}

export default List;