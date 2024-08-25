import React from 'react'
import styles from "./Profile.module.css"
import Ocasion from './Ocasion'
import Price from './Price'
import About from './About'
import Choices from './Choices'
import Emailsection from './Emailsection'
import Flavour from './Flavour'

function Profile() {
  return (
    <>
    <div className={styles.Profilecontainer}>
        <h1>Shine Cake House</h1>
         <p id={styles.headingtwo}>Egg Less Cakes</p>
    </div>
     <Price/>
     <Flavour/>
     <Choices/>
     <Ocasion/>
     <About/>
     <Emailsection/>
    </>
  )
}

export default Profile