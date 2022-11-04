import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div>
          <Image src="/about.png" width={560} height={560} alt="about" />
        </div>

        <div className={styles.content}>
          <h5>Biz haqimizda</h5>
          <h1>Sizning ishonchli hamkoringiz</h1>
          <p>
            Mingdan ortiq sayyohlar yilning eng qimmatli vaqti - ta’tilni
            GoDubai.uz ga ishonib topshirishdi. GoDubai.uz bosh kompaniyasining
            ko’magi bilan biz nafaqat moliyaviy barqarorlikni saqlab qolamiz,
            balki xaridorlarga GoDubai.uz-ni raqobatchilardan ajratib
            turadigan pul uchun eng yaxshi qiymatga ega mahsulotni taqdim
            etamiz.
          </p>

          <a>Ko’proq ma’lumot</a>
        </div>
      </div>
    </div>
  );
}
