import { useState } from "react";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import styles from "../../styles/navbar.module.css";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";

function Navbar() {
  return (
    <header className={styles.header}>
        <nav className={styles.navbar}>
            <a className={styles.navlogo}>[BrandLogo]</a>
          <ul className={styles.navmenu}>
            <li className={styles.navitem}>
                <a className={styles.navlink}>Home</a>
            </li>
            <li className={styles.navitem}>
              
                <a className={styles.navlink}>Browse</a>
       
            </li>
            <li className={styles.navitem}>
           
                <a className={styles.navlink}>About</a>
      
            </li>
             <li className={styles.navitem}>
           
                <a className={styles.navlink}>Sign In</a>
      
            </li>
            <li className={styles.navitem}>
           
                <a className={styles.navlink}>Profile</a>
      
            </li>
          </ul>
          <button className={styles.hamburger}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>
  );
}
export default Navbar;



  // const { user } = useUser();
  // const [openLinks, setOpenLinks] = useState(false);
  // const toggleNavbar = () => {
  //   setOpenLinks(!openLinks);


 // <div className={css.navbar}>
    //   <div className={css.leftSide} id={openLinks ? "open" : "close"}>
    //     <Image src={Logo} alt="logo" height="50" width="200" priority="true" />
    //     <div className={css.hiddenLinks}>
    //       <a>Home</a>
    //       <a>Browse</a> <a>About</a> <a>Sign In</a>{" "}
    //     </div>
    //   </div>
    //   <div className={css.rightSide}>
    //     <Link href="/">
    //       <a className={css.link}>Home</a>
    //     </Link>
    //     <Link href="/browse">
    //       <a className={css.link}>Browse</a>
    //     </Link>
    //     <Link href="/about">
    //       <a className={css.link}>About</a>
    //     </Link>
    //     {!user && (
    //       <Link href="/api/auth/login">
    //         <a className={css.signUp}>Sign In</a>
    //       </Link>
    //     )}
    //     {user && (
    //       <>
    //         <Link href="/profile">
    //           <a className={css.link}>Profile</a>
    //         </Link>
    //         <Link href="/api/auth/logout">
    //           <a className={css.signUp}>Sign Up</a>
    //         </Link>
    //       </>
    //     )}

    //     {/* <button onClick={toggleNavbar}>
    //       <ReorderIcon className={css.menuIcon} />
    //     </button> */}
    //   </div>
    // </div>