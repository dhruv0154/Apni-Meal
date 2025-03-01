import { motion } from 'framer-motion';
import { Clock, Award, Truck, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Fresh & On Time',
    description: 'Hot meals delivered right when you need them, prepared fresh by our home chefs.',
  },
  {
    icon: Award,
    title: 'Trusted Chefs',
    description: 'Experienced home chefs vetted for quality and food safety standards.',
  },
  {
    icon: Truck,
    title: 'Hostel Delivery',
    description: 'Direct delivery to all major hostels and PGs in your area.',
  },
  {
    icon: CreditCard,
    title: 'Student Discounts',
    description: 'Special pricing and meal plans designed for student budgets.',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4"
          >
            Why Choose Apni Meal?
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We bring the comfort of home-cooked meals to your doorstep, making sure you never miss out on quality food.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}