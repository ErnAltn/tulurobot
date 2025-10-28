import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import useSEO from '../hooks/useSEO'
import seoData from '../data/seoData'

const SolutionsPage = () => {
  const { t, language } = useLanguage()
  
  // SEO implementation
  const currentSeoData = seoData.solutions[language] || seoData.solutions.tr
  useSEO(currentSeoData)

  return (
    <div className="pt-16">
      <section className="relative py-10 bg-gradient-to-br from-black via-2b3494 to-1a237e">
        <div className="absolute inset-0 bg-[url('/tulutabela.png')] bg-cover bg-center opacity-80" role="img" aria-label="TULU ROBOT çözümleri - Endüstriyel robotik sistemler"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {t('solutionsTitle')}
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
              <p className="text-black text-base sm:text-lg leading-relaxed font-bold">
                {t('aboutSolutionsText')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="/3in1.png" 
                alt="TULU ROBOT Delta robot çözümleri - yüksek hız ve hassasiyetle üretim otomasyonu sağlayan endüstriyel robotik sistemler" 
                className="w-full max-h-96 object-contain"
                loading="lazy"
                width="600"
                height="384"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-vibrant-gray via-vibrant-lightGray to-vibrant-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">{t('coreSolutions')}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200/50"
              >
                <ul className="space-y-6">
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-medium group-hover:text-blue-700 transition-colors duration-200">
                      {t('coreSolutionsLeft1')}
                    </p>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-medium group-hover:text-blue-700 transition-colors duration-200">
                      {t('coreSolutionsLeft2')}
                    </p>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-medium group-hover:text-blue-700 transition-colors duration-200">
                      {t('coreSolutionsLeft3')}
                    </p>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200/50"
              >
                <ul className="space-y-6">
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-medium group-hover:text-blue-700 transition-colors duration-200">
                      {t('coreSolutionsLeft4')}
                    </p>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-medium group-hover:text-blue-700 transition-colors duration-200">
                      {t('coreSolutionsRight1')}
                    </p>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-medium group-hover:text-blue-700 transition-colors duration-200">
                      {t('coreSolutionsRight3')}
                    </p>
                  </li>
                </ul>
              </motion.div>
            </div>
            
         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative"
              >
                <img 
                  src="/palletizer.png" 
                  alt="TULU ROBOT palletizer robot sistemi - ağır yükleri güvenli ve verimli şekilde paletleyen otomatik sistem" 
                  className="w-full max-h-64 object-contain"
                  loading="lazy"
                  width="400"
                  height="256"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <img 
                  src="/palletizer2.png" 
                  alt="TULU ROBOT endüstriyel otomasyon sistemleri - üretim hatlarında verimliliği artıran robotik teknolojiler" 
                  className="w-full max-h-64 object-contain"
                  loading="lazy"
                  width="400"
                  height="256"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <img 
                  src="/palletizer3.png" 
                  alt="TULU ROBOT hat sonu çözümleri - paketleme ve paletleme operasyonlarını otomatikleştiren sistemler" 
                  className="w-full max-h-64 object-contain"
                  loading="lazy"
                  width="400"
                  height="256"
                />
              </motion.div>
            </div> */}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Pick & Place Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
              >
                <div className="text-center h-full flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-4">Pick & Place</h3>
                  <p className="text-black font-normal text-sm sm:text-base mb-6 flex-grow">
                    {t('pickPlaceDescription')}
                  </p>
                  <Link 
                    to="/pickplace" 
                    className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-700 to-slate-800 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-slate-700 transition-all duration-200 transform hover:scale-105 w-full text-center"
                  >
                    Daha fazla bilgi
                  </Link>
                </div>
              </motion.div>
              
              {/* Palletizer Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
              >
                <div className="text-center h-full flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-4">Palletizer</h3>
                  <p className="text-black font-normal text-sm sm:text-base mb-6 flex-grow">
                    {t('palletizerDescription')}
                  </p>
                  <Link 
                    to="/palletizer" 
                    className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-700 to-slate-800 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-slate-700 transition-all duration-200 transform hover:scale-105 w-full text-center"
                  >
                    Daha fazla bilgi
                  </Link>
                </div>
              </motion.div>
              
              {/* End Line Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
              >
                <div className="text-center h-full flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
                    {t('endLineTitle')}
                  </h3>
                  <p className="text-black font-normal text-sm sm:text-base mb-6 flex-grow">
                    {t('endLineDescription')}
                  </p>
                  <Link 
                    to="/endline" 
                    className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-700 to-slate-800 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-slate-700 transition-all duration-200 transform hover:scale-105 w-full text-center"
                  >
                    Daha fazla bilgi
                  </Link>
                </div>
              </motion.div>
              
              {/* Image Processing Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
              >
                <div className="text-center h-full flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
                    {t('imageProcessingTitle')}
                  </h3>
                  <p className="text-black font-normal text-sm sm:text-base mb-6 flex-grow">
                    {t('imageProcessingDescription')}
                  </p>
                  <Link 
                    to="/imageprocessing" 
                    className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-700 to-slate-800 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-slate-700 transition-all duration-200 transform hover:scale-105 w-full text-center"
                  >
                    Daha fazla bilgi
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  )
}

export default SolutionsPage
