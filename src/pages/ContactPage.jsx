import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import useSEO from '../hooks/useSEO'
import seoData from '../data/seoData'

const ContactPage = () => {
  const { t, language } = useLanguage()
  
  // SEO implementation
  const currentSeoData = seoData.contact[language] || seoData.contact.tr
  useSEO(currentSeoData)


  return (
    <div className="pt-16 pb-8" style={{background: 'linear-gradient(135deg, #ffffff 0%, #e3e3e3 50%, #cccccc 100%)'}}>
      <section className="relative py-10">
        <div className="absolute inset-0 bg-[url('/tulutabela.png')] bg-cover bg-center opacity-80" role="img" aria-label="TULU ROBOT iletişim - Endüstriyel robotik çözümler için profesyonel danışmanlık"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {t('contactPageTitle')}
          </motion.h1>

        </div>
      </section>
  
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-lg sm:text-xl text-black font-bold">{t('contactPageSubtitle')}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-vibrant-blue to-vibrant-darkBlue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-4">{t('contactAddress')}</h3>
              <p className="text-black font-bold text-sm sm:text-base">{t('contactAddressText')}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-vibrant-blue to-vibrant-darkBlue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-4">{t('contactPhone')}</h3>
              <p className="text-black font-bold text-sm sm:text-base">{t('contactPhoneText')}</p>
              <p className="text-black font-bold text-sm sm:text-base">{t('contactPhoneText2')}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-vibrant-blue to-vibrant-darkBlue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-4">{t('contactEmailLabel')}</h3>
              <p className="text-black font-bold text-sm sm:text-base">{t('contactEmailText')}</p>
            </motion.div>
            
          </div>
        </div>
      </section>

    </div>
  )
}

export default ContactPage
