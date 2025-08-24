import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  FileText,
  Building2,
  Shield,
  Users,
  TrendingUp,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const JointDevelopmentAgreement: React.FC = () => {
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
    "Optimized land utilization for development",
    "Shared investment and reduced financial risk",
    "Professional development expertise access",
    "Regulatory compliance and approvals",
    "Clear profit sharing mechanisms",
    "Dispute resolution frameworks",
  ];

  const services = [
    "Joint development agreement drafting",
    "Due diligence and feasibility analysis",
    "Profit sharing formula structuring",
    "Development timeline planning",
    "Compliance and approval coordination",
    "Risk allocation and mitigation",
    "Exit clause and termination terms",
    "Legal review and registration support",
  ];

  const steps = [
    {
      icon: Users,
      title: "Stakeholder Analysis",
      description:
        "Analyze all parties involved and their roles in the development project",
    },
    {
      icon: FileText,
      title: "Agreement Structuring",
      description:
        "Structure comprehensive JDA with clear terms, timelines, and profit sharing",
    },
    {
      icon: Shield,
      title: "Legal Compliance",
      description:
        "Ensure compliance with real estate regulations and approval processes",
    },
    {
      icon: Building2,
      title: "Execution Support",
      description:
        "Support with agreement execution, registration, and project monitoring",
    },
  ];

  const agreementTypes = [
    {
      type: "Landowner-Developer JDA",
      structure: "Land vs Development Expertise",
      features: [
        "Land contribution by owner",
        "Development by builder",
        "Revenue/area sharing",
        "Timeline specifications",
      ],
    },
    {
      type: "Builder-Builder Collaboration",
      structure: "Shared Resources & Expertise",
      features: [
        "Joint investment model",
        "Skill complementarity",
        "Risk distribution",
        "Market expansion",
      ],
    },
    {
      type: "Investor-Developer JDA",
      structure: "Financial Investment Partnership",
      features: [
        "Capital investment provision",
        "Development execution",
        "Profit percentage model",
        "ROI guarantees",
      ],
    },
  ];

  return (
    <div className="pt-32 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services/real-estate"
            className="inline-flex items-center text-lg px-4 py-2 rounded-md text-slate-600 hover:text-slate-900 transition-colors mb-6"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Back to Real Estate Services
          </Link>

          <div className="flex items-center space-x-3 mb-4">
            <Building2 className="h-8 w-8 text-slate-700" />
            <h1 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900">
              Joint Development Agreement
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            Joint development agreements for real estate projects and
            partnerships
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
                About Joint Development Agreement
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                A Joint Development Agreement (JDA) is a strategic partnership
                between landowners and developers for real estate projects. It
                allows landowners to monetize their property while enabling
                developers to access land for construction without immediate
                purchase, creating a win-win collaboration.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Our expert legal team crafts comprehensive JDAs that protect all
                parties' interests, define clear responsibilities, establish
                profit-sharing mechanisms, and ensure regulatory compliance
                throughout the development process.
              </p>
            </motion.div>

            {/* Agreement Types */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Types of Joint Development Agreements
              </h2>
              <div className="space-y-4">
                {agreementTypes.map((jda, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-lg p-4"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {jda.type}
                      </h3>
                      <span className="text-sm text-orange-700 font-medium">
                        {jda.structure}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                      {jda.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-slate-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Key Benefits
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
              transition={{ duration: 0.6, delay: 0.3 }}
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

            {/* Services Included */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Services Included
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <TrendingUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                    <span className="text-slate-700">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Key Clauses */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-orange-50 rounded-lg p-6 border border-orange-200"
            >
              <h3 className="font-semibold text-orange-900 mb-2">
                Key JDA Clauses
              </h3>
              <ul className="text-orange-800 text-sm space-y-1">
                <li>• Land contribution and development responsibilities</li>
                <li>• Profit sharing ratio and revenue distribution</li>
                <li>• Development timeline and milestone completion</li>
                <li>• Approval and licensing responsibilities</li>
                <li>• Cost sharing for development expenses</li>
                <li>• Default conditions and dispute resolution mechanisms</li>
              </ul>
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
                  Get Joint Development Agreement
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Fill out the form and our real estate development experts will
                  contact you soon.
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
                        Requirements
                      </label>
                      <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                        placeholder="Tell us about your joint development project requirements..."
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
                      Get Joint Development Agreement
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
                  {/* <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">
                      Completion: 7-10 business days
                    </span>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
