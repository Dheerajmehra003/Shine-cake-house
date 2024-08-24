import React from "react";
import styles from "./About.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function About() {
  return (
    <div className={styles.aboutconatiner}>
      <div className={styles.container}>
        <div className={styles.aboutheading}>
          <p >Shine Cake House</p>
        </div>
        <div className={styles.aboutheadingtwo}>
          <p>Connect with us</p>
        </div>
        <div className={styles.iconcontainer}>
        <FaPhoneAlt />
          <p>9911820415</p>
        </div>
        <div className={styles.iconcontainer}>
        <IoIosMail />
          <p>dheerajsinghmehra@0405gmail.com</p>
        </div>
      </div>
      <div className={styles.infocontainer}>
        <div className={styles.container}>
          <h4>Know us</h4>
          <p>
            Our story
            <br />
            Contact us <br />
            Locate us <br />
            Blog <br />
            Media <br />
            Careers <br />
          </p>
        </div>
        <div className={styles.container}>
          <h4>Need Help</h4>
          <p>
            FAQ
            <br />
            Cancellation & Refund <br />
            Privacy Policy <br />
            Terms & Conditions <br />
            Customer Grievance <br />
            Site Map <br />
          </p>
        </div>
        <div className={styles.container}>
          <h4>More Info</h4>
          <p>
            Corporate Cakes
            <br />
            Coupon & Offers <br />
            Franchise <br />
            Investor Relations <br />
            Stamps <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
