import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  if (characters.length === 0) {
    return "¡Mensaje del Departamento de Misterios!🔍 Busqué ese nombre en el Mapa del Merodeador, pero ni rastro. Puede que hiciera un Evanesco tan potente que desapareció hasta de la lista de invitad@s.";
  }
  return (
    <ul className="list-card">
      {characters.map((eachCharacter) => (
        <li className="card" key={eachCharacter.id}>
          <CharacterCard eachCharacter={eachCharacter} />
        </li>
      ))}
    </ul>
  );
}

export default CharacterList;
