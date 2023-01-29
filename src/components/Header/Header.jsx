import React from 'react';
import Logo from '../../assets/logo.jpeg'
import styles from './Header.module.scss'
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.header__content}>
            <figure className={styles.header__icon}>
                <NavLink to='/'>
                    <img src={Logo} alt="Logo" width="100" height="100"/>
                </NavLink>
            </figure>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink to='/'>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to='/additional'>ADDITIONAL</NavLink>
                    </li>
                    <li>
                        <NavLink to='/buy'>BUY</NavLink>
                    </li>
                    <li>
                        <NavLink to='/products'>PRODUCTS</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
