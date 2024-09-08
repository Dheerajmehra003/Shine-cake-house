import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Profile from './Components/Profile'
import {  Routes, Route } from "react-router-dom";
import Underone from './Price/Underone'
import Lightchoclate from './Components/Lightchoclate';
import Choclatecakes from './Flavour/Choclatecakes';
import Birthday from './Ocasion/Birthday';
import Cart from './Pages/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Anniversary from './Ocasion/Anniversary';

function App() {

  return (
    <>
    <ToastContainer/>
     <Header/>
    
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path='/product/:productID' element={<Lightchoclate/>}/>
          <Route path="/under299/:price" element={<Underone  />} />
          <Route path='/Choclate/:category' element={<Choclatecakes/>}/>
          <Route path='/birthday/:subcategory' element={<Birthday/>}/>
          <Route path='/anniversary/:subcategory' element={<Anniversary/>}/>
          
          <Route path='/cart' element={<Cart/>}/>
         
        </Routes>
     <Footer/>
    </>
  )
}

export default App
