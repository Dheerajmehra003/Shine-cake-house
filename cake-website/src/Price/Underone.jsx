import React, { useContext, useEffect, useState } from "react";
import styles from "./Underone.module.css";
import ProductItem from "../Components/ProductItem";
import { Shopcontext } from "../Context/shopContext";

function Underone() {
  const { products } = useContext(Shopcontext);
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);
  return (
    <>
      <div className={styles.Underonecontainer}>
        <div className={styles.underinfo}>
          <p>Cakes under 299</p>
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

export default Underone;
