import React, { useContext, useEffect, useState } from "react";
import styles from "./choclate.module.css";
import ProductItem from "../Components/ProductItem";
import { Shopcontext } from "../Context/shopContext";
import { useParams } from "react-router-dom";


const Choclatecakes = () => {
  const {category}=useParams();
  const { products,currency } = useContext(Shopcontext);
  const [productData , setProductData]=useState('')
  const [data,setData]= useState([])

  const applyfilter=()=>{
    let productsCopy =products.slice();
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
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
          <p>Get Your Desired Cakes</p>
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

export default Choclatecakes