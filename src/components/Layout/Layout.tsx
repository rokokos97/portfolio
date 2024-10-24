import React from "react";
import styles from "./Layout.module.scss";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";

const Layout: React.FC = () => {
  return (
    <div className={styles.Layout}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Layout;
