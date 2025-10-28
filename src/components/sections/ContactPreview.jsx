import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'

const ContactPreview = () => {
  const { t, language } = useLanguage()

  const content = {
    tr: {
      title: 'İletişim',
      subtitle: 'Projeleriniz için bizimle iletişime geçin',
      description: 'Robotik çözümleriniz için uzman ekibimizle görüşün. Size en uygun çözümü birlikte geliştirelim.',
      contactInfo: [
        { icon: '📧', label: 'E-posta', value: 'info@tulurobot.com' },
        { icon: '📞', label: 'Telefon', value: '+90 (212) 555 0123' },
        { icon: '📍', label: 'Adres', value: 'Ümraniye, İstanbul' }
      ]
    },
    en: {
      title: 'Contact',
      subtitle: 'Get in touch with us for your projects',
      description: 'Contact our expert team for your robotics solutions. Let\'s develop the most suitable solution together.',
      contactInfo: [
        { icon: '📧', label: 'Email', value: 'info@tulurobot.com' },
        { icon: '📞', label: 'Phone', value: '+90 (212) 555 0123' },
        { icon: '📍', label: 'Address', value: 'Ümraniye, Istanbul' }
      ]
    }
  }

  const currentContent = content[language] || content.tr

  return (
    <section className="py-20 bg-gradient-to-r from-1a237e via-2b3494 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{currentContent.title}</h2>
            <p className="text-xl text-gray-300 mb-8">{currentContent.subtitle}</p>
            <p className="text-gray-400 mb-8 leading-relaxed">{currentContent.description}</p>
            
            <div className="space-y-4 mb-8">
              {currentContent.contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                    <span className="text-xl">{info.icon}</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 transform hover:scale-105"
            >
              <span>{t('getInTouch')}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8">
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📞</div>
                  <p className="text-gray-300">Contact Us</p>
                </div>
              </div>
            </div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center"
            >
              <span className="text-white text-sm">💬</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center"
            >
              <span className="text-white text-xs">📧</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              className="absolute top-1/2 -left-6 w-5 h-5 bg-primary-400 rounded-full flex items-center justify-center"
            >
              <span className="text-white text-xs">📱</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactPreview
