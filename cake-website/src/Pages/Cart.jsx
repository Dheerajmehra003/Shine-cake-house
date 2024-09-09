import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../Context/shopContext";
import styles from "./Cart.module.css";
// import { RiDeleteBin6Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import CartTotal from "../Components/CartTotal";
const Cart = () => {
  const { products, currency, cartItems,updateQuantity } = useContext(Shopcontext);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);
  return (
    <div className={styles.cartcontainer}>
      <div className={styles.cartTitle}>
        <p>Your Cart</p>
      </div>
      <div className={styles.container}>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          const price=0;
       const calculateprice=(price)=>{
        if(item.size==="1/2kg"){
         return price=productData.price
        }
        else if(item.size==="1kg"){
          return price=productData.price*2
        }
        else{
          return price=productData.price*4
        }
       }
          return (
            <div key={index} className={styles.container}>
              <div className={styles.product}>
                <img
                  className={styles.cartimage}
                  src={productData.image[0]}
                  alt=""
                />
                <div className={styles.productinfo}>
                  <p className={styles.name}>{productData.name}</p>
                  <div>
                    <p className={styles.price}>
                      {currency}
                      {calculateprice(price)}
                    </p>
                    <p className={styles.size}>{item.size}</p>
                  </div>
                </div>
                <input onChange={(e)=>e.target.value==='' || e.target.value==='0'? null : updateQuantity(item._id,item.size,Number(e.target.value))} className={styles.quantity} type="number"   min={1} defaultValue={item.quantity}/>
                {/* <RiDeleteBin6Line className={styles.deleteicon} /> */}
                <MdDelete onClick={()=>updateQuantity(item._id,item.size,0)} className={styles.deleteicon}  />
              </div>
            </div>
          );
        })}
        {/* <div>
          <div  className={styles.cartTotal}>
            <CartTotal/>
            <div>
              <button className={styles.btn}>Proceed </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Cart;
