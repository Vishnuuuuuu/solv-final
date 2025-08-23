import { motion } from "framer-motion";
import {
  ArrowLeft,
  Shield,
  CheckCircle,
  Clock,
  FileText,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const DesignRegistration: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    requirements: "",
    agreeToTerms: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        mobile: "",
        email: "",
        requirements: "",
        agreeToTerms: false,
      });
    }, 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const benefits = [
    "Design novelty search and assessment",
    "Industrial design application preparation",
    "Design registration filing process",
    "Multiple jurisdiction protection",
    "Design infringement enforcement",
    "Design portfolio management",
  ];

  const documents = [
    "Design drawings and representations",
    "Product photographs or samples",
    "Designer identification documents",
    "Statement of novelty",
    "Power of attorney",
    "Priority documents (if applicable)",
  ];

  const steps = [
    {
      icon: FileText,
      title: "Design Assessment",
      description:
        "We evaluate your design for novelty and registrability across relevant jurisdictions",
    },
    {
      icon: Users,
      title: "Application Preparation",
      description:
        "Our experts prepare comprehensive design applications with proper representations",
    },
    {
      icon: Shield,
      title: "Filing & Prosecution",
      description:
        "We handle design office filings and respond to examination requirements",
    },
    {
      icon: CheckCircle,
      title: "Registration & Maintenance",
      description:
        "Secure design registration and provide ongoing portfolio management support",
    },
  ];

  return (
    <div className="pt-28 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services/intellectual-property"
            className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Intellectual Property Services
          </Link>

          <div className="flex items-center space-x-3 mb-4">
            <Shield className="h-8 w-8 text-slate-700" />
            <h1 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900">
              Design Registration
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            Industrial design registration and protection
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
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                About Design Registration
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Protect the visual appearance of your products with
                comprehensive design registration services. Industrial designs
                protect the aesthetic aspects of products, giving you exclusive
                rights to their visual features.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Our design specialists handle the complete registration process
                for innovative product designs, ensuring your creative
                investments receive proper legal protection in key markets
                worldwide.
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                What We Offer
              </h2>
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
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Process
              </h2>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-slate-700" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">
                        {step.title}
                      </h3>
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
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Required Documents
              </h2>
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
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Get Design Registration
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Fill out the form and our IP experts will contact you soon.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Request Submitted!
                    </h3>
                    <p className="text-slate-600">
                      Our team will contact you within 24 hours.
                    </p>
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
                        Requirements
                      </label>
                      <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                        placeholder="Tell us about your design registration requirements..."
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
                        I agree to the{" "}
                        <Link
                          to="/disclaimer"
                          className="text-slate-800 hover:underline"
                        >
                          Terms and Conditions
                        </Link>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-slate-800 text-white py-3 rounded-md font-semibold hover:bg-slate-700 transition-colors"
                    >
                      Get Design Registration
                    </button>
                  </form>
                )}

                {/* Disclaimer */}
                <div className="mt-4 p-3 bg-blue-50 rounded-md">
                  <p className="text-xs text-blue-800 text-center">
                    We'll get back to you within 24 hours
                  </p>
                </div>

                <div className="mt-4 p-3 bg-green-50 rounded-md">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">
                      Completion: 6-12 months
                    </span>
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
