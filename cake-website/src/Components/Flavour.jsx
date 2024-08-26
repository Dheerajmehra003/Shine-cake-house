import React from 'react'
import styles from "./Flavour.module.css"
import Flavour0ne from "./images/choclate.jpg"
import Flavourtwo from "./images/strawberry.jpg"
import Flavourthree from "./images/butter.jpg"
import Flavourfour from "./images/pinapplecake.avif"
import Flavourfive from "./images/vanillacake.avif"
import Flavoursix from "./images/blueberrycake.avif"
import { Link } from "react-router-dom";

function Flavour() {
  return (
    <div className={styles.Flavourcontainer}>
        <div className={styles.flavourinfo}>
     <p>Pick A Flavour</p>
        </div>
     <div className={styles.flavours}>
        <Link className={styles.link} to={"/choclatecakes"}>
        <div className={styles.flavour}>
            <img className={styles.image} src={Flavour0ne} />
            <p>CHOCLATE</p>
        </div>
        </Link>
        <Link className={styles.link} to={"/strawberrycakes"}>
        <div className={styles.flavour}>
            <img className={styles.image} src={Flavourtwo} />
            <p>STRAWBERRY</p>
        </div>
        </Link>
        <Link className={styles.link} to={"/butterscotchcakes"}>
        <div className={styles.flavour}>
            <img className={styles.image} src={Flavourthree} />
            <p>BUTTERSCOTCH</p>
        </div>
        </Link>
        <Link className={styles.link} to={"/pineapplecakes"}>
        <div className={styles.flavour}>
            <img className={styles.image} src={Flavourfour} />
            <p>PINEAPPLE</p>
        </div>
        </Link>
        <div className={styles.flavour}>
            <img className={styles.image} src={Flavourfive} />
            <p>VANILLA</p>
        </div>
        <div className={styles.flavour}>
            <img className={styles.image} src={Flavoursix} />
            <p>BLUEBERRY</p>
        </div>
     </div>
    </div>
  )
}

export default Flavour