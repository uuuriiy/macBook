import React from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import item_1 from '../../assets/item_1.jpeg';
import item_2 from '../../assets/item_2.jpeg';
import item_3 from '../../assets/item_3.jpeg';
import item_4 from '../../assets/item_4.jpeg';
import styles from './Products.module.scss';

export const Products = () => {
  return (
    <>
        <Header />
        <section className={styles.products}>
            <h1>Products</h1>
            <div className={styles.products__content}>
                <figure>
                    <img src={item_1} alt="item_1" width={500} height={400} />
                    <figcaption>Ноутбук Apple MacBook Pro 16" M2<br/> Pro 1TB 2023 (MNW93UA/A) Space Gray</figcaption>
                </figure>
                <figure>
                    <img src={item_2} alt="item_2" width={500} height={400} />
                    <figcaption>Ноутбук Apple MacBook Pro 16" M1<br/> Pro 512GB 2021 (MK1E3UA/A) Silver</figcaption>
                </figure>
                <figure>
                    <img src={item_3} alt="item_3" width={500} height={400} />
                    <figcaption>Ноутбук Apple MacBook Air 13" M1<br/> 256GB 2020 (MGN93) Silver</figcaption>
                </figure>
                <figure>
                    <img src={item_4} alt="item_4" width={500} height={400} />
                    <figcaption>Ноутбук Apple MacBook Air 13.6"<br/> M2 256GB 2022 (MLY33UA/A) Midnight</figcaption>
                </figure>
            </div>
        </section>
        <Footer />
    </>
  )
}
