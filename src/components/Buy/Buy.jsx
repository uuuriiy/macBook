import React from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { useNavigate } from "react-router-dom";
import poster from '../../assets/poster.jpeg';
import styles from './Buy.module.scss';

export const Buy = () => {
  const navigate = useNavigate();
  return (
    <>
        <Header />
        <section className={styles.buy}>
            <h1>Let's buy MacBook</h1>
            <figure>
                <img src={poster} alt="poster" onClick={() => navigate('/products')} />
            </figure>
        </section>
        <Footer />
    </>
  )
}
