import React from "react";
import styles from "./Ocasion.module.css";
import ocasionone from "./images/download (11).jpeg";
import ocasiontwo from "./images/download (12).jpeg";
import ocasionthree from "./images/download (10).jpeg";

function Ocasion() {
  return (
    <div className={styles.ocasioncontainer}>
      <div className={styles.ocasioninfo}>
        <p>Celebrate Special Ocasion</p>
      </div>
      <div className={styles.ocasions}>
        <div className={styles.ocasion}>
          <img className={styles.image} src={ocasionone} />
          <p>ANNIVERSARY</p>
        </div>
        <div className={styles.ocasion}>
          <img className={styles.image} src={ocasiontwo} />
          <p>WEDDING</p>
        </div>
        <div className={styles.ocasion}>
          <img className={styles.image} src={ocasionthree} />
          <p>BIRTHDAY</p>
        </div>
      </div>
    </div>
  );
}

export default Ocasion;
