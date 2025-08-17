import { createClient } from '@supabase/supabase-js';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Building, ChevronRight, Gavel, HeartHandshake, Quote, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { legalQuotes } from '../data/quotes';

// Define Blog type for recentArticles
interface Blog {
  id: string;
  title: string;
  slug: string;
  featured_image?: string;
  cover_url?: string;
  created_at: string;
  is_featured?: boolean;
}

export function LandingPage() {
  const [currentQuote, setCurrentQuote] = useState(0);

  // Rotate quotes on page refresh/load
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * legalQuotes.length);
    setCurrentQuote(randomIndex);
  }, []);

   const practiceAreas = [
  { icon: Building, title: 'Real Estate', description: 'Comprehensive legal support for property transactions and development' },
  { icon: HeartHandshake, title: 'Personal & Family Law', description: 'Guidance on succession, partition, matrimonial, and related matters' },
  { icon: Gavel, title: 'Dispute Resolution', description: 'Expert litigation and alternative dispute resolution services' },
  { icon: Briefcase, title: 'Corporate Law', description: 'Strategic counsel for business transactions and governance' },
];


  const testimonials = [
    {
      name: 'Sarah Mitchell',
      position: 'CEO, TechVision Inc.',
      content: 'Solv. provided exceptional guidance during our IPO process. Their expertise in corporate law and attention to detail was remarkable.',
      rating: 5
    },
    {
      name: 'David Chen',
      position: 'General Counsel, InnovateX',
      content: 'The IP protection strategy developed by Solv. has been instrumental in securing our competitive advantage in the market.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      position: 'Founder, GreenTech Solutions',
      content: 'Professional, knowledgeable, and always available. Solv. has been our trusted legal partner for over three years.',
      rating: 5
    }
  ];

  // Recent Articles State
  const [recentArticles, setRecentArticles] = useState<Blog[]>([]);

  useEffect(() => {
    const supabase = createClient(
      import.meta.env.VITE_SUPABASE_URL || '',
      import.meta.env.VITE_SUPABASE_ANON_KEY || ''
    );
    async function fetchArticles() {
      const { data } = await supabase
        .from('articles') // <-- FIXED: use 'articles' table
        .select('*')
        .order('created_at', { ascending: false })
        .limit(3);
      if (data) {
        setRecentArticles(data);
      }
    }
    fetchArticles();
  }, []);

  function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative text-white overflow-hidden"
        style={{
          backgroundImage: "url('/office-1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '70vh', // Increased height for a more immersive hero
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-800/40 to-slate-700/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-44">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold font-serif mb-6 leading-tight drop-shadow-xl">
                Legal Excellence
                <span className="block text-slate-300">Redefined</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed drop-shadow-lg">
                Navigate complex legal challenges with confidence. Solv. delivers innovative solutions 
                backed by decades of expertise, precision, and unwavering commitment to your success.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-white text-slate-900 px-8 py-4 rounded-md font-semibold hover:bg-slate-100 transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Speak With Our Experts</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-slate-900 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Our Services</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900 mb-4">
              Areas of Practice
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our comprehensive legal services span across multiple practice areas, 
              ensuring expert guidance for every aspect of your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <area.icon className="h-12 w-12 text-slate-700 mb-4 group-hover:text-slate-900 transition-colors" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{area.title}</h3>
                <p className="text-slate-600 mb-4">{area.description}</p>
                <Link
                  to="/services"
                  className="text-slate-700 font-medium hover:text-slate-900 flex items-center space-x-1 transition-colors"
                >
                  <span>Learn more</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-gradient-to-r from-slate-800 to-slate-700 text-white px-8 py-3 rounded-md font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900">Recent Articles</h2>
            <Link
              to="/blog"
              className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-md font-semibold hover:bg-slate-50 transition-all duration-200"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article, idx) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer">
                <img
                  src={article.featured_image || article.cover_url || 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600'}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="text-slate-500 text-sm mb-2">{formatDate(article.created_at)}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                    {article.title}
                  </h3>
                  <Link to={`/blog/${article.slug}`} className="text-blue-700 font-medium hover:underline flex items-center space-x-1">
                    <span>Learn More</span>
                    <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Legal Quotes Section */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl lg:text-3xl font-bold font-serif text-slate-300 mb-12">
              Words of Wisdom
            </h2>
            
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <Quote className="h-16 w-16 text-slate-400 mx-auto mb-8 opacity-50" />
              
              <blockquote className="text-xl lg:text-2xl font-serif text-white leading-relaxed mb-8 italic">
                "{legalQuotes[currentQuote].quote}"
              </blockquote>
              
              <div className="text-slate-300">
                <div className="text-lg font-semibold mb-1">
                  {legalQuotes[currentQuote].author}
                </div>
                <div className="text-sm opacity-75">
                  {legalQuotes[currentQuote].title}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-slate-600">
              What our clients say about working with Solv.<span className="text-2xl">.</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Quote className="h-8 w-8 text-slate-300 mb-4" />
                <p className="text-slate-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-slate-600 text-sm">{testimonial.position}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      {/* <a 
        href="https://wa.me/9880012694" 
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition z-50"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.48 1.34 5l-1.4 5.1 5.23-1.37c1.46.8 3.1 1.22 4.83 1.22h.01c5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.93 14.25c-.25.7-1.23 1.3-2.02 1.48-.54.11-1.23.2-3.57-.77-3-1.24-4.9-4.27-5.05-4.47-.15-.2-1.2-1.6-1.2-3.05s.75-2.17 1.02-2.47c.25-.3.55-.38.75-.38s.37 0 .53.01c.17.01.4-.07.63.48.25.6.86 2.08.93 2.23.08.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.32.38-.46.51-.15.15-.3.32-.13.62.17.3.75 1.23 1.6 1.99 1.1.98 2.03 1.29 2.33 1.44.3.15.48.13.65-.07.2-.25.75-.87.95-1.17.2-.3.4-.25.68-.15.3.1 1.77.83 2.07.98.3.15.5.22.58.35.08.15.08.73-.17 1.43z"/>
        </svg>
      </a> */}
    </div>
  );
};