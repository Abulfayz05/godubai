import React from 'react'
import styles from '../styles/Hero.module.css'
export default function Hero() {
  return (
    <div
    className={styles.container}>
    <div className={styles.hero_text}>
        <h1 className={styles.title}>Dubayga sayohat qiling <br/>
            sizni dubay kutmoqda</h1>
        <p>Qani ketdik sizni dubayda ajoyib va esda qolarli sayohat kutmoqda</p>
        <a>Tanishib chiqish</a>
    </div>

    <div className={styles.bg}>

    </div>
    </div>
  )
}
