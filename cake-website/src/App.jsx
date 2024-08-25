import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Profile from './Components/Profile'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Underone from './Components/Underone';
import Undertwo from './Components/Undertwo';
import Underthree from './Components/Underthree';

function App() {

  return (
    <>
     <Header/>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/under299" element={<Underone />} />
          <Route path="/under599" element={<Undertwo />} />
          <Route path="/under999" element={<Underthree />} />
        </Routes>
      </BrowserRouter>
     <Footer/>
    </>
  )
}

export default App
