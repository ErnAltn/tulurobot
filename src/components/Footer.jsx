import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { t, language } = useLanguage()

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-blue-900 border-t border-slate-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-4">
              <img 
                src="/Tulu-Robotics gumus.png" 
                alt="TULU ROBOT logosu - Endüstriyel robotik ve otomasyon çözümleri" 
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
                loading="lazy"
                width="128"
                height="128"
              />
            </div>
            <p className="text-white mb-4 max-w-md font-bold text-xs sm:text-sm">
              {t('companyDescription')}
            </p>
            <div className="space-y-1">
              <p className="text-white font-bold text-xs sm:text-sm">
                <span className="text-white">📍</span> {t('address')}
              </p>
              <p className="text-white font-bold text-xs sm:text-sm">
                <span className="text-white">✉️</span> {t('email')}
              </p>
              <p className="text-white font-bold text-xs sm:text-sm">
                <span className="text-white">📞</span> {t('phone')}
              </p>
              <p className="text-white font-bold text-xs sm:text-sm">
                <span className="text-white">📞</span> {t('phone2')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm sm:text-base font-bold text-white mb-3">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white hover:text-blue-200 transition-colors duration-200 font-bold text-xs sm:text-sm">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-blue-200 transition-colors duration-200 font-bold text-xs sm:text-sm">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-white hover:text-blue-200 transition-colors duration-200 font-bold text-xs sm:text-sm">
                  {t('solutions')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-blue-200 transition-colors duration-200 font-bold text-xs sm:text-sm">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm sm:text-base font-bold text-white mb-3">{t('solutions')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/palletizer" className="text-white hover:text-blue-200 transition-colors duration-200 font-bold text-xs sm:text-sm">
                  {t('palletizer')}
                </Link>
              </li>
              <li>
                <Link to="/image-processing" className="text-white hover:text-blue-200 transition-colors duration-200 font-bold text-xs sm:text-sm">
                  {t('imageProcessing')}
                </Link>
              </li>
              <li>
                <Link to="/pickplace" className="text-white hover:text-blue-200 transition-colors duration-200 font-bold text-xs sm:text-sm">
                  {t('pickPlace')}
                </Link>
              </li>
              <li>
                <Link to="/endline" className="text-white hover:text-blue-200 transition-colors duration-200 font-bold text-xs sm:text-sm">
                  {t('endLineSolutions')}
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-dark-700 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white text-xs sm:text-sm font-bold">
            © {new Date().getFullYear()} {t('company')}. {t('rights')}
          </p>
          <div className="flex space-x-4 sm:space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
              <span className="sr-only">X</span>
              <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
              <span className="sr-only">GitHub</span>
              <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
