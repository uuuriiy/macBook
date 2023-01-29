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
                    Компанія Apple ще з 1977 року, після презентації персонального комп'ютера Apple II, 
                    задала тон у виробництві унікальних персональних машин, здатних стати корисними не тільки вченим і інженерам, 
                    але і простим користувачам. Що викупалася в променях слави, Стів Джобс, 
                    на виставці Worldwide Developer Conference в 2005 році зробив сенсаційну заяву, повідомивши, 
                    що для бренду настає нова ера, оскільки назавжди відмовляться від процесорів IBM PowerPC на користь Intel.
                    Після довгих обіцянок в початку 2006 року Джобс представив світу перший MacBook Pro, стверджуючи, що цей ноутбук стане справжнім революціонером комп'ютерної індустрії.
                    Щоб стерти всі асоціації про попередній ноутбук з процесором PowerPC, 
                    маркетологи компанії кардинально змінюють назву пристрою на MacBook Pro, де літери «Mac», 
                    стали ім'ям прозивним вже на цілих 11 років.
                    Перші моделі отримали покращену графіку і пристойну яскравість дисплея.
                </p>
                <div className={styles.about__img} />
            </div>
        </section>
        <section className={styles.swot}>
            <h1>SWOT-аналіз</h1>
            <figure>
                <img src={Swot} alt="swot" height={500} />
            </figure>
        </section>
        <Footer />
    </>
  )
};
