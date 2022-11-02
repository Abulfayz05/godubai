import React from "react";
import styles from "../styles/Client.module.css";

export default function ClientSay() {
  return (
    <div className={styles.contaier}>
      <div className={styles.bg}>
        <div className={styles.content}>
          <h1>What customers say</h1>
          <p>
            "Let’s start your journey with us, your dream will come true. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}
