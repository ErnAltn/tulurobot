import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import HeroSection from '../components/sections/HeroSection'
import AboutPreview from '../components/sections/AboutPreview'
import SolutionsPreview from '../components/sections/SolutionsPreview'
import useSEO from '../hooks/useSEO'
import seoData from '../data/seoData'

const HomePage = () => {
  const { t, language } = useLanguage()
  
  // SEO implementation
  const currentSeoData = seoData.home[language] || seoData.home.tr
  useSEO(currentSeoData)

  return (
    <div className="min-h-screen">
      <main role="main">
        <HeroSection />
        
        <AboutPreview />
        
        <SolutionsPreview />
      </main>
    </div>
  )
}

export default HomePage
