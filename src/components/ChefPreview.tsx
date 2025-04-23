import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Parallax } from "react-parallax";
import { X, Star } from "lucide-react";

// Define the Chef interface
interface Chef {
  name: string;
  image: string;
  specialty: string;
  rating: number;
  reviews: number;
  featured: string;
  location: string;
  bio: string;
  photos: string[];
}

// Explicitly type the chefs array
const chefs: Chef[] = [
  {
    name: "Priya Sharma",
    image:
      "https://imgs.search.brave.com/UIu_vYLYTkYzcRf66u1YWjjJupD6BiV2Q5VJ0rQDH4s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/ODk2MjI4Ny9waG90/by9pbmRpYW4teW91/bmctd29tZW4tc3Rv/Y2stcGhvdG8uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXhE/TTlLSjJaZHB4ZUlO/ZTQzSnJhcGRkRHJj/VGtBbEExS0U3UGRm/YkZ0MDg9",
    specialty: "North Indian",
    rating: 4.0,
    reviews: 128,
    featured: "Butter Chicken",
    location: "New Delhi, India",
    bio: "With 10 years of experience, Priya specializes in authentic North Indian cuisine, bringing rich flavors to every dish.",
    photos: [
      "https://source.unsplash.com/400x300/?food,indian",
      "https://source.unsplash.com/400x300/?kitchen,chef",
      "https://source.unsplash.com/400x300/?spices,cooking",
    ],
  },
  {
    name: "Rajesh Kumar",
    image:
      "https://knot9prod.s3.amazonaws.com/thumbnails/022113/hover_022113066.jpg",
    specialty: "South Indian",
    rating: 4.5,
    reviews: 156,
    featured: "Masala Dosa",
    location: "Chennai, India",
    bio: "Rajesh brings the flavors of South India to life with traditional recipes passed down for generations.",
    photos: [
      "https://source.unsplash.com/400x300/?food,dosa",
      "https://source.unsplash.com/400x300/?chef,restaurant",
      "https://source.unsplash.com/400x300/?spices,indian",
    ],
  },
  {
    name: "Anjali Patel",
    image:
      "https://imgs.search.brave.com/79XI4PKXOc1xfM1K5zVYq9lnDYDJn5MHmm-Di2gJF1A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9pbmRpYW4tcGVv/cGxlLWVuam95aW5n/LXRyYWRpdGlvbmFs/LWluZGlhbi1mb29k/cy1mcnVpdHMtY3Vy/cnktc25hY2tzLWRl/c3NlcnRzXzk3ODc4/Ni00NzU4My5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQw",
    specialty: "Gujarati",
    rating: 4.2,
    reviews: 142,
    featured: "Thepla",
    location: "Ahmedabad, India",
    bio: "Anjali specializes in Gujarati cuisine, focusing on healthy, homely, and delicious meals made with love.",
    photos: [
      "https://source.unsplash.com/400x300/?food,gujarati",
      "https://source.unsplash.com/400x300/?chef,cooking",
      "https://source.unsplash.com/400x300/?spices,food",
    ],
  },
];

export function ChefPreview() {
  const [selectedChef, setSelectedChef] = useState<Chef | null>(null);

  // Popup animation variants
  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  // Container variants for staggering chef cards
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  // Variants for individual chef cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <Parallax
      blur={0}
      bgImage="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80"
      strength={200}
      className="!bg-fixed"
    >
      <section className="py-24 bg-black/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Meet Our Expert Home Chefs
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Passionate cooks bringing authentic flavors and years of experience to your plate.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {chefs.map((chef) => (
              <motion.div
                key={chef.name}
                className="bg-white rounded-2xl p-6 shadow-lg text-center relative overflow-hidden"
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="mt-4">
                  <motion.h3
                    className="text-xl font-semibold text-gray-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {chef.name}
                  </motion.h3>
                  <motion.p
                    className="text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {chef.specialty}
                  </motion.p>
                </div>

                {/* Animated Star Rating */}
                <div className="flex justify-center mt-2">
                  {[0, 1, 2, 3, 4].map((starIndex) => {
                    const fillPercent = Math.min(Math.max(chef.rating - starIndex, 0), 1) * 100;
                    return (
                      <div key={starIndex} className="relative w-5 h-5 mx-0.5">
                        {/* Background empty star */}
                        <Star className="w-5 h-5 text-gray-300 absolute" />

                        {/* Animated filled star */}
                        <motion.div
                          className="absolute top-0 left-0 h-full overflow-hidden"
                          style={{ width: `${fillPercent}%` }}
                          initial={{ width: 0 }}
                          animate={{ width: `${fillPercent}%` }}
                          transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: starIndex * 0.1,
                          }}
                        >
                          <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        </motion.div>
                      </div>
                    );
                  })}
                </div>

                <motion.p
                  className="text-gray-600 mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {chef.reviews} reviews
                </motion.p>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#fb923c" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mt-4"
                  onClick={() => setSelectedChef(chef)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  View Profile
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedChef && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedChef(null)}
          >
            <motion.div
              className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full relative"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setSelectedChef(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
              <motion.img
                src={selectedChef.image}
                alt={selectedChef.name}
                className="w-full h-48 object-cover rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
              <motion.h3
                className="text-2xl font-bold mt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {selectedChef.name}
              </motion.h3>
              <motion.p
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {selectedChef.specialty}
              </motion.p>
              <motion.p
                className="text-gray-500 text-sm mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {selectedChef.location}
              </motion.p>
              <motion.p
                className="text-gray-700 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {selectedChef.bio}
              </motion.p>
              <motion.div
                className="mt-6 grid grid-cols-3 gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {selectedChef.photos.map((photo, index) => (
                  <motion.img
                    key={index}
                    src={photo}
                    alt="Food"
                    className="w-full h-20 object-cover rounded"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Parallax>
  );
}
