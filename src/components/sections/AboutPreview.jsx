import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'

const AboutPreview = () => {
  const { t, language } = useLanguage()

  const content = {
    tr: {
      title: 'Hakkımızda',
      subtitle: 'TULU ROBOT olarak, endüstriyel otomasyon alanında yenilikçi çözümler sunuyoruz',
      description: 'Uzman ekibimizle, müşterilerimizin ihtiyaçlarına özel robotik sistemler geliştiriyoruz. Yapay zeka teknolojilerini kullanarak, üretim süreçlerinizi optimize ediyor ve  akıllı fabrikaları hayata geçiriyoruz.',
      whoWeAre: 'TULU ROBOT, endüstriyel otomasyon alanında uzmanlaşmış bir teknoloji şirketidir. Müşterilerimizin üretim süreçlerini optimize etmek ve verimliliği artırmak için yenilikçi robotik çözümler geliştiriyoruz.',
      mission: 'Misyonumuz, endüstriyel işletmelerin üretim süreçlerini dönüştürmek ve geleceğin akıllı fabrikalarını bugün hayata geçirmektir. Yapay zeka destekli robotik sistemlerimizle, müşterilerimizin rekabet avantajını artırıyoruz.'
    },
    en: {
      title: 'About Us',
      subtitle: 'As TULU ROBOT, we provide innovative solutions in industrial automation',
      description: 'Together with our expert team, we develop robotic systems tailored to our customers\' needs. Using artificial intelligence and machine learning technologies, we optimize your production processes and bring tomorrow\'s smart factories to life today.',
      whoWeAre: 'TULU ROBOT is a technology company specialized in industrial automation. We develop innovative robotic solutions to optimize our customers\' production processes and increase efficiency.',
      mission: 'Our mission is to transform the production processes of industrial enterprises and bring tomorrow\'s smart factories to life today. With our AI-powered robotic systems, we increase our customers\' competitive advantage.'
    }
  }

  const currentContent = content[language] || content.tr

  return (
    <section className="py-12 bg-gradient-to-br from-white via-vibrant-lightGray to-vibrant-gray" role="region" aria-labelledby="about-preview-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="about-preview-heading" className="text-2xl sm:text-3xl md:text-4xl font-black mb-6">{currentContent.title}</h2>
            <p className="text-lg sm:text-xl text-black mb-6 font-bold">{currentContent.subtitle}</p>
            <p className="text-base sm:text-lg text-black mb-6 leading-relaxed font-normal">{currentContent.description}</p>
            
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-700 to-slate-800 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-slate-700 transition-all duration-200 transform hover:scale-105"
            >
              <span>{t('learnMore')}</span>
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
            <div className="aspect-video rounded-xl overflow-hidden">
              <img 
                src="/tulufabrika1.png" 
                alt="TULU ROBOT endüstriyel robotik sistemleri ve otomasyon teknolojileri" 
                className="w-full h-full object-cover"
                loading="lazy"
                width="800"
                height="450"
              />
            </div>
            
           
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
