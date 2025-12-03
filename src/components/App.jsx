// Estilos
import "../styles/App.scss";

// Hooks de React
import { useState, useEffect } from "react";

// Componentes
/* import { Route, Routes } from "react-router"; */
import Header from "./layaut/header";
import CharacterList from "./listing/CharacterList";
import PlaceholderImage from "/public/placeholder.png";
/* import CharacterDetails from "./pages/CharacterDetails"; */
import FilterName from "./filters/FilterName";
import FilterHouse from "./filters/FilterHouse";

function App() {
  // Lista personajes.
  const [allCharacters, setAllCharacters] = useState([]);

  // Filtros.
  const [filterName, setfilterName] = useState("");
  const handleFilterName = (ev) => {
    setfilterName(ev.target.value);
  };
  const [filterHouse, setFilterHouse] = useState("");
  const handleFilterHouse = (ev) => {
    setFilterHouse(ev.target.value);
  };

  //Código que se lanza al cargar.
  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters/")
      .then((res) => res.json())
      .then((responseData) => {
        const allCleanCharacter = responseData.map((eachCharacter) => ({
          id: eachCharacter.id,
          image: eachCharacter.image || PlaceholderImage,
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

  //Variables para pintar la página.

  const filteredCharacters = allCharacters
    .filter((eachCharacter) =>
      (eachCharacter.name || "")
        .toLocaleLowerCase()
        .includes(filterName.toLocaleLowerCase())
    )
    .filter((eachCharacter) =>
      (eachCharacter.House || "")
        .toLocaleLowerCase()
        .includes(filterHouse.toLocaleLowerCase())
    );

  return (
    <div>
      <Header />

      {/* -----------------------------main --------------------------------------*/}
      <main className="main">
        {/*  <Routes>
          <Route path="/details" element={<CharacterDetails />} />
        </Routes> */}
        <div className="container">
          {/* --------------------------- Filtro personaje  ---------------------------*/}
          <FilterName
            handleFilterName={handleFilterName}
            filterName={filterName}
          />
          {/* --------------------------- filtro casa ---------------------------*/}
          <FilterHouse
            handleFilterHouse={handleFilterHouse}
            filterHouse={filterHouse}
          />
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
