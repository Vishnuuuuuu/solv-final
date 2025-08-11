import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Building, Calculator, CheckCircle, Clock, FileText, Gavel, Heart, Home, Phone, Scale, Shield, Star } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Services: React.FC = () => {
  const navigate = useNavigate();

  const quickServices = [
    {
      icon: FileText,
      title: 'Contract Drafting',
      description: 'Professional contract drafting and review services',
      price: 'Starting ₹5,000',
      duration: '3-5 business days'
    },
    {
      icon: Scale,
      title: 'Legal Notice',
      description: 'Legal notice drafting and sending services',
      price: 'Starting ₹3,000',
      duration: '1-2 business days'
    },
    {
      icon: BookOpen,
      title: 'Legal Opinion',
      description: 'Expert legal opinion and advisory services',
      price: 'Starting ₹7,500',
      duration: '2-3 business days'
    },
    {
      icon: Gavel,
      title: 'Legal Consultation',
      description: 'Video/Audio consultation with expert lawyers',
      price: 'Starting ₹2,000',
      duration: '30-60 minutes'
    }
  ];

  const serviceCategories = [
    {
      icon: Building,
      title: 'Corporate & Commercial',
      description: 'Comprehensive corporate legal services for businesses',
      services: [
        'Company Incorporation',
        'Contract Drafting & Review',
        'Mergers & Acquisitions',
        'Corporate Governance',
        'Business Compliance',
        'Partnership Agreements',
        'Shareholder Agreements',
        'Employment Contracts'
      ],
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Shield,
      title: 'Intellectual Property',
      description: 'Protect and maximize your intellectual assets',
      services: [
        'Trademark Registration',
        'Patent Applications',
        'Copyright Registration',
        'IP Litigation',
        'Licensing Agreements',
        'Trade Secret Protection',
        'Design Registration',
        'Domain Disputes'
      ],
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Gavel,
      title: 'Dispute Resolution',
      description: 'Expert litigation and alternative dispute resolution',
      services: [
        'Commercial Litigation',
        'Arbitration Services',
        'Mediation Services',
        'Contract Disputes',
        'Employment Disputes',
        'Consumer Complaints',
        'Debt Recovery',
        'Property Disputes'
      ],
      image: 'https://images.pexels.com/photos/5668869/pexels-photo-5668869.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Calculator,
      title: 'Tax & Compliance',
      description: 'Comprehensive tax planning and compliance services',
      services: [
        'GST Registration',
        'Income Tax Planning',
        'Corporate Tax Advisory',
        'Tax Compliance',
        'FSSAI Registration',
        'MSME Registration',
        'Import Export Code',
        'Regulatory Compliance'
      ],
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Complete real estate legal services and documentation',
      services: [
        'Property Sale Agreements',
        'Lease Agreements',
        'Title Verification',
        'Property Management',
        'Real Estate Litigation',
        'Construction Contracts',
        'Rental Agreements',
        'Property Registration'
      ],
      image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Heart,
      title: 'Personal & Family',
      description: 'Personal legal matters and family law services',
      services: [
        'Will & Testament',
        'Divorce Proceedings',
        'Child Custody',
        'Family Settlements',
        'Adoption Services',
        'Domestic Violence',
        'Marriage Registration',
        'Succession Planning'
      ],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-6">Legal Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Fast, secure and professional legal solutions. Your one-stop platform for legal protection & compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900 mb-4">
              Quick Legal Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Precision-driven legal expertise, delivered seamlessly by our trusted in-house counsel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-slate-100 rounded-lg mb-4 group-hover:bg-slate-200 transition-colors">
                  <service.icon className="h-8 w-8 text-slate-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Price:</span>
                    <span className="font-medium text-slate-700">{service.price}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Duration:</span>
                    <span className="font-medium text-slate-700">{service.duration}</span>
                  </div>
                </div>
                <button className="w-full mt-4 border border-slate-300 text-slate-700 py-2 rounded-md text-sm font-medium hover:bg-slate-50 transition-colors">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900 mb-4">
              Services We Offer
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive legal solutions across multiple practice areas to meet all your legal needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white bg-opacity-90 rounded-lg p-2">
                      <category.icon className="h-6 w-6 text-slate-700" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{category.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm">{category.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {category.services.slice(0, 4).map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{service}</span>
                      </div>
                    ))}
                    {category.services.length > 4 && (
                      <div className="text-xs text-slate-500 pl-6">
                        +{category.services.length - 4} more services
                      </div>
                    )}
                  </div>

                  <button 
                    onClick={() => {
                      if (category.title === 'Tax & Compliance') {
                        navigate('/services/tax-compliance');
                      } else if (category.title === 'Real Estate') {
                        navigate('/services/real-estate');
                      } else if (category.title === 'Dispute Resolution') {
                        navigate('/services/dispute-resolution/pre-litigation-advisory');
                      } else {
                        navigate('/contact');
                      }
                    }}
                    className="w-full bg-slate-800 text-white py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition-colors inline-flex items-center justify-center space-x-2"
                  >
                    <span>View Services</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900 mb-4">
              Why Choose Solv.?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We combine legal expertise with modern technology to deliver fast, secure, and professional services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6"
            >
              <div className="bg-slate-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Fast Delivery</h3>
              <p className="text-sm text-slate-600">Quick turnaround times without compromising on quality</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="bg-slate-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Secure & Reliable</h3>
              <p className="text-sm text-slate-600">Your legal matters handled with utmost confidentiality</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="bg-slate-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Expert Lawyers</h3>
              <p className="text-sm text-slate-600">Experienced legal professionals across all practice areas</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6"
            >
              <div className="bg-slate-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">24/7 Support</h3>
              <p className="text-sm text-slate-600">Round-the-clock assistance for all your legal needs</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-6">
              Ready to Get Legal Support?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get expert legal advice, contract drafting, review, legal research, opinion and more. 
              Start your legal journey with us today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white text-slate-900 px-8 py-4 rounded-md font-semibold hover:bg-slate-100 transition-all duration-200 hover:scale-105 inline-flex items-center space-x-2"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-slate-900 transition-all duration-200 inline-flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Now: +91 98765 43210</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};