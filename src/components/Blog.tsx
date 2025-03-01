import { motion } from 'framer-motion';
import { ChefHat, Users, Book, Coffee, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "From Grandma's Kitchen to Your Hostel: The Inspiring Journey of Chef Meera",
    category: "Chef Spotlights",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80",
    excerpt: "Discover how Chef Meera transformed her family's traditional recipes into a successful culinary venture.",
    icon: ChefHat,
    date: "March 15, 2024",
  },
  {
    title: "How Apni Meal Turned My Stressful Finals Week into a Gourmet Experience",
    category: "Student Stories",
    image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?auto=format&fit=crop&q=80",
    excerpt: "Read about how proper nutrition helped students ace their exams while enjoying delicious meals.",
    icon: Users,
    date: "March 12, 2024",
  },
  {
    title: "5 Nutritious Recipes to Keep You Energized During Long Study Sessions",
    category: "Recipe & Nutrition Tips",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80",
    excerpt: "Expert-approved recipes that combine taste with the nutrition needed for peak academic performance.",
    icon: Book,
    date: "March 10, 2024",
  },
  {
    title: "A Day in the Life of an Apni Meal Chef: Passion, Practice, and Perfect Flavors",
    category: "Behind the Scenes",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80",
    excerpt: "Get an exclusive peek into how our chefs create magic in their kitchens every day.",
    icon: Coffee,
    date: "March 8, 2024",
  },
];

export function Blog() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
              The Apni Meal Blog
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your daily dose of food inspiration, from chef stories to nutrition tips
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
            >
              <div className="relative h-64">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur-sm">
                      <post.icon className="w-4 h-4 mr-2" />
                      {post.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-semibold text-charcoal mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-primary font-medium inline-flex items-center group/btn">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex flex-col items-center">
            <button className="bg-primary text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-primary/90 transition-colors inline-flex items-center group">
              View All Posts
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="mt-4">
              <button className="text-primary font-medium hover:text-primary/90 transition-colors">
                Subscribe to our newsletter →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}