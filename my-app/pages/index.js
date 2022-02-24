import React from "react";
import Link from "next/link";
import vegImage from "../public/images/produce-box.jpg";
import Image from "next/image";

import css from "../styles/Home.module.css";
function Home() {
  return (
    <div className={css.home}>
      <div className={css.home}>
        <h1 className={css.title}>SalVeg</h1>
        {/* <Image src={vegImage} alt="produce" ></Image> */}
        <p className={css.text}>Shapeless Not Tasteless</p>
        <Link href="/browse">
        <a className={css.link}>Get Started</a>
        </Link>
      </div>
    </div>
  );
}
export default Home;
