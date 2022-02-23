import { useState } from "react";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import ReorderIcon from "@material-ui/icons/Reorder";
import css from "../../styles/navbar.module.css";
import Image from "next/image";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className={css.navbar}>
      <div className={css.leftSide} id={openLinks ? "open" : "close"}>
        <Image src={Logo} alt="logo" height="50" width="200" />
        <div className={css.hiddenLinks}>
          <a>Home</a>
          <a>Browse</a> <a>About</a> <a>Sign In</a>{" "}
        </div>
      </div>
      <div className={css.rightSide}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/browse">
          <a>Browse</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/signin">
          <a>Sign In</a>
        </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}
export default Navbar;
