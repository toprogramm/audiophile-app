import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';
import LogoSvg from '../../assets/shared/desktop/logo.svg';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.navbar__brand}>
        <img src={LogoSvg} alt="logo icon" />
      </NavLink>
    </nav>
  );
}
