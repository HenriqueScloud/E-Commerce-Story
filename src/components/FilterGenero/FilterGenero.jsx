import "./index.scss";

function FiltroGenero() {
  function selectedFiltroGenre() {
    const li = document.querySelectorAll(".filtro__genre-btn");
    li.forEach((item) => {
      item.addEventListener("click", (event) => {
        li.forEach((item) => {
          item.classList.remove("filtro__genre-btn--ativo");
        });
        const btn = event.target;
        btn.classList.add("filtro__genre-btn--ativo");
      });
    });
  }

  return (
    <section className="filtro__genre-section">
      <ul className="filtros__genres">
        <button className="filtro__genre-btn filtro__genre-btn--ativo" onClick={()=> selectedFiltroGenre()}>Todos</button>
        <button className="filtro__genre-btn">Pop</button>
        <button className="filtro__genre-btn">MPB</button>
        <button className="filtro__genre-btn">Forró</button>
        <button className="filtro__genre-btn">Samba</button>
        <button className="filtro__genre-btn">Baião</button>
        <button className="filtro__genre-btn">Rap</button>
        <button className="filtro__genre-btn">Jazz</button>
        <button className="filtro__genre-btn">R&B</button>
        <button className="filtro__genre-btn">Rock</button>
        <button className="filtro__genre-btn">Reggae</button>
        <button className="filtro__genre-btn">Eletrônica</button>
        {/* <button className="filtro__genre-btn">Hip-Hop</button> */}
      </ul>
    </section>
  );
}

export default FiltroGenero;
  