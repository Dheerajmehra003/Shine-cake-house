import React from "react";
import styles from "./Underone.module.css";
import { FaStar } from "react-icons/fa";
import Flavour0ne from "./images/choclate.jpg"

function Underone() {
  return (
    <>
      <div className={styles.Underonecontainer}>
        <div className={styles.underinfo}>
        <p>Cakes under 299</p>
        </div>
        <div className={styles.cakescontainer}>
          <div className={styles.cake}>
          <img className={styles.image} src={Flavour0ne} />
          <p>Light choclate cake half kg
          </p>
            <div className={styles.rating}>
                <p>₹280</p>
                <div className={styles.iconcontainer} >
                <button className={styles.btn}>0.0</button>
                <FaStar className={styles.icon}/>
                </div>
            </div>
          </div>
          <div className={styles.cake}>
          <img className={styles.image} src={Flavour0ne} />
          <p>Pineapple cake half kg
          </p>
            <div className={styles.rating}>
                <p>₹270</p>
                <div className={styles.iconcontainer} >
                <button className={styles.btn}>0.0</button>
                <FaStar className={styles.icon}/>
                </div>
            </div>
          </div>
          <div className={styles.cake}>
          <img className={styles.image} src={Flavour0ne} />
          <p>Strawberry cake half kg
          </p>
            <div className={styles.rating}>
                <p>₹270</p>
                <div className={styles.iconcontainer} >
                <button className={styles.btn}>0.0</button>
                <FaStar className={styles.icon}/>
                </div>
            </div>
          </div>
          <div className={styles.cake}>
          <img className={styles.image} src={Flavour0ne} />
          <p>Vanilla cake half kg
          </p>
            <div className={styles.rating}>
                <p>₹250</p>
                <div className={styles.iconcontainer} >
                <button className={styles.btn}>0.0</button>
                <FaStar className={styles.icon}/>
                </div>
            </div>
          </div>
          <div className={styles.cake}>
          <img className={styles.image} src={Flavour0ne} />
          <p>Butterscotch cake half kg
          </p>
            <div className={styles.rating}>
                <p>₹299</p>
                <div className={styles.iconcontainer} >
                <button className={styles.btn}>0.0</button>
                <FaStar className={styles.icon}/>
                </div>
            </div>
          </div>
          <div className={styles.cake}>
          <img className={styles.image} src={Flavour0ne} />
          <p>Blueberry cake half kg
          </p>
            <div className={styles.rating}>
                <p>₹280</p>
                <div className={styles.iconcontainer} >
                <button className={styles.btn}>0.0</button>
                <FaStar className={styles.icon}/>
                </div>
            </div>
          </div>
          <div className={styles.cake}>
          <img className={styles.image} src={Flavour0ne} />
          <p>Black Forest cake half kg
          </p>
            <div className={styles.rating}>
                <p>₹299</p>
                <div className={styles.iconcontainer} >
                <button className={styles.btn}>0.0</button>
                <FaStar className={styles.icon}/>
                </div>
            </div>
          </div>
          <div className={styles.cake}>
          <img className={styles.image} src={Flavour0ne} />
          <p>white forest cake half kg
          </p>
            <div className={styles.rating}>
                <p>₹299</p>
                <div className={styles.iconcontainer} >
                <button className={styles.btn}>0.0</button>
                <FaStar className={styles.icon}/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Underone;
