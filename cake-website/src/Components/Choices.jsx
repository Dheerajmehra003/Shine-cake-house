import React from 'react'
import styles from "./Choice.module.css"
import Choiceone from "./images/images (1).jpeg"
import Choicetwo from "./images/images (2).jpeg"
import Choicethree from "./images/images (3).jpeg"
import Choicefour from "./images/download (4).jpeg"
import Choicefive from "./images/download (5).jpeg"
import Choicesix from "./images/download (7).jpeg"
import Choiceseven from "./images/download (8).jpeg"
import Choiceeight from "./images/download (9).jpeg"

function Choices() {
  return (
    <div className={styles.choicecontainer}>
    <div className={styles.choiceinfo}>
 <p>Tempting Cake Choices</p>
    </div>
 <div className={styles.designs}>
    <div className={styles.design}>
        <img className={styles.image} src={Choiceone} />
        <p>CREAM CAKES</p>
    </div>
    <div className={styles.design}>
        <img className={styles.image} src={Choicetwo} />
        <p>PHOTO CAKES</p>
    </div>
    <div className={styles.design}>
        <img className={styles.image} src={Choicethree} />
        <p>JOURNEY CAKES</p>
    </div>
    <div className={styles.design}>
        <img className={styles.image} src={Choicefour} />
        <p>FONDANT CAKES</p>
    </div>
    <div className={styles.design}>
        <img className={styles.image} src={Choicefive} />
        <p>DESIGNED CAKES</p>
    </div>
    <div className={styles.design}>
        <img className={styles.image} src={Choicesix} />
        <p>WEDDING CAKES</p>
    </div>
    <div className={styles.design}>
        <img className={styles.image} src={Choiceseven} />
        <p>KIDS CAKES</p>
    </div>
    <div className={styles.design}>
        <img className={styles.image} src={Choiceeight} />
        <p>PINATA CAKES</p>
    </div>
 </div>
</div>
  )
}

export default Choices