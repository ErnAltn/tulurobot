import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import useSEO from '../hooks/useSEO'
import seoData from '../data/seoData'

const AboutPage = () => {
  const { t, language } = useLanguage()
  
  // SEO implementation
  const currentSeoData = seoData.about[language] || seoData.about.tr
  useSEO(currentSeoData)

  return (
    <div className="pt-16">
      <section className="relative py-6 bg-gradient-to-br from-white via-vibrant-lightGray to-vibrant-gray">
        <div className="absolute inset-0 bg-[url('public/tulutabela.png')] bg-cover bg-center opacity-90" role="img" aria-label="TULU ROBOT hakkında - Endüstriyel robotik teknolojileri"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {t('aboutPageTitle')}
          </motion.h1>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-vibrant-lightGray via-vibrant-gray to-vibrant-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">{t('aboutPageSubtitle')}</h2>
              <p className="text-black text-base sm:text-lg leading-relaxed font-medium">
                {t('aboutWhoWeAre')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="/tulutabela.png" 
                alt="TULU ROBOT palletizer robot sistemi - ağır yükleri güvenli şekilde paletleyen endüstriyel otomasyon teknolojisi" 
                className="w-full max-h-96 object-contain"
                loading="lazy"
                width="600"
                height="500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-vibrant-lightGray via-vibrant-gray to-vibrant-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Misyon Kartı */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-6">{t('aboutMission')}</h3>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-medium">{t('aboutMissionText')}</p>
            </motion.div>
            
            {/* Vizyon Kartı */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-6">{t('aboutVision')}</h3>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-medium">{t('aboutVisionText')}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
