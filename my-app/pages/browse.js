import { useEffect, useState } from "react";

const URL = process.env.NEXT_PUBLIC_API_URL;

function Browse() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        ``
      );
      const data = await response.json();
      setData(data);
      console.log(data);
    }
    getData();
  }, []);

  return <h1>Browse</h1>;
}
export default Browse;
