import React from "react";
import styles from "../styles/Service.module.css";
import Image from "next/image";

export default function Service() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p> Dubayga eng yaxshi sayohat paketlari</p>
        <h1>Tur Paketlar</h1>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <Image src="/dubay4.jpeg" width={360} height={280} alt="dubai"  />
          <div className={styles.card_title}>
            <h3>Dubay</h3>
            <h3 className={styles.price}>$1200</h3>
          </div>
          <div className={styles.date}>
            <p>
              {" "}
              <a>15 Noy-20 Noy</a> 5 kun
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <Image src="/dubay1.jpg"  width={360} height={280} alt="dubai" />
          <div className={styles.card_title}>
            <h3>Dubay</h3>
            <h3 className={styles.price}>$1200</h3>
          </div>
          <div className={styles.date}>
            <p>
              {" "}
              <a>20 Noy-25 Noy</a> 5 kun
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <Image src="/dubay2.jpg"  width={360} height={280} alt="dubai"  />
          <div className={styles.card_title}>
            <h3>Dubay</h3>
            <h3 className={styles.price}>$1200</h3>
          </div>
          <div className={styles.date}>
            <p>
              {" "}
              <a>25 Noy-30 Noy</a> 5 kun
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
