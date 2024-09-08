import React,{useContext,useState,useEffect} from 'react'
import Cakeimage from "./Cakeimage"
import { Shopcontext } from "../Context/shopContext";
import styles from "./cakeflavour.module.css"

const CakeFlavour = () => {
    const { products } = useContext(Shopcontext);
    const [latestProducts, setLatestProducts] = useState([]);
    useEffect(() => {
      setLatestProducts(products.slice(2, 8));
    }, []);
    return (
      <>
        <div className={styles.flavourcontainer}>
        <div className={styles.flavourinfo}>
     <p>Pick A Flavour</p>
        </div>
         <div className={styles.flavours}>
              {latestProducts.map((item, index) => (
                <Cakeimage 
                  key={index}
                  category={item.category}
                  image={item.image}
                  name={item.name}
                />
              ))}
            </div>
          
        </div>
      </>
    );
}

export default CakeFlavour