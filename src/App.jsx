import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SolutionsPage from './pages/SolutionsPage'
import PickPlacePage from './pages/PickPlacePage'
import PalletizerPage from './pages/PalletizerPage'
import EndLinePage from './pages/EndLinePage'
import ImageProcessingPage from './pages/ImageProcessingPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen text-black font-semibold">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/pickplace" element={<PickPlacePage />} />
              <Route path="/palletizer" element={<PalletizerPage />} />
              <Route path="/endline" element={<EndLinePage />} />
              <Route path="/imageprocessing" element={<ImageProcessingPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
