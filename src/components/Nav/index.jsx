import "./style.css";

function Nav({ setList }) {
  return (
    <nav>
      <h2 className="title-resumo">Resumo financeiro</h2>
      <div className="div-filter">
        <button
          className="btn-filter"
          onClick={() => {
            setList("Todos");
          }}
        >
          Todas
        </button>
        <button
          className="btn-filter"
          onClick={() => {
            setList("Entrada");
          }}
        >
          Entradas
        </button>
        <button
          className="btn-filter"
          onClick={() => {
            setList("Despesa");
          }}
        >
          Despesas
        </button>
      </div>
    </nav>
  );
}
export default Nav;
