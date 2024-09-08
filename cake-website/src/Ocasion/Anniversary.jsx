import React, { useContext, useEffect, useState } from "react";
import styles from "../Flavour/choclate.module.css";
import ProductItem from "../Components/ProductItem";
import { Shopcontext } from "../Context/shopContext";
import { useParams } from "react-router-dom";

const Anniversary = () => {
  const {subcategory}=useParams();
  const { products } = useContext(Shopcontext);
  const [data,setData]= useState([])

  const applyfilter=()=>{
    let productsCopy =products.slice();
    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subcategory.includes(item.subcategory)
      );
    }
    setData(productsCopy)
  }
  useEffect(()=>{
   applyfilter()

  },[])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.underinfo}>
          <p>Anniversary Cakes</p>
          <div className={styles.productcontainer}>
            {data.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                price={item.price}
                name={item.name}
              />
            ))}
          </div>
        
        </div>
      </div>
    </>
  )
}

export default Anniversary