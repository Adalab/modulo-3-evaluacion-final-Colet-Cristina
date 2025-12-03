import { useParams, Link } from "react-router";

//aray completo
function CharacterDetails({ findCharacter }) {
  const params = useParams();
  const idCharacter = params.id;

  const characterFound = findCharacter(idCharacter);
  if (characterFound === undefined) {
    return (
      <article>
        <h2>Personaje no encontrado</h2>
        <Link to="/">Volver al listado</Link>
      </article>
    );
  }
  return (
    <article className="detailPage">
      <img
        className="character__photo"
        src={characterFound.image} // ⬅️ Usamos las propiedades del personaje
        alt={"Foto de " + characterFound.name}
      />
      <section>
        <h2>{characterFound.name}</h2>
        <dl>
          <dt>Especie:</dt>
          <dd>{characterFound.species}</dd>
          <dt>Casa:</dt>
          <dd>{characterFound.house}</dd>
          <dt>Actor:</dt>
          <dd>{characterFound.actor}</dd>
          <dt>Género:</dt>
          <dd>{characterFound.gender}</dd>
        </dl>
        <Link to="/">Volver al listado</Link>
      </section>
    </article>
  );
}

export default CharacterDetails;
