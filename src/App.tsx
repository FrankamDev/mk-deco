import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import SalonShowcase from "./pages/SalonShowcase"
import Contact from "./pages/Contact"

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>

     <Route element={<SalonShowcase/>} path="/salon" />
     <Route element={<Home/>} path="/" />
     <Route element={<Contact/>} path="/contact" />
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
