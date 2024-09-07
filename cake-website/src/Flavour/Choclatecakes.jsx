import React, { useContext, useEffect, useState } from "react";
import styles from "../Price/Underone.module.css";
import ProductItem from "../Components/ProductItem";
import { Shopcontext } from "../Context/shopContext";


const Choclatecakes = () => {
  const { products } = useContext(Shopcontext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products);
  }, []);
  return (
    <>
      <div className={styles.Underonecontainer}>
        <div className={styles.underinfo}>
          <p>Get Your Desired Cakes</p>
          <div className={styles.productcontainer}>
            {latestProducts.map((item, index) => (
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
  );
}

export default Choclatecakes