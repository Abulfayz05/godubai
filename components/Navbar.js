import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import {FaTelegram} from 'react-icons/fa'


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
          <VscMenu size={30} color="white" />
        </button>

        <nav className={isNavExpanded ? styles.menu_active : styles.menu}>
          <button
            className={styles.hamburger_close}
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <VscChromeClose size={30} />
          </button>
          <ul
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <li>
              <Link href="/">
          Asosiy
              </Link>
            </li>

            <li>
              <Link href="#">
            Tur paketlar
              </Link>
            </li>

            <li>
              <Link href="#">
                Biz haqimizda
              </Link>
            </li>
            <li>
              <Link href="#">
              Blog
              </Link>
            </li>
            <li>
              <Link href="https://t.me/abulfayz05">
              Aloqa
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
