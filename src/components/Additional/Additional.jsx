import React from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import CustomerWay from '../../assets/customerWay.jpeg'
import Customer_1 from '../../assets/customer_1.jpeg'
import Customer_2 from '../../assets/customer_2.jpeg'
import styles from './Additional.module.scss';

export const Additional = () => {
  return (
    <>
        <Header />
        <section className={styles.additional}>
            <h1>People who buy our product</h1>
            <div className={styles.additional__items}>
              <div className={styles.additional__item}>
                <img src={Customer_1} alt="Customer_1" height={500} />
                <p>Nikita is a student studying for a bachelor's degree and working as a backend developer in an IT company.</p>
              </div>
              <div className={styles.additional__item}>
                <p>Anastasia is a 33-year-old interior designer.</p>
                <img src={Customer_2} alt="Customer_2" height={500} />
              </div>
            </div>
            <figure>
                <img src={CustomerWay} alt="CustomerWay" width={1000} />
            </figure>
        </section>
        <Footer />
    </>
  )
}
