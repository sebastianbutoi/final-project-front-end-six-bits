import { useEffect, useState } from "react";
import Card from "../Components/Card";

const URL = process.env.NEXT_PUBLIC_API_URL;

function Browse() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(``);
      const data = await response.json();
      setCardData(data.payload);
      console.log(data.payload[0]);
    }
    getData();
  }, []);

  return (
    <div>
      {cardData.length === 0 ? (
        <div></div>
      ) : (
        cardData.map(function (data, index) {
          return (
            <Card
              key={index}
              title={data.title}
              date={data.date}
              description={data.description}
              email={data.email}
              full_name={data.full_name}
              phone_number={data.phone_number}
            />
          );
        })
      )}
    </div>
  );
}
export default Browse;

// date, description, email, full_name, phone_number, title
