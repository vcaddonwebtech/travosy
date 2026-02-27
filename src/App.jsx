
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tagline from './Components/layout/Tagline'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tagline />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
