import Image from "next/image";
import cucumber from "../../public/images/cucumber.jpg";
import css from "../../styles/card.module.css";

const Card = ({ data }) => {
  return (
    <div className={css.card}>
      <div className={css.cardBody}>
        <Image src={cucumber} alt="cucumber"></Image>
        <h2 className={css.cardTitle}>{data.title}</h2>
        <p>{data.date}</p>
        <p className={css.cardDescription}>{data.description}</p>
        <p>{data.email}</p>
        <p>{data.full_name}</p>
        <p>{data.location}</p>
        <p>{data.phone_number}</p>
        <p>£{data.price}</p>
      </div>
    </div>
  );
};

export default Card;

//
