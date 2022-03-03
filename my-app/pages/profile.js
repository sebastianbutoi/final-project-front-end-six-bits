import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
import PostInput from "../Components/PostInput";
import ProfileInput from "../Components/ProfileInput";

export default function Profile() {
  const [userData, setUserData] = useState([1]);

  useEffect(() => {
    async function getUserData() {
      const resp = await fetch(`url`);
      const data = resp.json();
    }
  }, []);
  return (
    <div>
      <h1>Profile</h1>
      {userData.length === 0 ? <ProfileInput /> : <PostInput />}
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
