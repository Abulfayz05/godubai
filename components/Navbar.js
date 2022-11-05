import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import { FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  console.log(isNavExpanded);
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <img
              className={styles.logo}
              src="/logo.png"
              alt="greenkarta.uz"
            ></img>{" "}
          </Link>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <VscMenu size={30} color="#00095E" />
        </button>

        <nav className={isNavExpanded ? styles.menu_active : styles.menu}>
          <button
            className={styles.hamburger_close}
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <VscChromeClose size={30} color="#00095E" />
          </button>
          <ul
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <li>
              <Link href="/">Asosiy</Link>
            </li>

            <li>
              <Link href="#">Tur paketlar</Link>
            </li>

            <li>
              <Link href="#">Biz haqimizda</Link>
            </li>

            <li>
              <Link href="#">Blog</Link>
            </li>
          
            {/* <li>
              <Link href="https://t.me/abulfayz05"> Aloqa</Link>
            </li> */}


            <li>
              <a href="tel:+998974350512" className={styles.phone}> (97) 435 05 12</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
