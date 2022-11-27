import Image from "next/image";
import s from "../styles/Home.module.css";
import typeClasses from "../styles/Types.module.css";

export default function Pokecard({ id, name, types, sprite }) {
  const typeClass = typeClasses[types[0]];
  return (
    <div className={`${s.card} ${typeClass}`}>
      <h1>{name}</h1>
      <h2>{id}</h2>
      {types.map((type) => (
        <span>
          {type}
          <br />
        </span>
      ))}
      <Image src={sprite} alt="Sprite of pokemon" width={200} height={200} />
    </div>
  );
}
