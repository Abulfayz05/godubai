import React from "react";
import styles from "../styles/Client.module.css";

export default function ClientSay() {
  return (
    <div className={styles.contaier}>
      <div className={styles.bg}>
        <div className={styles.content}>
          <h1>Mijozlarimiz fikri</h1>
          <p>
            GoDubai.uz Dubayda unutilmas sayohatni tuhfa etdi, Godubai.uz barcha
            xodimlariga o’z minnatdorchiligimini bildirib qolaman kattakon
            raxmat ishlaringiz rivojini bersin.
          </p>
        </div>
      </div>
    </div>
  );
}
