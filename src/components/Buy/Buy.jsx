import React from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import poster from '../../assets/poster.jpeg';
import styles from './Buy.module.scss';

export const Buy = () => {
  return (
    <>
        <Header />
        <section className={styles.buy}>
            <h1>Let's buy MacBook</h1>
            <figure>
                <img src={poster} alt="poster" />
            </figure>
        </section>
        <Footer />
    </>
  )
}
