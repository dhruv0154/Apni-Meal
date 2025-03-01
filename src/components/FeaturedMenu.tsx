import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Flame,
  Star,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { QuickOrderModal } from "./QuickOrderModal";

const menuItems = [
  {
    name: "Maa's Special Thali",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80",
    price: 149,
    chef: "Priya Sharma",
    prepTime: "30 min",
    isPopular: true,
    rating: 4.8,
    reviews: 128,
    description:
      "A complete meal with 3 rotis, dal, rice, 2 sabzi, raita, and dessert. Enjoy a burst of flavors in every bite!",
    tags: ["Bestseller", "Must Try"],
  },
  {
    name: "South Indian Combo",
    image:
      "https://images.unsplash.com/photo-1610192244261-3f33de3f55e3?auto=format&fit=crop&q=80",
    price: 129,
    chef: "Rajesh Kumar",
    prepTime: "25 min",
    isPopular: true,
    rating: 4.7,
    reviews: 156,
    description:
      "2 masala dosas with sambar, coconut chutney, and filter coffee. A delightful combination of crispy and savory.",
    tags: ["Trending"],
  },
  {
    name: "Gujarati Delight",
    image:
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80",
    price: 139,
    chef: "Anjali Patel",
    prepTime: "35 min",
    isPopular: false,
    rating: 4.6,
    reviews: 92,
    description:
      "Thepla served with a flavorful curry, dal, rice, and kadhi. A wholesome meal packed with authentic Gujarati taste.",
    tags: ["New"],
  },
  {
    name: "Protein Bowl",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80",
    price: 169,
    chef: "Priya Sharma",
    prepTime: "20 min",
    isPopular: true,
    rating: 4.9,
    reviews: 78,
    description:
      "A healthy mix of quinoa, grilled chicken, roasted vegetables, and hummus. Perfect for a balanced meal.",
    tags: ["Healthy", "High Protein"],
  },
  {
    name: "Veggie Paradise",
    image:
      "https://images.unsplash.com/photo-1584302178571-d35f5b07d54d?auto=format&fit=crop&q=80",
    price: 159,
    chef: "Ankit Verma",
    prepTime: "28 min",
    isPopular: false,
    rating: 4.5,
    reviews: 67,
    description:
      "A medley of fresh vegetables with a tangy twist, served with aromatic rice. A feast for both the eyes and the palate.",
    tags: ["Vegetarian"],
  },
  {
    name: "Spicy Ramen Bowl",
    image:
      "https://images.unsplash.com/photo-1617191519879-6841e02c6a14?auto=format&fit=crop&q=80",
    price: 189,
    chef: "Nisha Singh",
    prepTime: "22 min",
    isPopular: true,
    rating: 4.7,
    reviews: 89,
    description:
      "A hearty bowl of spicy ramen with a rich broth, fresh toppings, and a kick of heat. Perfect for ramen lovers.",
    tags: ["Trending", "Spicy"],
  },
  // You can add more items here as needed.
];

// Updated SampleMenuModal Component
function SampleMenuModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-xl p-6 shadow-2xl max-w-xl w-full relative max-h-[80vh] overflow-y-auto"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 transition-colors"
              onClick={onClose}
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4">Full Menu</h2>
            <p className="text-gray-600 mb-4">
              Explore our complete selection of dishes with detailed
              descriptions, prices, and chef information.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="p-4 border rounded-lg flex flex-col space-y-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-32 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">Price: ₹{item.price}</p>
                    <p className="text-sm text-gray-500">Chef: {item.chef}</p>
                    <p className="text-sm text-gray-500">
                      Prep Time: {item.prepTime}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function FeaturedMenu() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isSampleMenuModalOpen, setIsSampleMenuModalOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setDragWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        className="py-24 bg-charcoal relative overflow-hidden"
        style={{
          backgroundImage: "url('https://source.unsplash.com/featured/?meal')",
          backgroundSize: "cover",
        }}
      >
        {/* Animated Background Blobs */}
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 bg-primary opacity-20 rounded-full filter blur-2xl"
          animate={{ x: [0, 40, 0], y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-32 h-32 bg-secondary opacity-20 rounded-full filter blur-2xl"
          animate={{ x: [0, -40, 0], y: [0, -40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-10 right-10 w-20 h-20 bg-primary opacity-10 rounded-full filter blur-xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-20 h-20 bg-secondary opacity-10 rounded-full filter blur-xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
            >
              Today's Special Menu
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-white/90 max-w-2xl mx-auto"
            >
              Enjoy our curated selection of home-cooked meals, made fresh daily.
            </motion.p>
          </div>

          {/* Horizontal Carousel Container */}
          <div className="relative">
            {/* Left Arrow */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={scrollLeft}
              className="absolute left-[-50px] top-1/2 z-20 p-2 bg-white rounded-full shadow-md"
            >
              <ArrowLeft className="w-6 h-6 text-primary" />
            </motion.button>

            {/* Right Arrow */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={scrollRight}
              className="absolute right-[-50px] top-1/2 z-20 p-2 bg-white rounded-full shadow-md"
            >
              <ArrowRight className="w-6 h-6 text-primary" />
            </motion.button>

            {/* Draggable Carousel */}
            <motion.div ref={carouselRef} className="cursor-grab overflow-hidden">
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -dragWidth }}
                className="flex space-x-8 py-4"
                whileDrag={{ cursor: "grabbing" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="bg-white rounded-2xl overflow-hidden shadow-md transition-all group w-80 flex-shrink-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      {item.tags.map((tag, i) => (
                        <div
                          key={tag}
                          className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center"
                          style={{ transform: `translateY(${i * 40}px)` }}
                        >
                          {tag === "Bestseller" && (
                            <Flame className="w-4 h-4 mr-1" />
                          )}
                          {tag}
                        </div>
                      ))}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-charcoal">
                          {item.name}
                        </h3>
                        <div className="flex items-center text-primary">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1 font-medium">{item.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.prepTime}
                        </div>
                        <span className="text-sm text-gray-500">
                          {item.reviews} reviews
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500">From</span>
                          <span className="text-2xl font-semibold text-charcoal">
                            ₹{item.price}
                          </span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setIsOrderModalOpen(true)}
                          className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                        >
                          Order Now
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSampleMenuModalOpen(true)}
              className="bg-white text-primary px-8 py-3 rounded-full font-medium text-lg hover:bg-white/90 transition-colors"
            >
              View Full Menu
            </motion.button>
          </motion.div>
        </div>
        <QuickOrderModal
          isOpen={isOrderModalOpen}
          onClose={() => setIsOrderModalOpen(false)}
        />
        <SampleMenuModal
          isOpen={isSampleMenuModalOpen}
          onClose={() => setIsSampleMenuModalOpen(false)}
        />
      </section>
    </>
  );
}

export default FeaturedMenu;
