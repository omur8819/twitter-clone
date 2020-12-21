import React from "react";
import LayoutExtra from "./LayoutExtra";
import LayoutMain from "./LayoutMain";
import LayoutSidebar from "./LayoutSidebar";
import useWindowSize from "../../hooks/useWindowSize";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const size = useWindowSize();
  return (
    <div className={styles.layout}>
      <LayoutSidebar />
      <LayoutMain> {children}</LayoutMain>

      {size.width > 990 && <LayoutExtra />}
    </div>
  );
};

export default Layout;
