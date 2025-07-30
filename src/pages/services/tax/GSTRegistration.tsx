import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Calculator, FileText, Clock, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const GSTRegistration: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    businessType: '',
    annualTurnover: '',
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
        businessType: '',
        annualTurnover: '',
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
    "Legal compliance with GST regulations",
    "Input tax credit benefits",
    "Nationwide business operations",
    "Enhanced business credibility",
    "Digital tax filing capabilities",
    "Seamless interstate transactions"
  ];

  const documents = [
    "PAN Card of the business",
    "Aadhaar Card of proprietor/partners",
    "Business registration certificate",
    "Bank account statement",
    "Address proof of business premises",
    "Passport size photographs"
  ];

  const steps = [
    {
      icon: FileText,
      title: "Document Collection",
      description: "We help you gather all required documents and verify their completeness"
    },
    {
      icon: Users,
      title: "Application Filing",
      description: "Our experts file your GST application with accurate information"
    },
    {
      icon: Shield,
      title: "Follow-up & Approval",
      description: "We track your application status and ensure timely approval"
    },
    {
      icon: CheckCircle,
      title: "GST Number & Certificate",
      description: "Receive your GST registration certificate and start compliant operations"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/services/tax-compliance"
            className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tax Services
          </Link>
          
          <div className="flex items-center space-x-3 mb-4">
            <Calculator className="h-8 w-8 text-slate-700" />
            <h1 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900">
              GST Registration
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            Complete GST registration process for your business
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
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About GST Registration</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Goods and Services Tax (GST) registration is mandatory for businesses with an annual turnover exceeding ₹20 lakhs (₹10 lakhs for special category states). Our comprehensive GST registration service ensures your business complies with tax regulations while maximizing available benefits.
              </p>
              <p className="text-slate-700 leading-relaxed">
                With our expert guidance, you'll navigate the registration process smoothly, avoid common pitfalls, and set up your business for efficient tax management from day one.
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
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

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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

            {/* Required Documents */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Required Documents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documents.map((document, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-slate-600 flex-shrink-0" />
                    <span className="text-slate-700">{document}</span>
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
                <h3 className="text-xl font-bold text-slate-900 mb-4">Get GST Registration</h3>
                <p className="text-sm text-slate-600 mb-6">
                  Fill out the form and our tax experts will contact you soon.
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
                        Full Name or Business Name
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
                        Business Type
                      </label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      >
                        <option value="">Select Business Type</option>
                        <option value="proprietorship">Proprietorship</option>
                        <option value="partnership">Partnership</option>
                        <option value="private-limited">Private Limited</option>
                        <option value="public-limited">Public Limited</option>
                        <option value="llp">Limited Liability Partnership</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Expected Annual Turnover
                      </label>
                      <select
                        name="annualTurnover"
                        value={formData.annualTurnover}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      >
                        <option value="">Select Turnover Range</option>
                        <option value="20lakh-1crore">₹20 Lakh - ₹1 Crore</option>
                        <option value="1crore-5crore">₹1 Crore - ₹5 Crore</option>
                        <option value="5crore-plus">₹5 Crore+</option>
                      </select>
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
                        placeholder="Any specific requirements or questions?"
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
                      Get GST Registration
                    </button>
                  </form>
                )}

                {/* Pricing Breakdown */}
                <div className="mt-8 pt-6 border-t border-slate-300">
                  <h4 className="font-semibold text-slate-900 mb-4">Pricing Breakdown</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Service Fee</span>
                      <span className="text-slate-900">₹2,999</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">GST (18%)</span>
                      <span className="text-slate-900">₹540</span>
                    </div>
                    <div className="flex justify-between font-semibold text-base pt-2 border-t border-slate-200">
                      <span className="text-slate-900">Total</span>
                      <span className="text-slate-900">₹3,539</span>
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
