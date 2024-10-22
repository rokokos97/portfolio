import React from 'react';
import styles from './Layout.module.scss';


import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout: React.FC = () => {
  return (
    <div className={styles.Layout}>
      <Header/>
      <Footer />  
    </div>
  );
};

export default Layout;