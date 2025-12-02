import CharacterCard from "./CharacterCard"; // Importamos la tarjeta individual

// El nombre del componente principal debe ser ListCart
function CharacterList({ characters }) {
  if (characters.length === 0) {
    return "¡Mensaje del Departamento de Misterios!🔍 La Lista de Personajes de Hogwarts no se puede mostrar";
  }
  return (
    <ul className="list-card">
      {characters.map((eachCharacter) => (
        <li className="card" key={eachCharacter.id}>
          {/* Usamos el componente CartItem importado */}
          <CharacterCard eachCharacter={eachCharacter} />
        </li>
      ))}
    </ul>
  );
}

// Exportamos el componente con el nuevo nombre
export default CharacterList;
