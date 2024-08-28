import './App.css'
import LandingPage from './Pages/LandingPage'
import { Routes, Route } from 'react-router-dom'
import WatchHistory from './Pages/WatchHistory'
import Home from './Pages/Home'
import PagenotFound from './Pages/PagenotFound'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AddVideo from './Components/AddVideo'

function App() {

  return (
    <>

      <Header />

      <Routes>
        {/* landing page path  */}
        <Route path='/' element={<LandingPage />} />
        {/* Home page  */}
        <Route path='/home' element={<Home />} />
        {/* Watch-History page  */}
        <Route path='/watch-history' element={<WatchHistory />} />
        {/* Error  404 page not found */}
        <Route path='*' element={<PagenotFound />} />
        {/* add video  */}
        <Route path='/add-video' element={<AddVideo />} />
      </Routes>
      <Footer />


    </>
  )
}

export default App
