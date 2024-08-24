import React from 'react'
import styles from "./Emailsection.module.css"
import { TbTruckDelivery } from "react-icons/tb";;
import { GiCakeSlice } from "react-icons/gi";

function Emailsection() {
  return (
    <>
    <div className={styles.Emailcontainer}>
        <div className={styles.iconcontainer}>
        <TbTruckDelivery />
            <p>On Time Delivery</p>
        </div>
        <div className={styles.iconcontainer}>
        <GiCakeSlice />
            <p>100% Fresh and Hygenic</p>
        </div>
        <div className={styles.iconcontainer}>
            <p>FSSAI certified</p>
        </div>
        <div>
         <form className={styles.formcontainer}>
            <label>Sign up for updates</label><br/>
            <input id={styles.input} type="text" placeholder='Enter your Email...' />
            <button id={styles.btn}>send</button>
         </form>
        </div>
    </div>
   
    </>
  )
}

export default Emailsection