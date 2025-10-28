import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import useSEO from '../hooks/useSEO'
import seoData from '../data/seoData'

const ImageProcessingPage = () => {
  const { t, language } = useLanguage()
  
  // SEO implementation
  const currentSeoData = seoData.imageprocessing[language] || seoData.imageprocessing.tr
  useSEO(currentSeoData)

  return (
    <div className="pt-16">
      <section className="relative py-10 bg-gradient-to-br from-white via-vibrant-lightGray to-vibrant-gray">
        <div className="absolute inset-0 bg-[url('/tulutabela.png')] bg-cover bg-center opacity-80" role="img" aria-label="TULU ROBOT görüntü işleme çözümleri - yapay zeka destekli sistemler"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {t('imageProcessingSolutions')}
          </motion.h1>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-r from-vibrant-lightGray via-vibrant-gray to-vibrant-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">{t('industrialImageProcessing')}</h2>
              <p className="text-lg text-black font-bold leading-relaxed">
                {t('imageProcessingMainDescription')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="/nok.png" 
                alt="Image Processing Solutions" 
                className="w-full max-h-96 object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-r from-vibrant-gray via-vibrant-lightGray to-vibrant-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6"
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-4">{t('defectDetection')}</h3>
              <p className="text-black font-bold leading-relaxed">{t('defectDetectionDescription')}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6"
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-4">{t('weightVolumeDetection')}</h3>
              <p className="text-black font-bold leading-relaxed">{t('weightVolumeDescription')}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6"
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-4">{t('barcodeReading')}</h3>
              <p className="text-black font-bold leading-relaxed">{t('barcodeReadingDescription')}</p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ImageProcessingPage
