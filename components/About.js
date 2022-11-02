import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div>
          <Image src="/about.png" width={560} height={560}/>
        </div>

        <div className={styles.content}>
          <h5>About Us</h5>
          <h1>Get read for real time adventure</h1>
          <p>
            Let’s start your journey with us, your dream will come true. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam quis nostrud exercitation.
          </p>

          <a>Book Your Destination</a>
        </div>
      </div>
    </div>
  );
}
