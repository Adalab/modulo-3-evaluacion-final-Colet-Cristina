import { Link } from "react-router";
function CharacterCard({ eachCharacter }) {
  return (
    <Link to={`/details/${eachCharacter.id}`}>
      <img
        className="card_img"
        src={eachCharacter.image}
        alt={"Foto de" + eachCharacter.name}
        title={"Foto de" + eachCharacter.name}
      />
      <h3>{eachCharacter.name}</h3>
      <p>{eachCharacter.species}</p>
      <p>{eachCharacter.gender}</p>
      <p>{eachCharacter.house}</p>
      <p>{eachCharacter.actor}</p>
    </Link>
  );
}

export default CharacterCard;
