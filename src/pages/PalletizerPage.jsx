import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import useSEO from '../hooks/useSEO'
import seoData from '../data/seoData'

const PalletizerPage = () => {
  const { t, language } = useLanguage()
  
  // SEO implementation
  const currentSeoData = seoData.palletizer[language] || seoData.palletizer.tr
  useSEO(currentSeoData)

  return (
    <div className="pt-16">
      <section className="relative py-10 bg-gradient-to-br from-white via-vibrant-lightGray to-vibrant-gray">
        <div className="absolute inset-0 bg-[url('/tulutabela.png')] bg-cover bg-center opacity-80" role="img" aria-label="TULU ROBOT Palletizer robot çözümleri - ağır yük paletleme sistemleri"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {t('palletizerSolutions')}
          </motion.h1>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-r from-vibrant-lightGray via-vibrant-gray to-vibrant-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">{t('palletizerRobot')}</h2>
              <p className="text-lg sm:text-xl text-black font-bold mb-6">{t('palletizerRobotDescription')}</p>
              <p className="text-base sm:text-lg text-black font-bold leading-relaxed">
                {t('palletizerDetailedDescription')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="/palletizer.png" 
                alt="TULU ROBOT Palletizer robot sistemi - ağır yükleri güvenli ve verimli şekilde paletleyen otomatik robotik sistem" 
                className="w-full max-h-96 object-contain"
                loading="lazy"
                width="600"
                height="384"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-r from-vibrant-gray via-vibrant-lightGray to-vibrant-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
                {t('palletizerSectorSolutions')}
              </h2>
              <p className="text-base sm:text-lg text-black font-bold leading-relaxed">
                {t('palletizerSectorSolutionsText')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="/palletizer2.png" 
                alt="TULU ROBOT sektörel palletizer çözümleri - farklı ürün tiplerini paletleyen esnek robotik sistemler" 
                className="w-full max-h-96 object-contain"
                loading="lazy"
                width="600"
                height="384"
              />
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default PalletizerPage
