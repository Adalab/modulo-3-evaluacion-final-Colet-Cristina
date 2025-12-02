import "../styles/App.scss";
import Header from "./layaut/header";

function App() {
  return (
    <div>
      <Header />
      {/* -----------------------------main --------------------------------------*/}
      {/* -----------------------------main --------------------------------------*/}
      <main className="main">
        <div className="container">
          {/* --------------------------- Filtro personaje  ---------------------------*/}
          <form className="filter-group">
            <label htmlFor="filterByCharacter">Personaje</label>
            <input
              className="filter-input"
              type="text"
              id="filterByCharacter"
              placeholder="Harry"
            />
          </form>

          {/* --------------------------- filtro casa ---------------------------*/}
          <div className="filter-house">
            <label className="label-select" htmlFor="filterByHouse">
              Casa
            </label>
            <select id="filterByContinent">
              <option value="Gryffindor">Gryffindor</option>
              <option value="Slytherin">Slytherin</option>
              <option value="Hufflepuff">Hufflepuff</option>
              <option value="Ravenclaw">Ravenclaw</option>
            </select>
          </div>

          {/* --------------------------- lista ---------------------------*/}
          <h2 className="list-title"> Lista personajes </h2>
          <ul className="list-card">
            <li className="card"></li>
            <li className="card"></li>
          </ul>
        </div>
        {/* ---------------------------  ---------------------------*/}
      </main>
    </div>
  );
}

export default App;
