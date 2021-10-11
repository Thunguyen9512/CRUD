import React from "react";

import styles from "./ProgressApp.Module.scss";

const ProgressApp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <div className={styles.box}></div>
        <div className={styles.hill}></div>
      </div>
    </div>
  );
};

export default ProgressApp;
