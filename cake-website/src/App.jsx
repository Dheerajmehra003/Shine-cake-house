import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Profile from './Components/Profile'
import {  Routes, Route } from "react-router-dom";
import Underone from './Price/Underone'
import Lightchoclate from './Components/Lightchoclate';
import Underthree from './Price/Underthree';
import Choclatecakes from './Flavour/Choclatecakes';
import Cart from './Pages/Cart';

function App() {

  return (
    <>
     <Header/>
    
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/under299" element={<Underone  />} />
          <Route path='/product/:productID' element={<Lightchoclate/>}/>
          <Route path='/under999' element={<Underthree/>}/>
          <Route path='/Choclate' element={<Choclatecakes/>}/>
          <Route path='/cart' element={<Cart/>}/>
         
        </Routes>
     <Footer/>
    </>
  )
}

export default App
