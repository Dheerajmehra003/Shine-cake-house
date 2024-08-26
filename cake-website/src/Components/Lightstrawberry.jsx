import React from 'react'
import styles from "./Lightchoclate.module.css";
import Flavour0ne from "./images/strawberry.jpg";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";

function Lightstrawberry() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.imagecontainer}>

      <img className={styles.image} src={Flavour0ne} />
      </div>
      <div>
        <p className={styles.font}>Light choclate half kg</p>
        <div className={styles.iconcontainer}>
          <button className={styles.btn}>0.0</button>
          <FaStar className={styles.icon} />
        </div>
        <p className={styles.font}>₹280</p>
        <p className={styles.fontupgrade}>Pick an Upgrade</p>
        <div className={styles.imagecontainer}>
          <div>
            <img className={styles.images} src={Flavour0ne} />
            <p>
              1/2 kg <br /> ₹280
            </p>
          </div>
          <div>
            <img className={styles.images} src={Flavour0ne} />
            <p>
              1 kg <br /> ₹550
            </p>
          </div>
          <div>
            <img className={styles.images} src={Flavour0ne} />
            <p>
              2 kg <br /> ₹1100
            </p>
          </div>
        </div>
        <form className={styles.form}>
          <input className={styles.inputstyle} type="text" placeholder="Enter Delivery Location" />
          <input className={styles.inputstyle}  type="date" placeholder="Select Delivery Date" /> <br />
          <input className={styles.inputstyle}  type="message" placeholder="Message on cake" />
        </form>
        <div className={styles.iconscontainer}>
          <div className={styles.cart}>
            <p>Add To cart</p>
          </div>
            <FaCartPlus className={styles.iconcart} />
          <div className={styles.buy}>
            <p>Buy Now</p>
          </div>
            <AiFillThunderbolt className={styles.iconcart} />
        </div>
        <div>
          <p className={styles.description} >Description</p>
          <p className={styles.lists} >Product Details:</p>
          <ul>
              <li>Cake Flavour-Choclate</li>
              <li>Type of cake-cream cake</li>
              <li>Shape-round</li>
              <li>Weight-500gm</li>
              <li>Net Quantity-1 Cake</li>
              <li>Country of origin-India</li>
              <li>Serves-4-6 people</li>
          </ul>
          <p className={styles.listtwo} >Ingredients:</p>
          <ul>
              <li>Chocolate premix, Refined oil, Breakfast Sugar, Chocolate Truffle Base,<br/>
                   Dark Chocolate compound, Milk chocolate compound, Chocolate Glaze</li>
          </ul>
          <p className={styles.listtwo} >Please Note:</p>
          <ul>
              <li>The cake stand, cutlery accessories used in the image are only for  <br/>
                   representation purposes. They are not delivered with the cake</li>
               <li>This cake is hand delivered in a good quality cardboard box.</li>    
          </ul>
          <p className={styles.listtwo} >Delivery Information:</p>
          <ul>
              <li>Every cake we offer is handcrafted and since each chef has his/her<br/>
                   own way of baking and designing a cake, there might be slight variation <br/>
                   in the product in terms of design and shape</li>
              <li>The chosen delivery time is an estimate and depends on the availability of<br/>
                   the product and the destination to which you want the product to be delivered.</li>
              <li>Since cakes are perishable in nature, we attempt delivery of your order only once.</li> 
              <li>The delivery cannot be redirected to any other address.</li> 
              <li>This product is hand delivered and will not be delivered along with courier products.</li>        
          </ul>
        </div>
      </div>
    </div>
  </>
  )
}

export default Lightstrawberry;