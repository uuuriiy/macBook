import React from 'react';
import Logo from '../../assets/logo.jpeg'
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header'
import styles from './Home.module.scss'

export const Home = () => {
  return (
    <>
        <Header />
        <div className={styles.home}>
            <figure>
                <img src={Logo} alt="Logo" width="350" height="350"/>
            </figure>
            <h1>Creativity, inovation.<br/> Forward to the top</h1>
        </div>
        <Footer />
    </>
  )
}
