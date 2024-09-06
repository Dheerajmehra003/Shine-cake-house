import React, { useContext } from 'react'
import styles from './ProductItem.module.css'
import { FaStar } from "react-icons/fa";
import { Shopcontext } from '../Context/shopContext'
import { Link } from "react-router-dom";

const ProductItem = ({id,name,image,price}) => {
    const { currency} = useContext(Shopcontext);

  return (
    <div>
        <Link to={`/product/${id}`}>
         <div className={styles.cakescontainer}>
          <div className={styles.cake}>
          <img className={styles.image} src={image[0]} />
          <p>{name}
          </p>
            <div className={styles.rating}>
                <p>{currency}{price}</p>
                <div className={styles.iconcontainer} >
                <button className={styles.btn}>0.0</button>
                <FaStar className={styles.icon}/>
                </div>
            </div>
          </div>
          </div>
          </Link>
    </div>
  )
}

export default ProductItem