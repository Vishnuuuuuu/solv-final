import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Clock, FileText, Scale, Shield, ShoppingCart, Users } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const PropertyPurchaseAgreement: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    propertyType: '',
    budget: '',
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
        budget: '',
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
    "Buyer-focused legal protection",
    "Due diligence verification",
    "Property title clearance",
    "Negotiation support",
    "Hidden clause identification",
    "EMI calculation assistance"
  ];

  const inclusions = [
    "Purchase agreement drafting",
    "Property document verification",
    "Legal title search",
    "Registration assistance",
    "Loan documentation support",
    "Post-purchase guidance"
  ];

  const steps = [
    {
      icon: FileText,
      title: "Property Analysis",
      description: "Comprehensive analysis of property documents and legal status"
    },
    {
      icon: Scale,
      title: "Agreement Creation",
      description: "Tailored purchase agreement with buyer protection clauses"
    },
    {
      icon: Users,
      title: "Negotiation Support",
      description: "Legal support during terms negotiation"
    },
    {
      icon: Shield,
      title: "Closing Support",
      description: "Complete assistance through property registration and transfer"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Header with Hero Image */}
      <section className="relative py-16 bg-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Property Purchase Agreement"
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
            <ShoppingCart className="h-8 w-8 text-white" />
            <h1 className="text-3xl lg:text-4xl font-bold font-serif text-white">
              Property Purchase Agreement
            </h1>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl">
            Professional property purchase agreement drafting with comprehensive buyer protection
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
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About Property Purchase Agreement</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                A property purchase agreement is your shield in property transactions. As a buyer, you need robust legal protection to ensure your investment is secure, the property title is clear, and all terms favor your interests. Our specialized service provides comprehensive buyer-focused legal documentation.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Our real estate legal experts craft detailed purchase agreements that protect buyers from hidden liabilities, ensure proper due diligence, and facilitate smooth property acquisition with complete legal compliance.
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
                    src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Property Inspection"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <span className="text-white font-semibold">Property Inspection</span>
                  </div>
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Legal Documentation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <span className="text-white font-semibold">Legal Review</span>
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

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Our Service</h2>
              <div className="bg-slate-50 p-6 rounded-lg">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Property purchase is often the largest investment of your lifetime. Our buyer-focused approach ensures you're making an informed decision with complete legal protection.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• Specialized in buyer protection and due diligence</li>
                  <li>• Experience with residential, commercial, and land purchases</li>
                  <li>• Proven track record of identifying potential issues early</li>
                  <li>• Post-purchase support and guidance</li>
                </ul>
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
                <h3 className="text-xl font-bold text-slate-900 mb-4">Get Purchase Agreement</h3>
                <p className="text-sm text-slate-600 mb-6">
                  Protect your property investment with our comprehensive legal support.
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
                        <option value="farmhouse">Farmhouse</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      >
                        <option value="">Select Budget Range</option>
                        {/* Price options removed for content-only */}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Preferred Location
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
                        Special Requirements
                      </label>
                      <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                        placeholder="Loan assistance, specific amenities, etc."
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
                      Get Purchase Agreement
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
                      <span className="text-slate-600">Due Diligence</span>
                      <span className="text-slate-900">₹2,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">GST (18%)</span>
                      <span className="text-slate-900">₹1,260</span>
                    </div>
                    <div className="flex justify-between font-semibold text-base pt-2 border-t border-slate-200">
                      <span className="text-slate-900">Total</span>
                      <span className="text-slate-900">₹8,259</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-green-50 rounded-md">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">
                        Completion: 5-7 business days
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
