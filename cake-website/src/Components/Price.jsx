import React from 'react'
import styles from "./Price.module.css"

function Price() {
  return (
    <div className={styles.Pricecontainer}>
        <h2>Price</h2>
        <div className={styles.Prices}>
          <div className={styles.Pricetag}>
            <p>
                Under <br/>
                299 
            </p>
          </div>
          <div className={styles.Pricetag}>
            <p>
                Under <br/>
                499
            </p>
          </div>
          <div className={styles.Pricetag}>
            <p>
                Under <br/>
                999 
            </p>
          </div>
        </div>
    </div>
  )
}

export default Price