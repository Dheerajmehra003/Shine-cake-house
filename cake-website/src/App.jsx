import './App.css'
import About from './Components/About'
import Choices from './Components/Choices'
import Emailsection from './Components/Emailsection'
import Flavour from './Components/Flavour'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Ocasion from './Components/Ocasion'
import Price from './Components/Price'
import Profile from './Components/Profile'

function App() {

  return (
    <>
     <Header/>
     <Profile/>
     <Price/>
     <Flavour/>
     <Choices/>
     <Ocasion/>
     <About/>
     <Emailsection/>
     <Footer/>
    </>
  )
}

export default App
