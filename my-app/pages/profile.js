import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Profile() {
  return <div>UNDER CONSTRUCTION SIGN IN </div>;
}

export const getServerSideProps = withPageAuthRequired();
