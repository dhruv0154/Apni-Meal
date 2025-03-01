// components/SubscriptionPlans.tsx
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: "Monthly Plan",
    price: 1999,
    duration: "Monthly",
    description: "Perfect for regular meals",
    features: [
      "20 meals per month",
      "Free delivery",
      "Flexible delivery timing",
      "Basic meal customization",
      "24/7 support",
    ],
    isPopular: false,
  },
  {
    name: "Semester Plan",
    price: 8999,
    duration: "4 Months",
    description: "Best value for long term",
    features: [
      "60 meals per semester",
      "Free priority delivery",
      "Any time delivery",
      "Full meal customization",
      "24/7 priority support",
      "Special weekend menu",
      "Carry forward unused meals",
    ],
    isPopular: true,
  },
];

export function SubscriptionPlans() {
  const navigate = useNavigate();

  return (
    <section className="relative py-16 bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute z-0 top-[-50px] left-[-50px] w-64 h-64 bg-blue-400 rounded-full opacity-40 filter blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute z-0 bottom-[-50px] right-[-50px] w-80 h-80 bg-green-400 rounded-full opacity-40 filter blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute z-0 top-1/2 left-1/2 w-56 h-56 bg-purple-400 rounded-full opacity-40 filter blur-2xl"
        animate={{ x: [-30, 30, -30], y: [-30, 30, -30] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
              Save More with Meal Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Subscribe to our meal plans and enjoy great savings on your daily meals.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotate: [0, 1, 0],
                boxShadow: "0px 0px 30px rgba(0,0,0,0.2)",
              }}
              className={`relative rounded-2xl p-8 transform transition-all ${
                plan.isPopular
                  ? 'bg-primary text-white shadow-xl'
                  : 'bg-white text-charcoal'
              }`}
            >
              {plan.isPopular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-green text-white px-4 py-1 rounded-full text-sm font-medium"
                >
                  Best Value
                </motion.div>
              )}
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.isPopular ? 'text-white/90' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <motion.div
                  className="flex items-baseline justify-center"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-4xl font-bold">₹{plan.price}</span>
                  <span className={`ml-2 ${plan.isPopular ? 'text-white/90' : 'text-gray-600'}`}>
                    /{plan.duration}
                  </span>
                </motion.div>
              </motion.div>
              <motion.ul
                className="space-y-4 mb-8"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {plan.features.map((feature) => (
                  <motion.li
                    key={feature}
                    className="flex items-center"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
                    }}
                  >
                    <motion.div whileHover={{ rotate: 360, transition: { duration: 0.6 } }}>
                      <Check className={`w-5 h-5 mr-3 ${plan.isPopular ? 'text-white' : 'text-primary'}`} />
                    </motion.div>
                    <span className="text-sm">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.button
                whileHover={{ scale: 1.1, rotate: [0, 2, 0] }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/plan-details", { state: plan })}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.isPopular
                    ? 'bg-white text-primary hover:bg-white/90'
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
              >
                Subscribe Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
