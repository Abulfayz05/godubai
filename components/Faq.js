import React from "react";
import styles from "../styles/Faq.module.css";
import Image from "next/image";

export default function FAQ() {
  return (
    <div className={styles.container}>
      <h5>FAQ</h5>
      <h1>Full Range of Travel service</h1>

      <div className={styles.block}>
        <div className={styles.content}>
          <p>
            Let’s start your journey with us, your dream will come true. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam quis nostrud exercitation.
          </p>
        </div>

        <div>
          <Image src="/faq.webp" width={570} height={437} alt="about" />
        </div>
      </div>
      <div className={styles.btn}>
        <a>Book Your Destination</a>
      </div>

      <div className={styles.vp}>
      <video
        poster="/posternew.jpg"
        src="/dubai.mp4"
        controls
        muted
        loop
      
    
        // autoPlay
      ></video>
      </div>
    </div>
  );
}
