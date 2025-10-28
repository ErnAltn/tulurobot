import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'

const SolutionsPreview = () => {
  const { t } = useLanguage()

  return (
    <section className="py-6 bg-gradient-to-r from-vibrant-gray via-vibrant-lightGray to-vibrant-gray" role="region" aria-labelledby="solutions-preview-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 id="solutions-preview-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{t('solutionsTitle')}</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-6">
              <img 
                src="/delta-1.png" 
                alt="TULU ROBOT Pick & Place Delta robot sistemi - yüksek hız ve hassasiyetle üretim otomasyonu" 
                className="w-full max-h-80 object-contain mx-auto"
                loading="lazy"
                width="400"
                height="320"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">{t('pickPlaceTitle')}</h3>
            <p className="text-black font-normal text-base sm:text-lg">{t('pickPlaceDescription')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="mb-6">
              <img 
                src="/palletizer.png" 
                alt="TULU ROBOT Palletizer robot sistemi - ağır yükleri güvenli ve verimli şekilde paletleyen otomatik sistem" 
                className="w-full max-h-80 object-contain mx-auto"
                loading="lazy"
                width="400"
                height="320"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">{t('palletizerTitle')}</h3>
            <p className="text-black font-normal text-base sm:text-lg">{t('palletizerDescription')}</p>
          </motion.div>
        </div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-4"
        >
          <Link
            to="/solutions"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-700 to-slate-800 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-600 hover:to-slate-700 transition-all duration-200 transform hover:scale-105"
          >
            <span>{t('viewAllSolutions')}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionsPreview
