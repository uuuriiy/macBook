import React from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import Swot from '../../assets/swot.jpeg';
import styles from './About.module.scss';

export const About = () => {
  return (
    <>
        <Header />
        <section className={styles.about}>
            <h1>About MacBook</h1>
            <div className={styles.about__content}>
                <p>
                    Since 1977, after the presentation of the Apple II personal computer, 
                    the Apple company has set the tone in the production of unique personal machines that can be useful not only to scientists and engineers, 
                    but also to ordinary users. Bathed in the rays of glory, Steve Jobs,
                    made a sensational statement at the Worldwide Developer Conference in 2005, announcing
                    that a new era is coming for the brand, as they will forever abandon IBM PowerPC processors in favor of Intel.
                    After long promises, in early 2006, Jobs presented the world with the first MacBook Pro, claiming that this laptop would be a true revolutionary in the computer industry.
                    To erase all associations with the previous PowerPC laptop,
                    the company's marketers radically change the name of the device to MacBook Pro, where the letters "Mac",
                    became a household name for 11 years.
                    The first models received improved graphics and decent display brightness.
                </p>
                <div className={styles.about__img} />
            </div>
        </section>
        <section className={styles.swot}>
            <h1>SWOT-analisys</h1>
            <figure>
                <img src={Swot} alt="swot" height={500} />
            </figure>
        </section>
        <Footer />
    </>
  )
};
