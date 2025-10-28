import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [solutionsDropdown, setSolutionsDropdown] = useState(false)
  const location = useLocation()
  const { t, toggleLanguage, language } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { 
      path: '/solutions', 
      label: t('solutions'),
      hasDropdown: true,
      dropdownItems: [
        { path: '/pickplace', label: 'Pick & Place' },
        { path: '/palletizer', label: 'Palletizer' },
        { path: '/endline', label: 'Hat Sonu Çözümleri' },
        { path: '/imageprocessing', label: 'Görüntü İşleme Çözümleri' }
      ]
    },
    { path: '/contact', label: t('contact') },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 to-blue-900 backdrop-blur-md shadow-lg border-b border-slate-800"
      role="navigation"
      aria-label="Ana navigasyon menüsü"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="/Tulu-Robotics gumus.png" 
              alt="TULU ROBOT logosu - Endüstriyel robotik ve otomasyon çözümleri" 
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
              loading="eager"
              width="192"
              height="192"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.path} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setSolutionsDropdown(true)}
                    onMouseLeave={() => setSolutionsDropdown(false)}
                    className="relative"
                  >
                    <Link
                      to={item.path}
                      className={`relative px-3 py-2 text-base font-bold transition-colors duration-200 ${
                        location.pathname === item.path || location.pathname.startsWith('/solutions') || location.pathname.startsWith('/pickplace')
                          ? 'text-white'
                          : 'text-white hover:text-blue-200'
                      }`}
                    >
                      {item.label}
                      <span className="ml-1">▼</span>
                    </Link>
                    
                    <AnimatePresence>
                      {solutionsDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              className={`block px-4 py-3 text-sm font-bold transition-colors duration-200 ${
                                location.pathname === dropdownItem.path
                                  ? 'text-black bg-gray-100'
                                  : 'text-black hover:bg-gray-100'
                              }`}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`relative px-3 py-2 text-base font-bold transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-white'
                        : 'text-white hover:text-blue-200'
                    }`}
                  >
                    {item.label}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
            
             <button
               onClick={toggleLanguage}
               className="flex items-center space-x-2 px-3 py-2 text-base font-bold text-white hover:text-blue-200 transition-colors duration-200"
             >
              <span className="text-lg">{language === 'tr' ? '🇹🇷' : '🇺🇸'}</span>
              <span>{language === 'tr' ? 'EN' : 'TR'}</span>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-vibrant-lightGray focus:outline-none focus:text-vibrant-lightGray"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gradient-to-r from-slate-900 to-blue-900 backdrop-blur-md border-b border-slate-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.hasDropdown ? (
                    <div className="space-y-1">
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-3 py-2 text-base font-bold transition-colors duration-200 ${
                          location.pathname === item.path || location.pathname.startsWith('/solutions') || location.pathname.startsWith('/pickplace')
                            ? 'text-white bg-white/20'
                            : 'text-white hover:text-blue-200 hover:bg-white/10'
                        }`}
                      >
                        {item.label}
                      </Link>
                      <div className="ml-4 space-y-1">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 text-sm font-bold transition-colors duration-200 ${
                              location.pathname === dropdownItem.path
                                ? 'text-blue-200 bg-white/20'
                                : 'text-white hover:text-blue-200 hover:bg-white/10'
                            }`}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 text-base font-bold transition-colors duration-200 ${
                        location.pathname === item.path
                          ? 'text-white bg-white/20'
                          : 'text-white hover:text-blue-200 hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 w-full px-3 py-2 text-base font-bold text-white hover:text-blue-200 hover:bg-white/10 transition-colors duration-200"
              >
                <span className="text-lg">{language === 'tr' ? '🇹🇷' : '🇺🇸'}</span>
                <span>{language === 'tr' ? 'English' : 'Türkçe'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
