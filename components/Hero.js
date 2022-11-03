import React from 'react'
import styles from '../styles/Hero.module.css'
export default function Hero() {
  return (
    <div
    className={styles.container}>
    <div className={styles.hero_text}>
        <h1 className={styles.title}>Dubayga sayohat qiling <br/>
            sizni dubay kutmoqda</h1>
        <p>Let’s start your journey with us, your dream will come true</p>
        <a>Explore Destinations</a>
    </div>

    <div className={styles.bg}>

    </div>
    </div>
  )
}
