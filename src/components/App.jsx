import "../styles/App.scss";
import Header from "./layaut/header";
import { useState, useEffect } from "react";
import CharacterList from "./listing/CharacterList";

/* const initialData = [
  {
    id: "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
    name: "Harry Potter",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    actor: "Daniel Radcliffe",
    image: "https://ik.imagekit.io/hpapi/harry.jpg",
  },
  {
    id: "4c7e6819-a91a-45b2-a454-f931e4a7cce3",
    name: "Hermione Granger",
    species: "human",
    gender: "female",
    house: "Gryffindor",
    actor: "Emma Watson",
    image: "https://ik.imagekit.io/hpapi/hermione.jpeg",
  },
]; */

function App() {
  // lista personajes.
  const [allCharacters, setAllCharacters] = useState([]);

  //Código que se lanza al cargar.
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
  return (
    <div>
      <Header />

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
            <select id="filterByHouse">
              <option value="Gryffindor">Gryffindor</option>
              <option value="Slytherin">Slytherin</option>
              <option value="Hufflepuff">Hufflepuff</option>
              <option value="Ravenclaw">Ravenclaw</option>
            </select>
          </div>

          {/* --------------------------- lista ---------------------------*/}
          <h2 className="list-title"> Lista personajes </h2>
          <CharacterList characters={allCharacters} />
          {/* ---------------------------  ---------------------------*/}
        </div>
      </main>
    </div>
  );
}

export default App;
