// components/PlanDetails.tsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import NavbarSecondary from './NavbarSecondary';

export function PlanDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state;

  if (!plan) {
    navigate('/');
    return null;
  }

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    deliveryAddress: '',
    preferredDate: '',
    numberOfMeals: '',
    dietaryRequirements: '',
    additionalComments: '',
    paymentMethod: 'Cash on Delivery',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Survey Submitted:', formData);
    navigate('/');
  };

  // Variants for staggered form fields
  const fieldVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen relative">
      {/* NavbarSecondary redirects all links to home */}
      <NavbarSecondary />

      {/* Background Gradient matching Hero */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 opacity-70 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        {/* Plan Details Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 50 }}
          transition={{ duration: 0.5 }}
          className="mb-8 bg-white p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4"> {plan.name} Details </h2>
          <p className="text-xl mb-6">
            Plan Price: <span className="font-bold">₹{plan.price}</span> / {plan.duration}
          </p>
          <ul className="mb-6 space-y-2">
            {plan.features.map((feature: string) => (
              <li key={feature} className="flex items-center">
                <Check className="w-5 h-5 mr-2 text-green-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Expanded Survey Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6">Plan Survey & Details</h3>
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div variants={fieldVariants}>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 mt-1"
              />
            </motion.div>
            <motion.div variants={fieldVariants}>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 mt-1"
              />
            </motion.div>
            <motion.div variants={fieldVariants}>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 mt-1"
              />
            </motion.div>
            <motion.div variants={fieldVariants}>
              <label className="block text-sm font-medium">Delivery Address</label>
              <textarea
                name="deliveryAddress"
                placeholder="Enter your full delivery address"
                rows={3}
                value={formData.deliveryAddress}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 mt-1"
              ></textarea>
            </motion.div>
            <motion.div variants={fieldVariants}>
              <label className="block text-sm font-medium">Preferred Delivery Date</label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 mt-1"
              />
            </motion.div>
            <motion.div variants={fieldVariants}>
              <label className="block text-sm font-medium">Number of Meals</label>
              <input
                type="number"
                name="numberOfMeals"
                placeholder="Enter number of meals"
                value={formData.numberOfMeals}
                onChange={handleChange}
                min={1}
                required
                className="w-full border rounded-lg px-4 py-2 mt-1"
              />
            </motion.div>
            <motion.div variants={fieldVariants}>
              <label className="block text-sm font-medium">Dietary Requirements</label>
              <input
                type="text"
                name="dietaryRequirements"
                placeholder="e.g., Vegetarian, Gluten-Free"
                value={formData.dietaryRequirements}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 mt-1"
              />
            </motion.div>
            <motion.div variants={fieldVariants}>
              <label className="block text-sm font-medium">Additional Comments</label>
              <textarea
                name="additionalComments"
                placeholder="Any special requests or comments?"
                rows={3}
                value={formData.additionalComments}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 mt-1"
              ></textarea>
            </motion.div>
            <motion.div variants={fieldVariants}>
              <label className="block text-sm font-medium">Payment Method</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 mt-1"
              >
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="Credit Card">Credit Card</option>
                <option value="UPI">UPI</option>
                <option value="Net Banking">Net Banking</option>
              </select>
            </motion.div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fieldVariants}
              className="w-full bg-primary text-white py-2 rounded-lg font-medium mt-4 hover:bg-secondary transition-colors"
            >
              Submit Survey
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}

export default PlanDetails;
