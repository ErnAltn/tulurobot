import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'

const StatsSection = () => {
  const { t, language } = useLanguage()

  const stats = {
    tr: [
      { number: '50+', label: 'Tamamlanan Proje' },
      { number: '25+', label: 'Mutlu Müşteri' },
      { number: '5+', label: 'Yıllık Deneyim' },
      { number: '99%', label: 'Müşteri Memnuniyeti' }
    ],
    en: [
      { number: '50+', label: 'Completed Projects' },
      { number: '25+', label: 'Happy Clients' },
      { number: '5+', label: 'Years Experience' },
      { number: '99%', label: 'Customer Satisfaction' }
    ]
  }

  const currentStats = stats[language] || stats.tr

  return (
    <section className="py-20 bg-gradient-to-r from-vibrant-lightGray via-vibrant-gray to-vibrant-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {currentStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                className="text-4xl md:text-5xl font-bold gradient-text mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-black text-sm md:text-base font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
