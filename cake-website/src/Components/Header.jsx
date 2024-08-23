import React from "react";
import styles from "./Header.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";

function Header() {
  return (
    <>
    <div className={styles.headercontainer}>
      <nav>Shine Cake </nav>

      <ul>
        <li>
          <form>
            <div className={styles.searchbar}>
              <input id={styles.search} type="text" placeholder="search here..." />
              <CiSearch id={styles.searchicon} />
            </div>
          </form>
        </li>
        <li>
            <div className={styles.searchbar}>
            <button id={styles.btn}>select Delivery Location</button>
            <IoLocationSharp id={styles.locationicon} />
            </div>
        </li>
        <li>Birthday</li>
        <li>Anniversary</li>
        <li>
          <FiShoppingCart id={styles.carticon} />
        </li>
        <li>
          <IoPersonOutline id={styles.carticon}  />
        </li>
      </ul>
    </div>
    <div className={styles.secondheader}>
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
</>  
);

}

export default Header;
