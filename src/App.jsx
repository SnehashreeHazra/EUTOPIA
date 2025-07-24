
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './view/Home/Home'
import About from './view/About/About'

function App() {
  

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
      </Routes>
     </Router> 
    </>
  )
}

export default App
