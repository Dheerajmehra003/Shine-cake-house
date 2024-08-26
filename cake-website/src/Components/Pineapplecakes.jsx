import React from 'react'
import styles from "./Choclate.module.css";
import { FaStar } from "react-icons/fa";
import Flavour0ne from "./images/pinapplecake.avif";
import { Link } from "react-router-dom";

function Pineapplecakes() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.underinfo}>
        <p>Pineapple Cakes</p>
      </div>
      <div className={styles.cakescontainer}>
        <div className={styles.cake}>
          <Link className={styles.link} to="/lightstrawberry">
            <img className={styles.image} src={Flavour0ne} />
            <p> Pineapple cake </p>
          </Link>
          <div className={styles.rating}>
            <p>₹280</p>
            <div className={styles.iconcontainer}>
              <button className={styles.btn}>0.0</button>
              <FaStar className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.cake}>
          <img className={styles.image} src={Flavour0ne} />
          <p> Pineapple cake </p>
          <div className={styles.rating}>
            <p>₹270</p>
            <div className={styles.iconcontainer}>
              <button className={styles.btn}>0.0</button>
              <FaStar className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.cake}>
          <img className={styles.image} src={Flavour0ne} />
          <p> Pineapple cake </p>
          <div className={styles.rating}>
            <p>₹270</p>
            <div className={styles.iconcontainer}>
              <button className={styles.btn}>0.0</button>
              <FaStar className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.cake}>
          <img className={styles.image} src={Flavour0ne} />
          <p> Pineapple cake </p>
          <div className={styles.rating}>
            <p>₹250</p>
            <div className={styles.iconcontainer}>
              <button className={styles.btn}>0.0</button>
              <FaStar className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.cake}>
          <img className={styles.image} src={Flavour0ne} />
          <p> Pineapple cake </p>
          <div className={styles.rating}>
            <p>₹299</p>
            <div className={styles.iconcontainer}>
              <button className={styles.btn}>0.0</button>
              <FaStar className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.cake}>
          <img className={styles.image} src={Flavour0ne} />
          <p> Pineapple cake </p>
          <div className={styles.rating}>
            <p>₹280</p>
            <div className={styles.iconcontainer}>
              <button className={styles.btn}>0.0</button>
              <FaStar className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.cake}>
          <img className={styles.image} src={Flavour0ne} />
          <p> Pineapple cake </p>
          <div className={styles.rating}>
            <p>₹299</p>
            <div className={styles.iconcontainer}>
              <button className={styles.btn}>0.0</button>
              <FaStar className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.cake}>
          <img className={styles.image} src={Flavour0ne} />
          <p> Pineapple cake </p>
          <div className={styles.rating}>
            <p>₹299</p>
            <div className={styles.iconcontainer}>
              <button className={styles.btn}>0.0</button>
              <FaStar className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.cake}>
          <img className={styles.image} src={Flavour0ne} />
          <p> Pineapple cake </p>
          <div className={styles.rating}>
            <p>₹299</p>
            <div className={styles.iconcontainer}>
              <button className={styles.btn}>0.0</button>
              <FaStar className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Pineapplecakes