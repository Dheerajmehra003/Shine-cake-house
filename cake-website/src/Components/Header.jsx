import React, { useContext, useState } from "react";
import styles from "./Header.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";
import { Link,NavLink } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { Shopcontext } from "../Context/shopContext";

function Header() {
  const { getCartCount } = useContext(Shopcontext);
  const [isopen,setisopen]=useState(false);
  function updateicon(){
  setisopen(!isopen);
  }
 
  return (
    <>
      <div className={styles.headerscontainer}>
        <div className={styles.headercontainer}>
          <nav>Shine Cake House </nav>
        
          <ul className={styles.listcontainer}>
      
            <Link className={styles.link} to="/">
              <li className={styles.list}>HOME</li>
            </Link>
            <Link className={styles.link} to="/birthday/birthday">
              <li className={styles.list}>BIRTHDAY</li>
            </Link>
            <Link className={styles.link} to="/anniversary/anniversary">
              <li className={styles.list}>ANNIVERSARY</li>
            </Link>
            <li className={styles.list}>ABOUT</li>
            <li className={styles.list}>CONTACT </li>
          </ul>
         
          <div className={styles.icons}>
            <div>
            <Link className={styles.cartlink} to="/cart">
              <FiShoppingCart className={styles.carticon} />
              <p className={styles.notification}>{getCartCount()}</p>
            </Link>
            </div>
             <div>
            <IoPerson className={styles.carticon} />
             </div>
            <div className={styles.menu}>
            <IoMenu onClick={()=>updateicon()} className={styles.carticon}/>
            </div>
            {/* side bar for small screen */}
            <div className={isopen ? styles.headerlist : styles.activeheaderlist}>
              <NavLink onClick={()=>updateicon(false)} className={styles.navlink} to={'/'}>HOME</NavLink>
              <NavLink onClick={()=>updateicon(false)} className={styles.navlink} to={"/birthday/birthday"}>BIRTHDAY</NavLink>
              <NavLink onClick={()=>updateicon(false)} className={styles.navlink} to={'/anniversary/anniversary'}>ANNIVERSARY</NavLink>
              <NavLink onClick={()=>updateicon(false)} className={styles.navlink} >ABOUT</NavLink>
              <NavLink onClick={()=>updateicon(false)} className={styles.navlink}>CONTACT</NavLink>
            </div>
            </div>
          </div>
        </div>
        <div>
          <ol className={styles.secondheader}>
            <li>
              CHOCLATE
              <FaCaretDown />
            </li>
            <li>
              BUTTERSCOTCH
              <FaCaretDown />
            </li>
            <li>
              PINEAPPLE
              <FaCaretDown />
            </li>
            <li>
              STRAWBERRY
              <FaCaretDown />
            </li>
            <li>
              VANILLA
              <FaCaretDown />
            </li>
            <li>
              BLUEBERRY
              <FaCaretDown />
            </li>
            <li>
              REDVALVET
              <FaCaretDown />
            </li>
            <li>
              BLACK FOREST
              <FaCaretDown />
            </li>
            <li>
              WHITE FOREST
              <FaCaretDown />
            </li>
          </ol>
        </div>
      
    </>
  );
}

export default Header;
