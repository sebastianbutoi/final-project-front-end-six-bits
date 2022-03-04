import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
import PostInput from "../Components/PostInput";
import ProfileInput from "../Components/ProfileInput";
import Head from "next/head";

const URL = process.env.NEXT_PUBLIC_API_URL;

export default function Profile() {
  const { user } = useUser();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function getUserData() {
      const resp = await fetch(`${URL}/users/${user?.sub}`);
      const data = await resp.json();
      if (data.payload.length > 0) {
        setUserData([...userData, ...data.payload]);
      }
    }
    getUserData();
  }, []);

  return (
    <div>
      <Head>
        <title>SalVeg | Profile</title>
      </Head>

      {userData.length === 0 ? <ProfileInput /> : <PostInput user={userData} />}
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
