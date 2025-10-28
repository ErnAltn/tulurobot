import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'

const HeroSection = () => {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-vibrant-lightGray to-vibrant-gray">
       {/* <div className="absolute inset-0 bg-[url('public\Sequence_02_2.mp4')] bg-cover bg-center opacity-80" role="img" aria-label="Endüstriyel robotik ve otomasyon teknolojileri"></div>*/}
<div className="absolute inset-0 overflow-hidden">
  <video
    className="w-full h-full object-cover opacity-100"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="public/Sequence_02_2.mp4" type="video/mp4" />
  </video>

  {/* Video üzerine siyah transparan overlay - saydamlık oranını değiştirmek için bg-opacity değerini değiştirin */}
  

  <div
    className="absolute inset-0"
    role="img"
    aria-label="Endüstriyel robotik ve otomasyon teknolojileri"
  ></div>
</div>

      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-vibrant-blue rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Tüm video boyutunda arka plan - saydamlık oranını değiştirmek için bg-opacity değerini değiştirin */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      
      <div className="absolute bottom-0 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8 text-center pb-8">
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-300"
          >
            {t('heroTitle')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-large md:text-small text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal px-4"
          >
            {t('heroSubtitle')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center px-4"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-700 to-slate-800 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:from-blue-600 hover:to-slate-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-700/25 text-center text-sm sm:text-base"
            >
              {t('contact')}
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto border-2 border-blue-700 text-blue-700 font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-200 transform hover:scale-105 text-center text-sm sm:text-base"
            >
              {t('learnMore')}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-blue-700 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-blue-700 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
