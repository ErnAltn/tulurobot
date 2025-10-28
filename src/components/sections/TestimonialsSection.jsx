import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'

const TestimonialsSection = () => {
  const { t, language } = useLanguage()

  const testimonials = {
    tr: [
      {
        name: 'Ahmet Yılmaz',
        company: 'ABC Teknoloji',
        position: 'Genel Müdür',
        content: 'Tulurobot ile çalışmak harika bir deneyimdi. Üretim verimliliğimiz %40 arttı ve kalite standartlarımızı önemli ölçüde yükselttik.',
        rating: 5
      },
      {
        name: 'Elif Demir',
        company: 'XYZ Endüstri',
        position: 'Operasyon Müdürü',
        content: 'Robotik çözümleri sayesinde işgücü maliyetlerimizi %60 azalttık. Sistem 7/24 kesintisiz çalışıyor ve hiç sorun yaşamadık.',
        rating: 5
      },
      {
        name: 'Mehmet Kaya',
        company: 'DEF Otomotiv',
        position: 'Teknik Direktör',
        content: 'Görüntü işleme sistemleri kalite kontrol süreçlerimizi tamamen değiştirdi. Hata oranımız %90 azaldı.',
        rating: 5
      }
    ],
    en: [
      {
        name: 'Ahmet Yılmaz',
        company: 'ABC Technology',
        position: 'General Manager',
        content: 'Working with Tulurobot was an amazing experience. Our production efficiency increased by 40% and we significantly improved our quality standards.',
        rating: 5
      },
      {
        name: 'Elif Demir',
        company: 'XYZ Industry',
        position: 'Operations Manager',
        content: 'Thanks to robotic solutions, we reduced our labor costs by 60%. The system works 24/7 without interruption and we never had any problems.',
        rating: 5
      },
      {
        name: 'Mehmet Kaya',
        company: 'DEF Automotive',
        position: 'Technical Director',
        content: 'Image processing systems completely changed our quality control processes. Our error rate decreased by 90%.',
        rating: 5
      }
    ]
  }

  const currentTestimonials = testimonials[language] || testimonials.tr

  return (
    <section className="py-20 bg-gradient-to-br from-vibrant-lightGray via-vibrant-gray to-vibrant-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Müşteri Yorumları</h2>
          <p className="text-xl text-black max-w-3xl mx-auto font-bold">
            Başarılı projelerimiz hakkında müşterilerimizin görüşleri
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-2xl p-6 hover-lift"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-black mb-6 leading-relaxed font-bold">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="text-black font-bold">{testimonial.name}</h4>
                  <p className="text-black text-sm font-bold">{testimonial.position}</p>
                  <p className="text-vibrant-blue text-sm font-bold">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
