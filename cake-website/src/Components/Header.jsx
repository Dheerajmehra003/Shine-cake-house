import React, { useContext } from "react";
import styles from "./Header.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { Shopcontext } from "../Context/shopContext";

function Header() {
  const {getCartCount} = useContext(Shopcontext)
  return (
    <>
    <div className={styles.headerscontainer}>
    <div className={styles.headercontainer}>
      <nav>Shine Cake House </nav>

      <ul className={styles.headerlist}>
      <Link className={styles.link} to="/">
      <li className={styles.list}>HOME</li>
      </Link>
      <Link className={styles.link} to='/birthday/birthday'>
      <li className={styles.list}>BIRTHDAY</li>
      </Link>
      <Link className={styles.link} to='/anniversary/anniversary'>
      <li className={styles.list}>ANNIVERSARY</li>
      </Link>
      <li className={styles.list}>ABOUT</li>
      <li className={styles.list}>CONTACT </li>
        <li>
          <Link className={styles.cartlink} to="/cart">
          <FiShoppingCart className={styles.carticon} />
                    <p className={styles.notification}>{getCartCount()}</p>
                    </Link>
        </li>
        <li>
        <IoPerson  className={styles.carticon}  />
        </li>
      </ul>
      <div className={styles.menu}>
      <IoMenu />
      </div>
    </div>
    <div>
        <ol className={styles.secondheader}>
            <li>CHOCLATE
            <FaCaretDown />
            </li>
            <li>BUTTERSCOTCH
            <FaCaretDown />
            </li>
            <li>PINEAPPLE
            <FaCaretDown />
            </li>
            <li>STRAWBERRY
            <FaCaretDown />
            </li>
            <li>VANILLA
            <FaCaretDown />
            </li>
            <li>BLUEBERRY
            <FaCaretDown />
            </li>
            <li>REDVALVET
            <FaCaretDown />
            </li>
            <li>BLACK FOREST
            <FaCaretDown />
            </li>
            <li>WHITE FOREST
            <FaCaretDown />
            </li>
        </ol>

    </div>
    </div>
</>  
);

}

export default Header;
