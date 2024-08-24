import React from 'react'
import styles from "./Footer.module.css"
import { FaRegCopyright } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footercontainer}>
        <div>
        <p>Developed by Dheeraj mehra <FaRegCopyright id={styles.icon} /> 2024</p>
        </div>
        <div className={styles.iconcontainer}>
        <FaFacebookSquare className={styles.icons} />
        <FaSquareInstagram className={styles.icons} />
        <FaWhatsappSquare className={styles.icons} />

        </div>
    </div>
  )
}

export default Footer