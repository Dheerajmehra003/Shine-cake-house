import React, { useContext, useEffect, useState } from "react";
import styles from "./Lightchoclate.module.css";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { Shopcontext } from "../Context/shopContext";

function Lightchoclate() {
  const {productID} = useParams();
  const{products,addToCart} = useContext(Shopcontext)
  const [productData , setProductData]=useState('')
  const [image , setImage]=useState('')
  const [size,setSize]=useState('')


  const fetchProductData = async () => {
    products.map((item)=>{
      if(item._id === productID) {
        setProductData(item)
         setImage(item.image[0])
        return null;
      }
    })
  }
    useEffect(()=>{
    fetchProductData()
  },[products])
  return productData ?(
    <>
      <div className={styles.container}>
        <div className={styles.imagecontainer}>

        <img className={styles.image} src={image} />
        </div>
        <div>
          <p className={styles.font}>{productData.name} half kg</p>
          <div className={styles.iconcontainer}>
            <button className={styles.btn}>0.0</button>
            <FaStar className={styles.icon} />
          </div>
          <p className={styles.font}>₹{productData.price}</p>
          <p className={styles.fontupgrade}>Pick a size</p>
          <div className={styles.imagecontainer}>
            <div onClick={()=>setSize(productData.sizeone)}  >
              <img className={`${size===productData.sizeone? styles.border:"" } ${styles.images}`} src={image} />
              <p>
                {productData.sizeone} <br /> ₹{productData.price}
              </p>
            </div>
            <div onClick={()=>setSize(productData.sizetwo)}>
            <img className={`${size===productData.sizetwo? styles.border:"" } ${styles.images}`} src={image} />
              <p>
                {productData.sizetwo} <br /> ₹{productData.price *2}
              </p>
            </div>
            <div onClick={()=>setSize(productData.sizethree)}>
            <img className={`${size===productData.sizethree? styles.border:"" } ${styles.images}`} src={image} />
              <p>
                {productData.sizethree} <br /> ₹{productData.price*4}
              </p>
            </div>
          </div>
          {/* <form className={styles.form}>
            <input className={styles.inputstyle} type="text" placeholder="Enter Delivery Location" />
            <input className={styles.inputstyle}  type="date" placeholder="Select Delivery Date" /> <br />
            <input className={styles.inputstyle}  type="message" placeholder="Message on cake" />
          </form> */}
          <div className={styles.iconscontainer}>
            <div >
              <button className={styles.cart} onClick={()=>addToCart(productData._id,size)}>Add To cart</button>
            </div>
              <FaCartPlus  onClick={()=>addToCart(productData._id,size)}  className={styles.iconcart} />
            
          </div>
          <div className={styles.descrip}>
            <p className={styles.description} >Description</p>
            <p className={styles.lists} >Product Details:</p>
            <ul>
                <li>Cake-{productData.name}</li>
                <li>Type of cake-cream cake</li>
                <li>Shape-round</li>
                <li>Weight-500gm</li>
                <li>Net Quantity-1 Cake</li>
                <li>Country of origin-India</li>
                <li>Serves-4-6 people</li>
            </ul>
            <p className={styles.listtwo} >Ingredients:</p>
            <ul>
                <li>{productData.description}</li>
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
  ): <div></div>
};

export default Lightchoclate;
