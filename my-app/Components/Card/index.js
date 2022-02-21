import Image from "next/image";
import cucumber from "../../public/images/cucumber.jpg";

function Card({
  date,
  description,
  email,
  full_name,
  phone_number,
  title,
  price,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{description}</p>
      <p>{email}</p>
      <p>{full_name}</p>
      <p>{location}</p>
      <p>{phone_number}</p>
      <p>{price}</p>
    </div>
  );
}

export default Card;
