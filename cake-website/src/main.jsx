import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ShopContextProvider from './Context/shopContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
  </BrowserRouter>

)
