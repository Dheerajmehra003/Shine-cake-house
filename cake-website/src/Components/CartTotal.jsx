import React, { useContext } from 'react'
import { Shopcontext } from '../Context/shopContext'
import styles from './CartTotal.module.css'

const CartTotal = () => {
    const{currency,delivery_fee ,getCartAmount} = useContext(Shopcontext);
  return (
    <div className={styles.cartTotalcontainer}>
        <div className={styles.totalinfo}>
         <p>Cart Total</p>
        </div>
        <div>
            <div className={styles.subtotal}>
              <p>Subtotal</p>
              <p>{currency}{getCartAmount()}.00</p>
            </div>
            <hr />
            <div className={styles.shippingfee}>
              <p>Shipping Fee</p>
              <p>{currency}{delivery_fee}.00</p>
            </div>
            <hr />
            <div className={styles.total}>
                <b>Total</b>
                <b>{currency}{getCartAmount()===0? 0 : getCartAmount() + delivery_fee}.00</b>

            </div>

        </div>
    </div>
  )
}
export default CartTotal;