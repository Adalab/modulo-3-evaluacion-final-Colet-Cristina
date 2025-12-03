import "../styles/App.scss";
import Header from "./layaut/header";
import { useState, useEffect } from "react";
import CharacterList from "./listing/CharacterList";

function App() {
  //            Lista personajes.
  const [allCharacters, setAllCharacters] = useState([]);

  //            Filtros.
  const [filterName, setfilterName] = useState("");

  const handleFilterName = (ev) => {
    setfilterName(ev.target.value);
  };

  //           Código que se lanza al cargar.
  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters/")
      .then((res) => res.json())
      .then((responseData) => {
        const allCleanCharacter = responseData.map((eachCharacter) => ({
          id: eachCharacter.id,
          image:
            eachCharacter.image ||
            "https://placehold.co/600x400?text=HarryPotter",
          name: eachCharacter.name,
          species: eachCharacter.species,
          gender: eachCharacter.gender,
          house: eachCharacter.house,
          actor: eachCharacter.actor,
        }));

        setAllCharacters(allCleanCharacter);
      })
      .catch((err) => console.error(err));
  });

  //        Variables para pintar la página.

  const filteredCharacters = allCharacters.filter((eachCharacter) =>
    eachCharacter.name
      .toLocaleLowerCase()
      .includes(filterName.toLocaleLowerCase())
  );

  return (
    <div>
      <Header />

      {/* -----------------------------main --------------------------------------*/}
      <main className="main">
        <div className="container">
          {/* --------------------------- Filtro personaje  ---------------------------*/}
          <form className="filter-group">
            <label htmlFor="filterByCharacter" className="label-character">
              Personaje
            </label>
            <input
              className="filter-input"
              type="text"
              id="filterByCharacter"
              placeholder="Harry"
              onInput={handleFilterName}
              value={filterName}
            />
          </form>

          {/* --------------------------- filtro casa ---------------------------*/}
          <div className="filter-house">
            <label htmlFor="filterByHouse" className="label-house">
              Casa
            </label>
            <select className="filter-select" id="filterByHouse">
              <option value="Gryffindor">Gryffindor</option>
              <option value="Slytherin">Slytherin</option>
              <option value="Hufflepuff">Hufflepuff</option>
              <option value="Ravenclaw">Ravenclaw</option>
            </select>
          </div>

          {/* --------------------------- lista ---------------------------*/}
          <h2 className="list-title"> Lista personajes </h2>
          <CharacterList characters={filteredCharacters} />
          {/* ---------------------------  ---------------------------*/}
        </div>
      </main>
    </div>
  );
}

export default App;
