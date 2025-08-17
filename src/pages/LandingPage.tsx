import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, ChevronRight, FileText, Gavel, Quote, Scale, Star } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { legalQuotes } from '../data/quotes';

export const LandingPage: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  // Rotate quotes on page refresh/load
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * legalQuotes.length);
    setCurrentQuote(randomIndex);
  }, []);

  const practiceAreas = [
    { icon: Gavel, title: 'Legal Consultation', description: 'Video/Audio consultation with expert lawyers' },
    { icon: Scale, title: 'Legal Notice', description: 'Legal notice drafting and sending services' },
    { icon: BookOpen, title: 'Legal Opinion', description: 'Expert legal opinion and advisory services' },
    { icon: FileText, title: 'Contract Drafting', description: 'Professional contract drafting and review services' },
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

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold font-serif mb-6 leading-tight">
                Legal Excellence
                <span className="block text-slate-300">Redefined</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
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
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <Scale className="h-48 w-48 lg:h-64 lg:w-64 text-slate-300 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-600/30 to-slate-500/30 rounded-full blur-3xl"></div>
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
    </div>
  );
};