import { motion } from 'framer-motion';
import { Users, Heart, Award } from 'lucide-react';

export function About() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 bg-primary opacity-10 rounded-full"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

<motion.div
        className="absolute top-0 left-0 w-32 h-32 bg-primary opacity-10 rounded-full"
        animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

<motion.div
        className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-10 rounded-full"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

<motion.div
        className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-10 rounded-full"
        animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full"
        animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

    <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

<motion.div
        className="absolute bottom-0 left-0 w-32 h-32 bg-secondary opacity-10 rounded-full"
        animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

    <motion.div
        className="absolute bottom-0 left-0 w-32 h-32 bg-secondary opacity-10 rounded-full"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-6">
            Welcome to Apni Meal – Where Home-Cooked Love Meets Student Life
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Apni Meal, we believe that the comforting taste of a home-cooked meal can transform even the busiest hostel life into a warm, satisfying experience.
          </p>
        </motion.div>

        {/* Core Values Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {}
          }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Our Story</h3>
            <p className="text-gray-600">
              Founded by passionate food enthusiasts who grew up cherishing family recipes, our journey began with the simple idea of bringing authentic, homemade food to students.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Our Mission</h3>
            <p className="text-gray-600">
              We are committed to delivering nutritious and delicious meals crafted by experienced home chefs, making every meal feel like a warm hug from home.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Our Vision</h3>
            <p className="text-gray-600">
              We envision a future where every student can enjoy affordable, healthy, and comforting meals without compromising on taste or quality.
            </p>
          </motion.div>
        </motion.div>

        {/* Meet Our Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-2xl font-display font-bold text-charcoal mb-6 text-center">
            Meet Our Team
          </h3>
          <p className="text-gray-600 mb-8 text-center">
            Our team is a blend of culinary experts, tech-savvy professionals, and customer care champions who work tirelessly to ensure every meal not only satisfies hunger but also nourishes the soul.
          </p>
          <div className="flex justify-center">
            <motion.button whileHover={{ scale: 1.05 }} className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
              Join Our Journey
            </motion.button>
          </div>
        </motion.div>

        {/* New Section: Our Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-display font-bold text-charcoal mb-8 text-center">
            Our Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-primary mb-2"
              >
                1000+
              </motion.div>
              <p className="text-gray-600">Meals Delivered</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-primary mb-2"
              >
                200+
              </motion.div>
              <p className="text-gray-600">Home Chefs</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-primary mb-2"
              >
                95%
              </motion.div>
              <p className="text-gray-600">Customer Satisfaction</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
