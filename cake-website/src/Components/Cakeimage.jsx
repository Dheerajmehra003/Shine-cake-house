import React, { useContext } from 'react'
import { Shopcontext } from '../Context/shopContext'
import { Link } from "react-router-dom";
import styles from "./cakeflavour.module.css"

const Cakeimage = ({category,name,image,}) => {
  

  return (
    <div>
    <Link className={styles.link} to={`/Choclate/${category}`}>
  
      <img className={styles.image} src={image[0]} />
       <p className={styles.info}>{name}</p>

      </Link>
</div>
  )
}

export default Cakeimage;