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
    <>
      <Link to="/" className="details-link">
        Volver a Hogwarts
      </Link>
      <article className="detail-page">
        <img
          className="detail-img"
          src={characterFound.image}
          alt={"Foto de " + characterFound.name}
        />
        <section className="detail-list">
          <h2>{characterFound.name}</h2>
          <dl>
            <dt>Especie:</dt>
            <dd>{characterFound.species}</dd>
            <dt>Casa:</dt>
            <dd>{characterFound.house}</dd>
            <dt>Género:</dt>
            <dd>{characterFound.gender}</dd>
            <dt>Actor:</dt>
            <dd>{characterFound.actor}</dd>
          </dl>
        </section>
      </article>
    </>
  );
}

export default CharacterDetails;
