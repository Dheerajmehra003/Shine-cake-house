import React from "react";
import styles from "./Price.module.css";
import { Link } from "react-router-dom";

function Price() {
  return (
    <div className={styles.Pricecontainer}>
      <h2>Price</h2>
      <div className={styles.Prices}>
        <Link className={styles.priceinfo} to="/under299/299">
          <div className={styles.Pricetag}>
            <p>
              Under <br />
              299
            </p>
          </div>
        </Link>
        <Link className={styles.priceinfo} to="/under299/599">
        <div className={styles.Pricetag}>
          <p>
            Under <br />
            599
          </p>
        </div>
        </Link>
        <Link className={styles.priceinfo} to="/under299/999">
        <div className={styles.Pricetag}>
          <p>
            Under <br />
            999
          </p>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Price;
