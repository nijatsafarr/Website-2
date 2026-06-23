import { Link } from "@tanstack/react-router"

export const products = [
  {
    id: 1,
    name: 'Samsung Galaxy S26 Ultra (SM-S948) 12GB / 512GB',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/bfabshjspl1o301lLMaRdTI8RFKi5Sk0wTcpohg9.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '3099.99 ₼',
    color: 'Cobalt Violet',
    description: 'Samsung-un flaqman modellərindən biri olan Samsung Galaxy S26 Ultra 12GB / 512GB modelini sərfəli şərtlərlə əldə edə bilərsiniz. 12 GB operativ yaddaş və 512 GB daxili yaddaş sayəsində bu smartfon sürətli işləmə, çoxsaylı tətbiqlərlə rahat istifadə və multimedia üçün yüksək performans təqdim edir. Samsung Galaxy S26 Ultra "Cobalt Violet" rəngi ilə klassik və premium dizayna malikdir. Güclü prosessoru, yüksək keyfiyyətli kamera sistemi və böyük ekranı sayəsində həm gündəlik istifadə, həm də yüksək keyfiyyətli foto və video çəkilişlər üçün ideal seçimdir. Bu modeli nağd və ya kredit ödəniş imkanı ilə rahat şəkildə əldə edə bilərsiniz.',
    features: ['Əməliyyat sistemi: Android 16, One UI 8',
              'Prosessor tipi (Chipset): Qualcomm SM8850-AC Snapdragon 8 Elite Gen 5 (3 nm)',
              'Ekran tipi: Dynamic LTPO AMOLED 2X, 120Hz, HDR10+, 2600 nits (peak)',
              'Əsas kamera:200 MP, f/1.4, 24mm (wide), 1/1.3", 0.6µm, multi-directional PDAF, OIS',
              'Operativ yaddaş (RAM): 12 GB'],
                
  },
  {
    id: 2,
    name: 'iPhone 17 Pro 256GB',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/YnwqfEv81UQfBR4qpBkwGulruSVoiG9BiQSEulFe.png',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '3399.99 ₼',
    color: 'Deep Blue',
    description: 'Müasir texnologiyanı premium dizaynla təqdim edən Apple iPhone 17 Pro 256GB Deep Blue həm performansı, həm də estetik görünüşü ilə fərqlənir. 256GB yaddaş tutumu gündəlik istifadə üçün ideal seçimdir – çoxlu sayda foto, video və tətbiqi rahatlıqla saxlaya bilərsiniz. Zərif və premium Deep Blue rəngi iPhone 17 Pro modelinə fərqli və cəlbedici görünüş bəxş edir. MagSafe dəstəyi, uzunömürlü batareya və enerji səmərəliliyi ilə gündəlik istifadədə maksimal rahatlıq təmin edir.',
    features: ['Əməliyyat sistemi: iOS 26',
      'Prosessor tipi (Chipset): Apple A19 Pro (3 nm)',
      'Ekran tipi: LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (typ), 1600 nits (HBM), 3000 nits (peak)',
      'Əsas kamera: 48 MP, f/1.6, 24mm (wide), 1/1.28", 1.22µm, dual pixel PDAF, sensor-shift OIS',
      'Operativ yaddaş (RAM): 8 GB',
    ]
  },
  {
    id: 3,
    name: 'Xiaomi 17 Ultra 16GB / 512GB White',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/6Uvlf7bFOEm2fUwkstfUcUVn6UXuCJS5FQRBOFdt.png',
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: '2999.99 ₼',
    color: 'White',
    description: 'Xiaomi 17 Ultra, gələcəyin texnologiyasını bu günə gətirən, həm dizaynı, həm də daxili gücü ilə standartları tamamilə dəyişən ən son modeldir. O, sadəcə bir telefon deyil, cibinizdə daşıya biləcəyiniz peşəkar bir kinostudiya və yüksək performanslı smartfondur.',
    features: [
      'Əməliyyat sistemi: Android 16, HyperOS 3',
      'Prosessor tipi (Chipset): Qualcomm SM8850-AC Snapdragon 8 Elite Gen 5 (3 nm)',
      'Ekran tipi: LTPO AMOLED, 68B colors, 120Hz, 2160Hz PWM, Dolby Vision, HDR10+, 3500 nits (peak)',
      'Əsas kamera: 50 MP, f/1.7, 23mm (wide), 1.0"-type, 1.6µm, dual pixel PDAF, OIS',
      'Operativ yaddaş (RAM): 16 GB'
    ],
  },
  {
    id: 4,
    name: 'HONOR Magic 8 Pro 12GB / 512GB',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/hxrIN5dCUzUt4vWWhRKkp5fPjjOULgMjKUGAqVtn.png',
    imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: '2449.99 ₼',
    color: 'Black',
    description: 'HONOR Magic8 Pro Black rəngi ilə klassik və zərif dizayna malikdir. Güclü prosessoru, yüksək keyfiyyətli kamera sistemi və optimallaşdırılmış proqram təminatı istifadəçilərə sürətli və stabil mobil təcrübə təqdim edir. Bu model həm gündəlik istifadə, həm də yüksək performans tələb edən istifadəçilər üçün ideal seçimdir.',
    features: ['Əməliyyat sistemi: Android 16, up to 7 major Android upgrades, MagicOS 10',
      'Prosessor tipi (Chipset): Qualcomm SM8850-AC Snapdragon 8 Elite Gen 5 (3 nm)',
      'Ekran tipi: LTPO OLED, 1B colors, 120Hz, 4320Hz PWM, Dolby Vision, HDR Vivid, 1800 nits (HBM), 6000 nits (peak)',
      'Əsas kamera:50 MP, f/1.6, 23mm (wide), 1/1.3", 1.2µm, multi-directional PDAF, OIS 200 MP',
      'Operativ yaddaş (RAM): 12 GB',]
  },
  {
    id: 5,
    name: 'Samsung Galaxy Z Fold 7 (SM-F966) 12GB / 256GB',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/aTt5fFvJUQ5lAIQWmEbKaU8WFzCxE92pXTqyl9fu.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '3799.99 ₼',
    color: 'Sky Blue',
    description: 'Həm planşet, həm smartfon bir cihazda! Öz tərzinlə ətrafdan seçilmək və gələcəyin texnologiyasını bu gündən yaşamaq istəyirsənsə, bu model tam sənə uyğundur! Açıldıqda 8 düymlük nəhəng, qatlandıqda isə rahat istifadə üçün 6.5 düymlük premium AMOLED displey!',
    features: ['Əməliyyat sistemi: Android 16,, One UI 8',
      'Prosessor tipi (Chipset): Qualcomm SM8750-AC Snapdragon 8 Elite (3 nm)',
      'Ekran tipi: Foldable Dynamic LTPO AMOLED 2X, 120Hz, HDR10+, 2600 nits (peak)',
      'Əsas kamera: 200 MP, f/1.7, 24mm (wide), 1/1.3", 0.6µm, multi-directional PDAF, OIS 10 MP',
      'Operativ yaddaş (RAM): 12 GB',]
  },
  {
    id: 6,
    name: 'iPhone 17 256GB',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/fwo6sJE2lAPhzaWyfVmzmv195hqCYLb3lvLPWtFQ.png',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '2299.99 ₼',
    color: 'Deep Blue',
    description: 'Estetik görünüş və güclü performansı ilə seçilən Apple iPhone 17 256GB White gündəlik istifadə və iş üçün mükəmməl seçimdir. 256GB yaddaş tutumu foto, video və tətbiqlərinizi rahatlıqla saxlamağa imkan verir, yaddaş məhdudiyyətini aradan qaldırır.Super Retina ekranı daha parlaq və dəqiq rənglər təqdim edərək film izləmək, oyun oynamaq və iş proseslərini daha zövqlü edir. Güclü A-seriyalı prosessoru ilə iPhone 17 ən ağır tətbiqləri belə yüksək sürətlə və fasiləsiz işlətməyə imkan verir. İnkişaf etmiş kamera sistemi isə gündüz və gecə şəraitində peşəkar səviyyədə foto və video çəkilişi təmin edir.',
    features: ['Əməliyyat sistemi: iOS 26',
      'Prosessor tipi (Chipset): Apple A19 (3 nm)',
      'Ekran tipi: LTPO Super Retina XDR OLED, 120Hz, HDR10, 1000 nits (typ), 1600 nits (HBM), 3000 nits (peak)',
      'Əsas kamera: 48 MP, f/1.6, 26mm (wide), 1/1.56", 1.0µm, dual pixel PDAF, sensor-shift OIS 48MP',
      'Operativ yaddaş (RAM): 8 GB',]
  },
  {
    id: 7,
    name: 'Realme C85 Pro 8GB / 256GB',
    href: '#',
    imageSrc: 'https://cdn.kalvo.com/uploads/img/gallery/79671-realme-c85-4g-2.jpg',
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: '549.99 ₼',
    color: 'Parrot Purple',
    description: '',
    features: ['',
      '',
      '',
      '',
      '',]
  },
  {
    id: 8,
    name: 'HONOR 600 12GB / 512GB',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/QY1NjxX4YS8io9vXKrQeXir1G3ZXrEsbJFBfIR97.png',
    imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: '1839.99 ₼',
    color: 'Orange',
    description: 'HONOR 600 Pro 12 GB / 512 GB Orange yüksək performans və fərqli dizaynı ilə seçilən premium smartfon modelidir. 12 GB operativ yaddaş və 512 GB daxili yaddaş sayəsində cihaz çoxsaylı tətbiqlərin eyni anda sürətli işləməsini təmin edir və böyük həcmli faylların rahat saxlanmasına imkan yaradır.',
    features: ['Əməliyyat sistemi: Android 16, up to 6 major Android upgrades, MagicOS 10',
      'Prosessor tipi (Chipset): Qualcomm SM8750-AB Snapdragon 8 Elite (3 nm)',
      'Ekran tipi: AMOLED, 1B colors, 120Hz, 3840Hz PWM, HDR Vivid, 8000 nits (peak)',
      'Əsas kamera: 200 MP, f/1.9, (wide), 1/1.4", 0.56µm, PDAF, OIS 50 MP, f/2.8, (telephoto), PDAF, 3.5x optical zoom 12 MP, f/2.2, 112˚ (ultrawide), AF',
      'Operativ yaddaş (RAM): 12 GB, Daxili yaddaş: 512 GB',]
  },
  {
    id: 9,
    name: 'POCO M8 8GB / 256GB',
    href: '#',
    imageSrc: 'https://strgimgr.b-cdn.net/img/product/280/b5ff5164-8e3a-4984-8d69-32818c645621.jpeg?width=300&height=300&quality=70',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '569.99 ₼',
    color: 'Black',
    description: '',
    features: ['',
      '',
      '',
      '',
      '',]
  },
  {
    id: 10,
    name: 'HONOR X9d 12GB / 256GB',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/ogZwH0mEMBnMlM04rzO3FT4EoG9xDW5T6HiM0Hk0.png',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '949.99 ₼',
    color: 'Reddish Brown',
    description: '',
    features: ['',
      '',
      '',
      '',
      '',]
  },
  {
    id: 11,
    name: 'Oppo Reno 15 12GB / 512GB',
    href: '#',
    imageSrc: 'https://cdn.kalvo.com/uploads/img/gallery/79093-oppo-reno15-1.jpg',
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: '1499.99 ₼',
    color: 'Aurora White',
    description: '',
    features: ['',
      '',
      '',
      '',
      '',]
  },
  {
    id: 12,
    name: 'Samsung Galaxy A57 (SM-A576) 8GB / 256GB',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/HUMs3pmQzPj4sdE6InwFesSXa9sYpIKPqLcG7zR7.png',
    imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: '1059.99 ₼',
    color: 'Sunrise Gold',
    description: '',
    features:['',
      '',
      '',
      '',
      '',]
  },
  {
    id: 13,
    name: 'Xiaomi Redmi Note15 Pro 12GB / 512GB',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/S0IDgzkSOuFIp9xcBjMklV9BWNz17IZzVyOmvG3v.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '799.99 ₼',
    color: 'Glacier Blue',
    description: '',
    features: ['',
      '',
      '',
      '',
      '',]
  },
  {
    id: 14,
    name: 'HONOR X8d 8GB / 256 GB Velvet',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/ZCh6Gdoxb69YqH7Xw2YEEIhMTHXhNO9X4IVlE65L.png',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '639.99 ₼',
    color: 'Velvet Grey',
    description: '',
    features: ['',
      '',
      '',
      '',
      '',]
  },
  {
    id: 15,
    name: 'iPhone 15 6GB / 128GB',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/27XGRsCgbSE5K0WRhoMh3J532R7HLCaGVXSyAw0F.webp',
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: '2999.99 ₼',
    color: 'Pink',
    description: '',
    features: ['',
      '',
      '',
      '',
      '',]
  },
  {
    id: 16,
    name: 'POCO X7 12GB / 512GB',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/JyG3eoH66cub9L7ff0ID1hyWjvz5NlDkrw9PaehU.png',
    imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: '669.99 ₼',
    color: 'Green',
    description: '',
    features: ['',
      '',
      '',
      '',
      '',]
  },
  {
    id: 17,
    name: 'Nokia 235DS',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/I7nCPrBi3VqTyL6dCSE12As4B6YbuAgdO3jj6mZt.webp',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '179.99 ₼',
    color: 'Purple',
    description: '',
    features: ['',
      '',
      '',
      '',
      '',]
  },
  {
    id: 18,
    name: 'Cubot X70 12GB / 256GB',
    href: '#',
    imageSrc: 'https://kontakt.az/media/catalog/product/cache/f8158826193ba5faa8b862a9bd1eb9e9/t/m/tm-dg-sbp-1105-sm-3365_1-0cf92ca1.webp',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '399.99 ₼',
    color: 'Space Black',
    description: '',
    features: ['',
      '',
      '',
      '',
      '',]
  },
  {
    id: 19,
    name: 'Oukitel C38 6GB / 256GB White',
    href: '#',
    imageSrc: 'https://kontakt.az/media/catalog/product/cache/fbd42596869cc4deb59edfc1ed742a64/t/m/tm-dg-sbp-1105-sm-3355_1-e0f90ab8.webp',
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: '309.99 ₼',
    color: 'White',
    description: '',
    features: ['',
      '',
      '',
      '',
      '',]
  },
  {
    id: 20,
    name: 'POCO C85 6GB / 128GB',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/p6NU9n7JeKg70tIJpocPcfYaEIL1O2qZVrpy6dw6.png',
    imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: '249.99 ₼',
    color: 'Green',
    description: '',
    features: ''
  },
  {
    id: 21,
    name: 'Apple MacBook Neo 13" A18 Pro (MHFD4RU)',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/Ie9BwVDnfdRg3RkBNra0Tr5fgKE32f5hcDhY8CM5.png',
    imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: '1459.99 ₼',
    color: 'Yellow',
    description: '',
    features: ''
  },
   {
    id: 22,
    name: 'Asus ExpertBook B9 OLED B9403CVAR-PP2269 (90NX05W1-M035F0)',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/usENM5r6TO3tA83KQP35SyqQdm5pc5geSbeAbufJ.png',
    imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: '3419.99 ₼',
    color: 'Gray',
    description: '',
    features: ''
  },
   {
    id: 23,
    name: 'Lenovo IdeaPad Slim 3 15IRH10 (83K1002ERK)',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/TvqHZ6ZhO50gvg57TndPwkpVTheLtHZfxOucv3kh.png',
    imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: '1389.99 ₼',
    color: 'Gray',
    description: '',
    features: ''
  },
   {
    id: 24,
    name: 'HONOR Magic Book Art 14 2024 Ultra7 Sunrise White (MRA-721) (Touchscreen)',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/Ix2XIgatvOMt27FKoJbPylsricdkr3NSi9Y0e9y4.webp',
    imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: '3039.99 ₼',
    color: 'Sunrise White',
    description: '',
    features: ''
  },
   {
    id: 25,
    name: 'HP Laptop 15-fd0323ci (D06L7EA)',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/nkApZztbwcFwL4seJUM3htg8oNiJpryZVVbNArWV.png',
    imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: '1169.99 ₼',
    color: 'Silver',
    description: '',
    features: ''
  },
   {
    id: 26,
    name: 'Acer Extensa 15 EX215-57-34VC (NX.EJAER.003)',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/v4pGSyow2hjs2FmLsOFWwK4ZMLTfIJYSv3LrBGEf.webp',
    imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: '839.99 ₼',
    color: 'Silver',
    description: '',
    features: ''
  },
   {
    id: 27,
    name: 'Lenovo LOQ 15IRX10 (83JE002BRK)',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/Z2KsDvG7BEi1ZZKXdKtZon6pnPTZKsDNPlATQ0TN.png',
    imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: '2569.99 ₼',
    color: 'Luna Grey',
    description: '',
    features: ''
  },
   {
    id: 28,
    name: 'Asus TUF Gaming FA506NCG-HN198 (90NR0JF7-M00JP0)',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/yIsmGU8mT2VvafWtMU1E0HawQWJk9zTcUDWyDlCW.png',
    imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: '2349.99 ₼',
    color: 'Graphite Black',
    description: '',
    features: ''
  },
   {
    id: 29,
    name: 'HONOR Magic Book X16 Space Gray (BRG_585) 2025',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/fhn6BSvjy9Hdg6bMQUnpieYSGvQUqJ9tXukA1Arc.webp',
    imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: '1159.99 ₼',
    color: 'Space Gray',
    description: '',
    features: ''
  },
   {
    id: 30,
    name: 'HP OMEN 16-AM0073DX (BZ4A3UA)',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/nQSETLXe1WA69k9ClffWPFJjc0XpSiK0eZNgz0C9.png',
    imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: '3179.99 ₼',
    color: 'Black',
    description: '',
    features: ''
  },
   {
    id: 31,
    name: 'Acer Nitro Lite NL16 71G-79LC (NH.D2AER.003)',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/eiYj1nTwZLJ0nEeA7aIScdA5FzTj1rEyS3WeAx2B.png',
    imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: '2009.99 ₼',
    color: 'Red',
    description: '',
    features: ''
  },
   {
    id: 32,
    name: 'Apple MacBook Air 15.3" M5 (MDVD4RU)',
    href: '#',
    imageSrc: 'https://storage.irshad.az/products/resized/Eda2ggUXQEOfX50hruu5Zgfk9iJv4z5F8TOezrRj.png',
    imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: '3159.99 ₼',
    color: 'Starlight',
    description: '',
    features: ''
  },
]


export default function Marketplace() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}

                className="aspect-square w-full rounded-md bg-gray-100 object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to="/marketplace/₼id" params={{id: product.id.toString()}}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                      </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
