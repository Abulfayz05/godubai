import React from "react";
import styles from "../styles/Service.module.css";
import Image from "next/image";

export default function Service() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p> Check Our Best Promotional Tour</p>
        <h1>Upcoming Events</h1>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <Image src="/card1.webp" width={360} height={280} alt="dubai" />
          <div className={styles.card_title}>
            <h3>Dubai</h3>
            <h3 className={styles.price}>$1200</h3>
          </div>
          <div className={styles.date}>
            <p>
              {" "}
              <a>12 Jan-18 Jan</a> 5days
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <Image src="/card1.webp"  width={360} height={280} alt="dubai" />
          <div className={styles.card_title}>
            <h3>Dubai</h3>
            <h3 className={styles.price}>$1200</h3>
          </div>
          <div className={styles.date}>
            <p>
              {" "}
              <a>12 Jan-18 Jan</a> 5days
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <Image src="/card1.webp"  width={360} height={280} alt="dubai"  />
          <div className={styles.card_title}>
            <h3>Dubai</h3>
            <h3 className={styles.price}>$1200</h3>
          </div>
          <div className={styles.date}>
            <p>
              {" "}
              <a>12 Jan-18 Jan</a> 5days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
