import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Home, FileText, Clock, Shield, Users, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PropertySaleAgreement: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    propertyType: '',
    propertyValue: '',
    location: '',
    requirements: '',
    agreeToTerms: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        mobile: '',
        email: '',
        propertyType: '',
        propertyValue: '',
        location: '',
        requirements: '',
        agreeToTerms: false
      });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const benefits = [
    "Legally binding sale agreement",
    "Clear terms and conditions",
    "Dispute prevention clauses",
    "Regulatory compliance assured",
    "Property transfer protection",
    "Stamp duty calculation"
  ];

  const inclusions = [
    "Sale deed preparation",
    "Legal verification of documents",
    "Title clearance confirmation",
    "Registration support",
    "Stamp duty consultation",
    "Post-sale legal guidance"
  ];

  const steps = [
    {
      icon: FileText,
      title: "Document Review",
      description: "We review all property documents and verify legal compliance"
    },
    {
      icon: Scale,
      title: "Agreement Drafting",
      description: "Our experts draft a comprehensive sale agreement with all necessary clauses"
    },
    {
      icon: Users,
      title: "Party Coordination",
      description: "We coordinate between buyer and seller for agreement finalization"
    },
    {
      icon: Shield,
      title: "Registration Support",
      description: "Complete support for property registration and legal formalities"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Header with Hero Image */}
      <section className="relative py-16 bg-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Property Sale Agreement"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/services/real-estate"
            className="inline-flex items-center text-white hover:text-slate-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Real Estate Services
          </Link>
          
          <div className="flex items-center space-x-3 mb-4">
            <Home className="h-8 w-8 text-white" />
            <h1 className="text-3xl lg:text-4xl font-bold font-serif text-white">
              Property Sale Agreement
            </h1>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl">
            Comprehensive property sale agreement drafting and legal verification services
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About Property Sale Agreement</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                A property sale agreement is a crucial legal document that establishes the terms and conditions of a property transaction between buyer and seller. Our comprehensive service ensures your property sale is legally sound, transparent, and protects both parties' interests.
              </p>
              <p className="text-slate-700 leading-relaxed">
                With years of experience in real estate law, our legal experts craft detailed agreements that minimize disputes, ensure regulatory compliance, and facilitate smooth property transfers.
              </p>
            </motion.div>

            {/* Visual Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Legal Documentation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <span className="text-white font-semibold">Legal Documentation</span>
                  </div>
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Property Verification"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <span className="text-white font-semibold">Property Verification</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* What's Included */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {inclusions.map((inclusion, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-slate-600 flex-shrink-0" />
                    <span className="text-slate-700">{inclusion}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Process</h2>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-slate-700" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Contact Form */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-24"
            >
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Get Property Sale Agreement</h3>
                <p className="text-sm text-slate-600 mb-6">
                  Fill out the form and our real estate legal experts will contact you soon.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Request Submitted!</h3>
                    <p className="text-slate-600">Our team will contact you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Property Type
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      >
                        <option value="">Select Property Type</option>
                        <option value="residential-house">Residential House</option>
                        <option value="apartment">Apartment</option>
                        <option value="commercial">Commercial Property</option>
                        <option value="plot">Plot/Land</option>
                        <option value="villa">Villa</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Property Value Range
                      </label>
                      <select
                        name="propertyValue"
                        value={formData.propertyValue}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      >
                        <option value="">Select Value Range</option>
                        <option value="10lakh-50lakh">₹10 Lakh - ₹50 Lakh</option>
                        <option value="50lakh-1crore">₹50 Lakh - ₹1 Crore</option>
                        <option value="1crore-2crore">₹1 Crore - ₹2 Crore</option>
                        <option value="2crore-plus">₹2 Crore+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Property Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        placeholder="City, State"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Additional Requirements
                      </label>
                      <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                        placeholder="Any specific clauses or requirements?"
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                      <label className="text-sm text-slate-600">
                        I agree to the <Link to="/disclaimer" className="text-slate-800 hover:underline">Terms and Conditions</Link>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-slate-800 text-white py-3 rounded-md font-semibold hover:bg-slate-700 transition-colors"
                    >
                      Get Property Sale Agreement
                    </button>
                  </form>
                )}

                {/* Pricing Breakdown */}
                <div className="mt-8 pt-6 border-t border-slate-300">
                  <h4 className="font-semibold text-slate-900 mb-4">Pricing Breakdown</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Service Fee</span>
                      <span className="text-slate-900">₹4,999</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">GST (18%)</span>
                      <span className="text-slate-900">₹900</span>
                    </div>
                    <div className="flex justify-between font-semibold text-base pt-2 border-t border-slate-200">
                      <span className="text-slate-900">Total</span>
                      <span className="text-slate-900">₹5,899</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-green-50 rounded-md">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">
                        Completion: 3-5 business days
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
