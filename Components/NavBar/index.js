import Link from "next/link";
import css from "../../styles/navbar.module.css";
import logo from "../../public/SalVegGNoLogo.png";
import Image from "next/image";

function NavBar() {
  return (
    <ul className={css.navbar}>
      <Image src={logo} alt="SalVeg logo" width={100} height={50}></Image>
      <li className={css.navbarItem}>
        <Link href="/register">
          <a>Register</a>
        </Link>
      </li>
      <li className={css.navbarItem}>
        <Link href="/login">
          <a>Log In</a>
        </Link>
      </li>
      <li className={css.navbarItem}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li className={css.navbarItem}>
        <Link href="/browse">
          <a>Browse</a>
        </Link>
      </li>
      <li className={css.navbarItem}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
