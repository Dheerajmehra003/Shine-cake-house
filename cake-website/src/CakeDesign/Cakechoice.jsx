import React,{useContext,useState,useEffect} from 'react'
import Cakeimage from "../Components/Cakeimage"
import { Shopcontext } from "../Context/shopContext";
import styles from "../Components/cakeflavour.module.css"

const Cakechoice = () => {
    const { products } = useContext(Shopcontext);
    const [latestProducts, setLatestProducts] = useState([]);
    useEffect(() => {
      setLatestProducts(products.slice(10, 18));
    }, []);
    return (
      <>
        <div className={styles.flavourcontainer}>
        <div className={styles.flavourinfo}>
     <p>Tempting Cake Choices</p>
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

export default Cakechoice