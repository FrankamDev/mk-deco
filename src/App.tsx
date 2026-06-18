import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import SalonShowcase from "./pages/SalonShowcase"
import Contact from "./pages/Contact"
import GalleryExpertise from "./components/GalleryExpertise"

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>

     <Route element={<SalonShowcase/>} path="/salon" />
     <Route element={<Home/>} path="/" />
     <Route element={<Contact/>} path="/contact" />
     <Route element={<GalleryExpertise/>} path="/gallery" />
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
