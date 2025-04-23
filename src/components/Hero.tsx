import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Clock, Leaf, ChefHat } from 'lucide-react';

const heroLines = [
  "Missing home food?",
  "Craving mom's special recipes?",
  "Tired of mess food?",
  "Get home-style meals delivered!"
];

const mealCategories = [
  { icon: Leaf, label: "Veg", color: "#166534" },
  { icon: Clock, label: "Meal Plans", color: "#B45309" },
  { icon: ChefHat, label: "Chef's Special", color: "#9A3412" },
];

function ImageCarousel() {
  const carouselImages = [
    'https://media-hosting.imagekit.io/551c10bf2d9143e4/3.png?Expires=1839430810&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=azLl4iKhpAxaZjcoWU8mIKmoAzoA8Ras1owGR3IPwyicflEUpwfMBO0j~Xym1UZrRqMMCALrug2EHUJje5mlGk5zXuHfWt3IrNWvSIhYhtmV2jEt2PZKihg3K4W3gr4a14Gvcagyu1~y6oefaidJOipPc1H4SedMBkt28EAzKWBF256lLHGWRrNkE5CWvzTCmtukI7TgV3Ox9QLz4c1uChBHNkdSIU1-MvpcVy~V-zCH0ZTXF~2u~06asIFMaF-ECMgxH3z4RRMYVFUnb35nr6Ece84yGcyVFL~YsfrXn9GhLB4LZou3lJyNeC5Ld4ZAtAVfUFk0w-Dd1rZvKlcgOQ__',
    'https://media-hosting.imagekit.io/75746365efa84c5f/2.png?Expires=1839430779&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1JTHROB~q04fs63nH967xOCdoHPxuzAOspMk~L6kn6j-G5gg76XcnMzHaPBzQuy-F821hUekRajD13a5C5ap6l8EbDIZNasZ9Zotoitkr3tlMvtQSXJd9qHe3z6ijJ40YNxUcycLYMo0KY~hgF05W3FsYzOKR5nEThOLrIDRz8y6R92soEZeCQ0ZSREUGb6V~ZROZKD-qafK6mf7al-us6sKj15uqsjIrEY5iWy8WO-S20k3m6Yg1HIRcxxzRHnen2mTRdYocfSY6oQ6WwIckroK-v35ekIPlA79wksk6DNcC0OuEN7ykdICvG4H1scwL9u7TUkm6guot1L8P3riXQ__',
    'https://media-hosting.imagekit.io/b8cc5294003048e9/1.png?Expires=1839430728&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=A7Ik549w0kafqo3gyaLt7LEvJYX7zoj7Tb3m5E0bK~JtlJ-i1eGCZw0ZdSQgHP2OtlAWGLtNSSnqt7WqEyTr65MGdxz-uQHkQIJxUzcvtybsgIQSwMK9nJjtojFftbsUTlBiGp~EOG-w-1H~ZlCuRUQZ4TsmMI4iFJro-1MjMMPrMj36jwMbh-sfUNN-6Q5rLJjPr9rLEgCy70881ZTvwQBSJrEnPcO7iiZKp9EbR-duOpeVH3KCpZo2cBhP4QESKvd2wLTrwiVtxoFuN~jDskVXqEJewwUle6MF~aVutwch4CfEevCP6qCREX8uK8ZOaDN2NeyZgPdOAN-Fo8QbNQ__',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="w-full h-full relative rounded-3xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={carouselImages[currentImageIndex]}
          src={carouselImages[currentImageIndex]}
          alt="Delicious Home-Cooked Meal"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.7 }}
        />
        <div className="absolute" />
      </AnimatePresence>
    </div>
  );
}

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
    <div className="relative min-h-screen bg-gradient-to-br from-[#FFB703] to-[#FB8500] font-['Inter'] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#4A2600] opacity-5 pattern-dots-lg" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
          {/* Left Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8 relative z-10"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-[#023047] leading-tight">
                {displayText}
                <span className="animate-pulse text-[#D62828]">|</span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg md:text-xl text-[#023047] max-w-lg font-medium"
              >
                Get delicious, home-cooked meals delivered to your hostel. Just like mom makes it! 🏠👩‍🍳
              </motion.p>
            </div>

            {/* Quick Category Access */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-3 gap-4"
            >
              {mealCategories.map((category, index) => (
                <motion.button
                  key={category.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center p-4 bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <category.icon className="w-6 h-6 mb-2" style={{ color: category.color }} />
                  <span className="text-sm font-medium text-[#023047]">{category.label}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FB8500] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Link
                  to="menu"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="flex items-center gap-2"
                >
                  <ChefHat className="w-5 h-5" />
                  Order Now
                </Link>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/90 text-[#023047] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white"
              >
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                >
                  View Menu
                </Link>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-8 text-[#023047]"
            >
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-lg">
                <span className="text-3xl font-bold">500+</span>
                <div className="text-sm font-medium">
                  <div>Happy</div>
                  <div>Hostelers</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-lg">
                <span className="text-3xl font-bold">15+</span>
                <div className="text-sm font-medium">
                  <div>Home</div>
                  <div>Chefs</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px] p-6"
          >
            <ImageCarousel />
            
            {/* Decorative Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-10 right-0 w-32 h-32 bg-white opacity-20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-10 left-0 w-32 h-32 bg-[#D62828] opacity-20 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Hero />
    </div>
  );
}
