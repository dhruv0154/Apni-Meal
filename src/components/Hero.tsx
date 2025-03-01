import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';


const heroLines = [
  "Craving a taste of home?",
  "Experience meals made with passion.",
  "Every dish tells a story.",
  "Welcome to Apni Meal – comfort delivered."
];
const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Chefs', to: 'chefs' },
  { name: 'Menu', to: 'menu' },
  { name: 'Blog', to: 'blog' },
  { name: 'FAQ', to: 'faq' },
];

function ImageCarousel() {
  const carouselImages = [
    'https://imgs.search.brave.com/V1HgSBzRv62vRoWgznkSoLuJM9-1EDht-kx6K-jcjHA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMi9NZWFs/LVBORy1QaG90by5w/bmc',
    'https://imgs.search.brave.com/8SumRmaDXyU6Su7OBRez3S4Oy6qNn-tKFTZfGLlVXJI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMi9IZWFs/dGh5LU1lYWwtUE5H/LnBuZw',
    'https://imgs.search.brave.com/WRScD1RaAOwXRKLHoC3k7sZriDjlSvH6mZYuyNDSqmo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmd0/ZWFtLmNvbS9pbWFn/ZXMvbWVhbC1wbmct/NzMweDc1MV9iY2Iz/OTgyMl90cmFuc3Bh/cmVudC5wbmc'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % carouselImages.length);
    }, 4000); // Switch image every 4 seconds
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="w-full flex justify-center mb-8 relative h-64">
      <AnimatePresence mode="wait">
        <motion.img
          key={carouselImages[currentImageIndex]}
          src={carouselImages[currentImageIndex]}
          alt="Delicious Meal"
          className="max-w-xs md:max-w-md h-full object-contain rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </div>
  );
}

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for hero text
  useEffect(() => {
    const currentLine = heroLines[currentLineIndex];
    const typeSpeed = isDeleting ? 30 : 50;

    if (!isDeleting && displayText === currentLine) {
      setTimeout(() => setIsDeleting(true), 1500);
      return;
    }
    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentLineIndex(prev => (prev + 1) % heroLines.length);
      return;
    }
    const timeout = setTimeout(() => {
      setDisplayText(prev =>
        isDeleting ? prev.slice(0, -1) : currentLine.slice(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentLineIndex]);

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-orange-400 to-red-500">
      {/* Background Blobs */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute top-0 left-0 w-48 h-48 bg-white opacity-20 rounded-full filter blur-2xl"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-20 rounded-full filter blur-2xl"
      />

      {/* Decorative elements on left and right with vertical bouncing */}
      <motion.div
        initial={{ x: -100, opacity: 0, y: 0 }}
        animate={{ x: 0, opacity: 1, y: [0, 10, 0] }}
        transition={{
          x: { duration: 1, delay: 1, repeat: 0 },
          y: { duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" },
          opacity: { duration: 1, delay: 1 }
        }}
        className="absolute left-4 top-1/3 transform -translate-y-1/2"
      >
        <img
          src="https://img.icons8.com/color/96/000000/chef-hat.png"
          alt="Chef Hat Decoration"
          className="w-22 h-22"
        />
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0, y: 0 }}
        animate={{ x: 0, opacity: 1, y: [0, 10, 0] }}
        transition={{
          x: { duration: 1, delay: 1, repeat: 0 },
          y: { duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" },
          opacity: { duration: 1, delay: 1 }
        }}
        className="absolute right-4 top-1/3 transform -translate-y-1/2"
      >
        <img
          src="https://imgs.search.brave.com/R3InJ0w7FDy5SKx_OWTMt6aC5xIWV8IEtWJnp7QDbHc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudmV4ZWxzLmNv/bS9tZWRpYS91c2Vy/cy8zLzI0MTgzNC9p/c29sYXRlZC9wcmV2/aWV3Lzk0NzZjOTk0/OTEyNTMyMWUzNjEx/ZGRhYTMwMjg0Yjk5/LXNwYXR1bGEtY29s/b3Itc3Ryb2tlLnBu/Zw"
          alt="Utensils Decoration"
          className="w-24 h-24"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* Image Carousel Above Text */}
        <ImageCarousel />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {displayText}
            <span className="animate-pulse">|</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Authentic home-cooked meals delivered right to your doorstep.
          </motion.p>
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-red-500 px-6 py-3 rounded-full font-medium"
          >
           <Link
                to="menu"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
              >
                Order Now
              </Link>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-medium"
          >
            <Link
                to='about'
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}>
                  Learn More
              </Link>
            
          </motion.button>
        </motion.div>

        {/* Bouncing Down Arrow */}
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

export function Features() {
  const featuresData = [
    {
      title: 'Fresh Ingredients',
      description: 'We use locally sourced, fresh ingredients to make your meals as delicious as possible.',
    },
    {
      title: 'Expert Chefs',
      description: 'Our chefs have years of experience preparing authentic home-cooked meals.',
    },
    {
      title: 'Fast Delivery',
      description: 'Enjoy your meal delivered hot and fresh to your doorstep in record time.',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-gray-800 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Apni Meal?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white rounded-lg transition"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Hero />
      <Features />
    </div>
  );
}
