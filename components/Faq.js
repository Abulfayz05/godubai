import React from "react";
import styles from "../styles/Faq.module.css";
import Image from "next/image";

export default function FAQ() {
  return (
    <div className={styles.container}>
      <h5>SAVOLLAR</h5>
      <h1>Eng ko’p beriladigan savollar</h1>

      {/* ’ */}

      <div className={styles.block}>
        <div className={styles.content}>
          <p>
            Tur paketlar narxi ichiga nimalar kiradi. <br />
            Qanaqa tariflaringiz bor yana <br />
            Tur paketlar narxi ichiga nimalar kiradi. <br />
            Qanaqa tariflaringiz bor yana <br />
            Tur paketlar narxi ichiga nimalar kiradi. <br />
            Qanaqa tariflaringiz bor yana <br />
             
             
          </p>
        </div>

        <div>
          <Image src="/faq.webp" width={570} height={437} alt="about" />
        </div>
      </div>
      <div className={styles.btn}>
        <a>Savol berish</a>
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
