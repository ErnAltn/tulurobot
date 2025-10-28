import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('tr')

  const translations = {
    tr: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      solutions: 'Çözümlerimiz',
      contact: 'İletişim',
      
      heroTitle: 'Robotik Otomasyon Çözümleri',
      heroSubtitle: 'Endüstriyel otomasyon ve görüntü işleme teknolojileri',
      getStarted: 'Başlayalım',
      learnMore: 'Daha Fazla Bilgi',
      
      aboutTitle: 'Hakkımızda',
      aboutSubtitle: 'Robotik teknolojilerinde yenilikçi çözümler sunuyoruz',
      
      solutionsTitle: 'Çözümlerimiz',
      solutionsSubtitle: 'Endüstriyel ihtiyaçlarınıza özel robotik çözümler',
      industrialRobots: 'Endüstriyel Robotlar',
      imageProcessing: 'Görüntü İşleme',
      
      contactTitle: 'İletişim',
      contactSubtitle: 'Projeleriniz için bizimle iletişime geçin',
      
      learnMore: 'Daha Fazla Bilgi',
      getInTouch: 'İletişime Geçin',
      readMore: 'Devamını Oku',
      
      // Footer translations
      company: 'Tulurobot',
      companyDescription: 'Robotik teknolojilerinde yenilikçi çözümler sunan öncü şirket',
      quickLinks: 'Hızlı Bağlantılar',
      address: 'İstanbul, Türkiye',
      email: 'info@tulurobot.com',
      phone: '+90 552 238 2457',
      phone2: '+90 537 767 8934',
      rights: 'Tüm hakları saklıdır.',
      palletizer: 'Paletleme',
      pickPlace: 'Pick & Place',
      endLineSolutions: 'Hat Sonu Çözümleri',
      
      // Solutions Preview translations
      pickPlaceTitle: 'Pick & Place',
      pickPlaceDescription: 'Yüksek hız ve hassasiyetle üretim verimliliğinizi artırın',
      palletizerTitle: 'Palletizer',
      palletizerDescription: 'Ağır yükleri güvenli ve verimli şekilde paletleyin',
      endLineTitle: 'Hat Sonu Çözümleri',
      endLineDescription: 'Paketleme ve paletleme operasyonlarınızı otomatikleştirin',
      imageProcessingTitle: 'Görüntü İşleme Çözümleri',
      imageProcessingDescription: 'Yapay zeka destekli görüntü analizi ve tanıma sistemleri',
      viewAllSolutions: 'Tüm Çözümlerimizi Görün',
      
      // Solutions Page translations
      aboutSolutions: 'Çözümlerimiz Hakkında',
      aboutSolutionsSubtitle: 'İşletmeniz için tasarlanan akıllı otomasyon çözümleri',
      aboutSolutionsText: 'TULU ROBOT olarak, üretim süreçlerinizi daha hızlı, daha esnek ve daha kârlı hale getirmek için yenilikçi otomasyon çözümleri geliştiriyoruz. Sunduğumuz sistemlerle insan hatasından arındırılmış, güvenli ve kesintisiz çalışabilen bir üretim ortamı yaratıyoruz. Her işletmenin kendine özgü ihtiyaçları olduğunun bilinciyle, operasyonel mükemmelliğe ulaşmanızı sağlayacak anahtar teslim projeler sunarak rekabet avantajı elde etmenize yardımcı oluyoruz.',
      coreSolutions: 'Temel Çözüm Alanlarımız',
      coreSolutionsLeft1: 'Üretim hatlarınızdaki tekrar eden ve hassasiyet gerektiren görevleri otomatikleştirme',
      coreSolutionsLeft2: 'Hassas Al ve Bırak (Pick and Place) sistemleriyle hatasız üretim sağlama',
      coreSolutionsLeft3: 'Paletleme ve İstifleme çözümleriyle ağır ve riskli işlemleri güvenle robotlara devretme',
      coreSolutionsLeft4:'Hat sonu çözüm sistemleriyle paketleme ve paletleme operasyonlarını kesintisiz hale getirme',
      coreSolutionsRight1: 'Endüstriyel Görüntü İşleme teknolojisiyle kalite kontrolü',
      coreSolutionsRight3: 'Yapay Zeka Destekli Çözümlerle üretim verilerini analiz etme',
      
      
      // Pick & Place Page translations
      pickPlaceSolutions: 'Pick & Place Çözümleri',
      deltaRobot: 'DELTA ROBOT',
      deltaDescription: 'Yüksek hız ve milimetrik hassasiyetiyle üretim hatlarında verimliliğin sınırlarını yeniden tanımlar.',
      mainDescription: 'Pick and Place robotik sistemleri, modern üretimin hızına, doğruluğuna ve esnekliğine cevap veren vazgeçilmez bir çözümdür.',
      competitionText: 'TULU\'nun geliştirdiği, farklı sektörlere kolayca entegre olabilen bu uygulamalarla rekabette bir adım öne geçin.',
      technologyText: 'İleri seviye algılama teknolojisiyle donatılan robotlarımız, en basit görevlerden en karmaşık operasyonlara kadar tüm süreçlerde insan hatalarını ortadan kaldırır.',
      benefitsText: 'Bu sayede iş gücü maliyetlerinizi düşürür, üretim kapasitenizi artırır ve her üründe aynı yüksek kalite standardını garanti altına alırsınız.',
      robotCountText: 'İhtiyaca göre robot sayısı',
      sectorSolutionsTitle: 'Her sektöre özel çözümler',
      sectorSolutionsText: 'Delta robot teknolojimiz, yüksek hızlı "Pick & Place" operasyonları için endüstriyel standartları yeniden belirliyor. Gıdadan elektroniğe, ilaçtan kozmetiğe kadar her sektöre özel, esnek çözümler sunuyoruz. Görüntü işleme destekli robotlarımız, en hassas ürünleri bile hatasız işleyerek verimliliği artırır, maliyetleri düşürür ve üretim kapasitenizi maksimize eder.',
      
      // Palletizer Page translations
      palletizerSolutions: 'Palletizer Çözümleri',
      palletizerMainDescription: 'Palletizer robotik sistemleri, ağır ve riskli paletleme işlemlerini otomatikleştirerek iş güvenliğini artırır ve operasyonel verimliliği optimize eder.',
      palletizerRobot: 'Paletleme Robotu',
      palletizerRobotDescription: 'Her türlü ürününüzü standartlara uygun ve hızlı bir şekilde paletleyerek, operasyonel maliyetlerinizi düşürür.',
      palletizerDetailedDescription: 'TULU Paletizer Çözümleri, manuel paletlemenin zorluklarını ve hatalarını ortadan kaldırır. Robotik sistemlerimiz, ağır iş yükünü hafifletir, iş güvenliğini artırır. Farklı ürünleri kolayca paletleyen bu sistemler, üretim hattınızın son aşamasını otomatikleştirir. Hızlı ve doğru paletleme sayesinde maliyetleriniz düşer, ürünlerinizin istif kalitesi artar. TULU ile depo ve sevkiyat süreçlerinizde verimliliği yakalayın.',
      palletizerSectorSolutions: 'Her ürünü paletleyin',
      palletizerSectorSolutionsText: 'Paletleme robotu teknolojimiz, otomatik \'Hat Sonu\' operasyonları için endüstriyel standartları yeniden belirliyor. Gıdadan kimyaya, içecekten inşaat malzemelerine kadar her sektöre özel, esnek çözümler sunuyoruz. Akıllı yazılım destekli robotlarımız, en ağır kolileri ve çuvalları bile hatasız istifleyerek sevkiyat verimliliğini artırır, iş gücü maliyetlerini düşürür ve depo kapasitenizi maksimize eder. Kolay entegrasyon ve ürüne özel tutucu (gripper) tasarımlarımızla mevcut hatlarınıza hızla adapte oluruz.',
      palletizerFeature1: 'Ağır yükler için güvenli paletleme',
      palletizerFeature2: 'Çoklu katman paletleme',
      palletizerFeature3: 'Esnek konfigürasyon seçenekleri',
      palletizerFeature4: 'Yüksek kapasiteli operasyon',
      
      // End Line Page translations
      endLineSolutions: 'Hat Sonu Çözümleri',
      endLineSubtitle: 'Paketleme ve paletleme operasyonlarınızı otomatikleştirin',
      endLineMainDescription: 'Hat sonu çözüm sistemleri, üretim hattının sonunda paketleme ve paletleme operasyonlarını kesintisiz ve sürdürülebilir hale getirir.',
      endLineAutomationSystems: 'Hat Sonu Otomasyon Sistemleri',
      boxMakingMachine: 'Koli Yapma Makinesi',
      boxMakingDescription: 'Üretim hattınızın verimliliğini artıran ilk adım. Bu otomatik sistem, katlanmış kolileri yüksek hızda açar, alt kapaklarını katlar ve bantlayarak dolum istasyonuna kusursuz bir şekilde hazırlar.',
      boxClosingMachine: 'Koli Kapatma Makinesi',
      boxClosingDescription: 'Dolum işlemi tamamlanan kolilerin üst kapaklarını otomatik olarak kapatır ve bantlar. Farklı koli boyutlarına kolayca adapte olabilir ve sevkiyata hazır, güvenli paketleme sağlar.',
      labelingMachine: 'Etiketleme Makinesi',
      labelingDescription: 'Ürünlerinize veya kolilerinize marka, barkod ve üretim bilgilerini yüksek hız ve hassasiyetle uygular. Farklı yüzeylere ve ambalaj tiplerine mükemmel bir uyum sağlayarak sürecinizi otomatikleştirir.',
      checkWeigher: 'Check - Weigher',
      checkWeigherDescription: 'Üretim hattınızdaki her paketin ağırlığını yüksek hızda ve hassasiyetle tartar. Belirlenen ağırlık limitlerinin dışındaki ürünleri otomatik olarak ayırarak kalite kontrol standartlarınızı güvence altına alır.',
      endLineFeature1: 'Otomatik paketleme sistemleri',
      endLineFeature2: 'Paletleme ve istifleme',
      endLineFeature3: 'Kalite kontrol entegrasyonu',
      endLineFeature4: 'Kesintisiz üretim akışı',
      
      // Image Processing Page translations
      imageProcessingSolutions: 'Görüntü İşleme Çözümleri',
      imageProcessingSubtitle: 'Yapay zeka destekli görüntü analizi ve tanıma sistemleri',
      imageProcessingMainDescription: 'Endüstriyel görüntü işleme teknolojimizle, ürünlerinizin kalite kontrolünü insan gözünden daha hassas bir şekilde gerçekleştiriyor, hatalı ürünleri anında tespit ediyoruz.',
      industrialImageProcessing: 'Endüstriyel Görüntü İşleme',
      defectDetection: 'Hata Tespiti',
      defectDetectionDescription: 'Üretim hattınıza insan gözünün ötesinde bir hassasiyet katın. Akıllı kameralar ve gelişmiş yazılımlar kullanan sistemlerimiz; kalite kontrol, ürün doğrulama ve veri toplama süreçlerinizi milisaniyelik hızlarda ve hatasız bir şekilde otomatikleştirir.',
      weightVolumeDetection: 'Ağırlık-Hacim Saptama',
      weightVolumeDescription: '3 Boyutlu kamera sistemleriyle ürünlerinizin boyutlarını, hacmini ve ağırlığını temassız olarak ölçün. Bu verilerle doğru paketleme, sınıflandırma ve planlama yapın',
      barcodeReading: 'Barkod Okuma',
      barcodeReadingDescription: 'Yüksek hızlı konveyörler üzerindeki veya paketlerdeki barkodları ve QR kodları yüksek doğrulukla okuyun. Ürün izlenebilirliğini baştan sona sağlayın ve envanter yönetiminizi kusursuz hale getirin.',
      imageProcessingFeature1: 'Nesne tanıma ve sınıflandırma',
      imageProcessingFeature2: 'Kalite kontrol ve hata tespiti',
      imageProcessingFeature3: '3D görüntü işleme',
      imageProcessingFeature4: 'Gerçek zamanlı analiz',
      imageProcessingFeature5: 'Derin öğrenme algoritmaları',
      imageProcessingFeature6: 'Özel kamera sistemleri',
      
      // About Page translations
      aboutPageTitle: 'Hakkımızda',
      aboutPageSubtitle: 'Biz Kimiz?',
      aboutWhoWeAre: 'Artan rekabet koşulları ve nitelikli insan gücüne ulaşmanın zorlaştığı günümüz endüstri dünyasında otomasyon, bir seçenek olmaktan çıkıp sürdürülebilir başarının temeli haline gelmiştir. TULU, tam da bu noktada, temelini sağlam mühendislik prensiplerinden alan bir teknoloji ve otomasyon ortağı olarak devreye girer.',
      aboutMission: 'Misyonumuz',
      aboutMissionText: 'Misyonumuz, disiplinler arası mühendislik bilgimizi saha tecrübemizle birleştirerek, insan kaynaklı hataları minimize eden, iş sağlığı ve güvenliği standartlarını en üst seviyeye taşıyan ve üretimde verimliliği artıran sürdürülebilir sistemler kurmaktır. İşletmenize özel en optimal çözümleri tasarlayarak operasyonel maliyetlerinizi düşürüyor ve kârlılığınızı doğrudan artırıyoruz.',
      aboutVision: 'Vizyonumuz',
      aboutVisionText: 'Robotik ve otomasyon sistemleri alanında inovatif ve çevik çözümler üreterek, müşterilerimizin operasyonel mükemmellik hedeflerine ulaşmalarını sağlamayı amaçlıyoruz. Bilgi ve saha tecrübemizi, en son teknolojilerle entegre ederek, dünya çapında endüstriyel dönüşüme öncülük eden, geleceğin akıllı fabrikalarını bugünden kuran, referans bir marka olmayı hedefliyoruz. Bu yolculukta, etik değerlerden ve sürdürülebilirlik ilkelerinden asla taviz vermeden, tüm paydaşlarımız için değer yaratan bir kurum kültürü oluşturmayı kendimize vizyon ediniyoruz.',
      
      // Contact Page translations
      contactPageTitle: 'İletişim',
      contactPageSubtitle: 'Projeleriniz için bizimle iletişime geçin',
      contactInfo: 'İletişim Bilgileri',
      contactAddress: 'Adres',
      contactAddressText: 'Yukarı Dudullu Mh. Narin sk. No: 24/5 Dudullu OSB Ümraniye/İSTANBUL',
      contactPhone: 'Telefon',
      contactPhoneText: '+90 552 238 2457',
      contactPhoneText2: '+90 537 767 8934',
      contactEmailLabel: 'E-posta',
      contactEmailText: 'info@tulurobot.com',
      contactWorkingHours: 'Çalışma Saatleri',
      contactWorkingHoursText: 'Pazartesi - Cuma: 09:00 - 18:00',
    },
    en: {
      home: 'Home',
      about: 'About',
      solutions: 'Solutions',
      contact: 'Contact',
      
      heroTitle: 'Future Robotics Solutions',
      heroSubtitle: 'Leading in industrial automation and computer vision technologies',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      
      aboutTitle: 'About Us',
      aboutSubtitle: 'We provide innovative solutions in robotics technologies',
      
      solutionsTitle: 'Our Solutions',
      solutionsSubtitle: 'Custom robotics solutions for your industrial needs',
      industrialRobots: 'Industrial Robots',
      imageProcessing: 'Image Processing',
      
      contactTitle: 'Contact',
      contactSubtitle: 'Get in touch with us for your projects',
      
      learnMore: 'Learn More',
      getInTouch: 'Get In Touch',
      readMore: 'Read More',
      
      // Footer translations
      company: 'Tulurobot',
      companyDescription: 'Leading company providing innovative solutions in robotics technologies',
      quickLinks: 'Quick Links',
      address: 'Istanbul, Turkey',
      email: 'info@tulurobot.com',
      phone: '+90 552 238 2457',
      phone2: '+90 537 767 8934',
      rights: 'All rights reserved.',
      palletizer: 'Palletizer',
      pickPlace: 'Pick & Place',
      endLineSolutions: 'End-of-Line Solutions',
      
      // Solutions Preview translations
      pickPlaceTitle: 'Pick & Place',
      pickPlaceDescription: 'Increase your production efficiency with high speed and precision',
      palletizerTitle: 'Palletizer',
      palletizerDescription: 'Safely and efficiently palletize heavy loads',
      endLineTitle: 'End-of-Line Solutions',
      endLineDescription: 'Automate your packaging and palletizing operations',
      imageProcessingTitle: 'Image Processing Solutions',
      imageProcessingDescription: 'AI-powered image analysis and recognition systems',
      viewAllSolutions: 'View All Our Solutions',
      
      // Solutions Page translations
      aboutSolutions: 'About Our Solutions',
      aboutSolutionsSubtitle: 'Smart automation solutions designed for your business',
      aboutSolutionsText: 'As TULU ROBOT, we develop innovative automation solutions to make your production processes faster, more flexible, and more profitable. With the systems we offer, we create a production environment that is free from human error, safe, and operates continuously. Aware of each business\'s unique needs, we help you gain a competitive advantage by offering turnkey projects that enable you to achieve operational excellence.',
      coreSolutions: 'Our Core Solution Areas',
      coreSolutionsLeft1: 'Automating repetitive and precision-requiring tasks in production lines',
      coreSolutionsLeft2: 'Ensuring error-free production with precise Pick and Place systems',
      coreSolutionsLeft3: 'Safely delegating heavy and risky operations to robots with Palletizing and Stacking solutions',
      coreSolutionsLeft4: 'Making packaging and palletizing operations uninterrupted with end-of-line solution systems',
      coreSolutionsRight1: 'Quality control with Industrial Image Processing technology',
      coreSolutionsRight2: 'More precise defective product detection than the human eye',
      coreSolutionsRight3: 'Production data analysis with AI-Supported Solutions',
      coreSolutionsRight4: 'Continuous process optimization and proactive decision making',
      
      // Pick & Place Page translations
      pickPlaceSolutions: 'Pick & Place Solutions',
      deltaRobot: 'DELTA ROBOT',
      deltaDescription: 'Redefines the limits of efficiency in production lines with high speed and millimeter precision.',
      mainDescription: 'Pick and Place robotic systems are an indispensable solution that responds to the speed, accuracy, and flexibility of modern production.',
      competitionText: 'Get a step ahead in competition with these applications developed by TULU, which can be easily integrated into different sectors.',
      technologyText: 'Equipped with advanced sensing technology, our robots eliminate human errors in all processes, from the simplest tasks to the most complex operations.',
      benefitsText: 'This way, you reduce your labor costs, increase your production capacity, and guarantee the same high-quality standard for every product.',
      robotCountText: 'Number of robots according to need',
      sectorSolutionsTitle: 'Solutions specific to every sector',
      sectorSolutionsText: 'Our Delta robot technology redefines industrial standards for high-speed "Pick & Place" operations. We offer flexible solutions tailored to every sector, from food to electronics, pharmaceuticals to cosmetics. Our image processing-supported robots increase efficiency by accurately handling even the most delicate products, reduce costs, and maximize your production capacity.',
      
      // Palletizer Page translations
      palletizerSolutions: 'Palletizer Solutions',
      palletizerMainDescription: 'Palletizer robotic systems automate heavy and risky palletizing operations, increasing workplace safety and optimizing operational efficiency.',
      palletizerRobot: 'Palletizing Robot',
      palletizerRobotDescription: 'Pallets all your products in accordance with standards and quickly, reducing your operational costs.',
      palletizerDetailedDescription: 'TULU Palletizer Solutions eliminate the difficulties and errors of manual palletizing. Our robotic systems lighten the heavy workload and increase workplace safety. These systems that easily palletize different products automate the final stage of your production line. Thanks to fast and accurate palletizing, your costs decrease and the stacking quality of your products increases. Achieve efficiency in your warehouse and shipping processes with TULU.',
      palletizerSectorSolutions: 'Palletize every product',
      palletizerSectorSolutionsText: 'Our palletizing robot technology redefines industrial standards for automated \'End-of-Line\' operations. We offer flexible solutions tailored to every sector, from food to chemicals, from beverages to construction materials. Our intelligent software-supported robots increase shipping efficiency by accurately stacking even the heaviest boxes and bags, reduce labor costs and maximize your warehouse capacity. We quickly adapt to your existing lines with easy integration and product-specific gripper designs.',
      palletizerFeature1: 'Safe palletizing for heavy loads',
      palletizerFeature2: 'Multi-layer palletizing',
      palletizerFeature3: 'Flexible configuration options',
      palletizerFeature4: 'High-capacity operations',
      
      // End Line Page translations
      endLineSolutions: 'End-of-Line Solutions',
      endLineSubtitle: 'Automate your packaging and palletizing operations',
      endLineMainDescription: 'End-of-line solution systems make packaging and palletizing operations at the end of the production line uninterrupted and sustainable.',
      endLineAutomationSystems: 'End-of-Line Automation Systems',
      boxMakingMachine: 'Box Making Machine',
      boxMakingDescription: 'The first step to increase the efficiency of your production line. This automatic system opens folded boxes at high speed, folds their bottom flaps and tapes them, preparing them perfectly for the filling station.',
      boxClosingMachine: 'Box Closing Machine',
      boxClosingDescription: 'Automatically closes and tapes the top flaps of boxes that have completed the filling process. It can easily adapt to different box sizes and provides secure packaging ready for shipment.',
      labelingMachine: 'Labeling Machine',
      labelingDescription: 'Applies brand, barcode and production information to your products or boxes with high speed and precision. It automates your process by providing perfect adaptation to different surfaces and packaging types.',
      checkWeigher: 'Check - Weigher',
      checkWeigherDescription: 'Weighs each package in your production line with high speed and precision. It ensures your quality control standards by automatically separating products outside the specified weight limits.',
      endLineFeature1: 'Automated packaging systems',
      endLineFeature2: 'Palletizing and stacking',
      endLineFeature3: 'Quality control integration',
      endLineFeature4: 'Uninterrupted production flow',
      
      // Image Processing Page translations
      imageProcessingSolutions: 'Image Processing Solutions',
      imageProcessingSubtitle: 'AI-powered image analysis and recognition systems',
      imageProcessingMainDescription: 'With our industrial image processing technology, we perform quality control of your products more precisely than the human eye and instantly detect defective products.',
      industrialImageProcessing: 'Industrial Image Processing',
      defectDetection: 'Defect Detection',
      defectDetectionDescription: 'Add precision beyond the human eye to your production line. Our systems using smart cameras and advanced software automate your quality control, product verification and data collection processes at millisecond speeds and flawlessly.',
      weightVolumeDetection: 'Weight-Volume Detection',
      weightVolumeDescription: 'Measure the dimensions, volume and weight of your products contactlessly with 3D camera systems. Make accurate packaging, classification and planning with this data.',
      barcodeReading: 'Barcode Reading',
      barcodeReadingDescription: 'Read barcodes and QR codes on high-speed conveyors or packages with high accuracy. Ensure end-to-end product traceability and make your inventory management flawless.',
      imageProcessingFeature1: 'Object recognition and classification',
      imageProcessingFeature2: 'Quality control and defect detection',
      imageProcessingFeature3: '3D image processing',
      imageProcessingFeature4: 'Real-time analysis',
      imageProcessingFeature5: 'Deep learning algorithms',
      imageProcessingFeature6: 'Custom camera systems',
      
      // About Page translations
      aboutPageTitle: 'About Us',
      aboutPageSubtitle: 'Who Are We?',
      aboutWhoWeAre: 'In today\'s industrial world, where increasing competition and access to qualified human resources are challenging, automation has ceased to be an option and has become the foundation of sustainable success. TULU, at this very point, enters the scene as a technology and automation partner built on solid engineering principles.',
      aboutMission: 'Our Mission',
      aboutMissionText: 'Our mission is to blend our interdisciplinary engineering knowledge with our field experience to establish sustainable systems that minimize human-induced errors, elevate occupational health and safety standards to the highest level, and increase efficiency in production. By designing the most optimal solutions specifically for your business, we reduce your operational costs and directly increase your profitability.',
      aboutVision: 'Our Vision',
      aboutVisionText: 'To be a leading company recognized worldwide for producing innovative and sustainable solutions in robotics technologies.',
      
      // Contact Page translations
      contactPageTitle: 'Contact',
      contactPageSubtitle: 'Get in touch with us for your projects',
      contactInfo: 'Contact Information',
      contactAddress: 'Address',
      contactAddressText: 'Yukarı Dudullu Mh. Narin sk. No: 24/5 Dudullu OSB Ümraniye/İSTANBUL',
      contactPhone: 'Phone',
      contactPhoneText: '+90 552 238 2457',
      contactPhoneText2: '+90 537 767 8934',
      contactEmailLabel: 'Email',
      contactEmailText: 'info@tulurobot.com',
      contactWorkingHours: 'Working Hours',
      contactWorkingHoursText: 'Monday - Friday: 09:00 - 18:00',
    }
  }

  const t = (key) => {
    return translations[language][key] || key
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
