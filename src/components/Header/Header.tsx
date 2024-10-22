import React from 'react';
import styles from './Header.module.scss';

import { Link } from'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className={styles.Header}>
       <nav>
                <Link to='/cv'>Curriculum Vitae</Link>
                <Link to='/projects'>IT projects</Link>
                <Link to='/gleria'>Galeria</Link>
                <Link to='/triathlon'>Triathlon</Link>
                <Link to='/vinylcollectiion'>Vinyl Collection</Link>
            </nav>
    </div>
  );
};

export default Header;