import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import css from "../styles/profile.module.css";
import Vegcard from "../Components/Card";
import { useState, useEffect } from "react";
const URL = process.env.NEXT_PUBLIC_API_URL;

export default function Profile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${URL}/posts`);
      const data = await res.json();
      setData([...data.payload]);
    }
    fetchData();
  }, []);

  return <div></div>;
}

export const getServerSideProps = withPageAuthRequired();
