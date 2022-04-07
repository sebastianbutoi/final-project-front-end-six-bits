import { useEffect, useState } from "react";
import Vegcard from "../Components/Card";
import css from "../styles/browse.module.css";
import SubmitModal from "../Components/SubmitModal";
import Head from "next/head";

import OptionsBar from "../Components/OptionsBar";

const URL = process.env.NEXT_PUBLIC_API_URL;

function Browse() {
  const [data, setData] = useState([]);
  const [area, setArea] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${URL}/posts`);
      const data = await res.json();
      setData([...data.payload]);
    }
    fetchData();
  }, []);

  function handleOnChange(event) {
    let newLocation = event.target.value;
    setArea(newLocation);
  }

  return (
    <div className={css.wrapper}>
      <Head>
        <title>SalVeg | Browse</title>
      </Head>
      <OptionsBar handleOnChange={handleOnChange} />
      {data.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <Vegcard data={data} area={area} />
      )}
    </div>
  );
}

export default Browse;

// date, description, email, full_name, phone_number, title
