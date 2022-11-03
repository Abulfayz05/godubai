import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { ImTelegram } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container__fluid">
        <div className={styles.footer__body}>
          <div className={styles.footer__main}>
            <img
              className={styles.footer__logo}
              src="/footerlogo.png"
              alt="logofooter"
            />
            <div className={styles.powered}>
              <h4>
               GoDubai.uz | Dubayga sayohat 2022  <br/>
               Biz bilan xavfsiz va qulay narxda sayohat qiling
              </h4>
            </div>
            <div className={styles.social}>
              <ImTelegram color="white" size={22} />
              <FaInstagramSquare color="white" size={22} />
            </div>
          </div>
          <div className={styles.footer__menu}>
            <div className={styles.menu_footer}>
              <ul>
                <p>Navigation</p>
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#">About</Link>
                </li>
                <li>
                  <Link href="#">Services</Link>
                </li>
                <li>
                  <Link href="#">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className={styles.menu_footer}>
              <ul>
                <p>Services</p>
                <li>
                  <Link href="#">Dubai</Link>
                </li>
                <li>
                  <Link href="#">Dubai</Link>
                </li>
                <li>
                  <Link href="#">Dubai</Link>
                </li>
                <li>
                  <Link href="#">Dubai</Link>
                </li>
              </ul>
            </div>
            <div className={styles.menu_footer}>
              <ul>
                <p>Bog'lanish</p>
                <li>Jizzax shahar Navoiy ko'chasi 0-uy</li>
                <li>
                  <Link href="https://t.me/godubaiuz">@godubaiuz</Link>
                </li>
                <li>
                  <h5>+998 85 000 00 00</h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h3>
          {" "}
          Copyright © 2022 Barcha xuquqlar ximoyalangan | Abulfayz tomonidan
          yaratildi
        </h3>
      </div>
    </footer>
  );
}
