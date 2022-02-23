import { useEffect, useState } from "react";
import CardDisplay from "../Components/Card";
import css from "../styles/browse.module.css";
import Footer from "../Components/Footer";
import OptionsBar from "../Components/OptionsBar";

const URL = process.env.NEXT_PUBLIC_API_URL;

function Browse() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://sixbits-project.herokuapp.com/api/posts"
      );
      const data = await res.json();
      setData([...data.payload]);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>hELLO</h1>
      <OptionsBar />
      <div className={css.wrapper}>
        {data.length === 0 ? (
          <></>
        ) : (
          data.map((item, index) => {
            return <CardDisplay key={index} data={item} />;
          })
        )}
      </div>
    </div>
  );
}

export default Browse;

// date, description, email, full_name, phone_number, title
