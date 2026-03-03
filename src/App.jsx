import {  Routes, Route } from 'react-router-dom'
import Navbar from './Components/layout/Navbar'
import Home from './Pages/Home'
function App() {
  
  return (
    <>
    
  
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour/1" element={<div>Tour 1 Content</div>} />
        <Route path="/tour/2" element={<div>Tour 2 Content</div>} />
        <Route path="/tour/3" element={<div>Tour 3 Content</div>} />
        <Route path="/about" element={<div>About Us Content</div>} />
        <Route path="/contact" element={<div>Contact Content</div>} />
        </Routes>
        
    
      
    </>
  )
}

export default App
