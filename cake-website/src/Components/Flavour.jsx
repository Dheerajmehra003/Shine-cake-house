import React from 'react'
import styles from "./Flavour.module.css"
import Flavour0ne from "./images/choclate.jpg"
import Flavourtwo from "./images/strawberry.jpg"
import Flavourthree from "./images/butter.jpg"
import Flavourfour from "./images/download (1).jpeg"
import Flavourfive from "./images/download (2).jpeg"

function Flavour() {
  return (
    <div className={styles.Flavourcontainer}>
        <div className={styles.flavourinfo}>
     <p>Pick A Flavour</p>
        </div>
     <div className={styles.flavours}>
        <div className={styles.flavour}>
            <img className={styles.image} src={Flavour0ne} />
            <p>CHOCLATE</p>
        </div>
        <div className={styles.flavour}>
            <img className={styles.image} src={Flavourtwo} />
            <p>STRAWBERRY</p>
        </div>
        <div className={styles.flavour}>
            <img className={styles.image} src={Flavourthree} />
            <p>CHOCLATE</p>
        </div>
        <div className={styles.flavour}>
            <img className={styles.image} src={Flavourfour} />
            <p>CHOCLATE</p>
        </div>
        <div className={styles.flavour}>
            <img className={styles.image} src={Flavourfive} />
            <p>CHOCLATE</p>
        </div>
        <div className={styles.flavour}>
            <img className={styles.image} src={Flavour0ne} />
            <p>CHOCLATE</p>
        </div>
     </div>
    </div>
  )
}

export default Flavour