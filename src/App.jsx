import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './component/header'
import Home from './component/Home'
import Cart from './component/cart'

function App() {
  const [cart,setCart]=useState([])

  return (
    <>

    
    <BrowserRouter>
      <Header cart={cart} />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home cart={cart} setCart={setCart} />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>


      </div>
    </BrowserRouter>
    </>
  )
}

export default App
