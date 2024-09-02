import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Profile from './Components/Profile'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Underone from './Components/Underone';
import Undertwo from './Components/Undertwo';
import Underthree from './Components/Underthree';
import Lightchoclate from './Components/Lightchoclate';
import Choclatecakes from './Components/Choclatecakes';
import Strawberry from './Components/Strawberry';
import Butterscotchcakes from './Components/Butterscotchcakes';
import Pineapplecakes from './Components/Pineapplecakes';

function App() {

  return (
    <>
     <Header/>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/under299" element={<Underone  />} />
          <Route path="/under599" element={<Undertwo />} />
          <Route path="/under999" element={<Underthree />} />
          <Route path="/under299/:name/:price" element={<Lightchoclate/>} />
          <Route path="/choclatecakes" element={<Choclatecakes/>} />
          <Route path="/strawberrycakes" element={<Strawberry/>} />
          <Route path="/butterscotchcakes" element={<Butterscotchcakes/>} />
          <Route path="/pineapplecakes" element={<Pineapplecakes/>} />
        </Routes>
      </BrowserRouter>
     <Footer/>
    </>
  )
}

export default App
