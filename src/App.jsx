import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tagline from './Components/layout/Tagline'
import Navbar from './Components/layout/Navbar'
function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tagline />} />
        </Routes>
      </BrowserRouter>
      <Navbar/>
      
    </>
  )
}

export default App
