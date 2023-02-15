import Buton from "../buton/Buton";
import "./Card.css";

const Card = ({id, lang, img, btn}) => {
  return (
    <div>
      <h1>{lang}</h1>
      <img src={img} alt="" />
      <Buton bt={btn} />
    </div>
  );
};

export default Card;
