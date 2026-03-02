import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tagline from './Components/layout/Tagline'
import Navbar from './Components/layout/Navbar'
function App() {
  return (
    <>
    
  
        <Routes>
          <Route path="/" element={<Tagline />} />
        </Routes>
      
      <Navbar/>
      
    </>
  )
}

export default App
