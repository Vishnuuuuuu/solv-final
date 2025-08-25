import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  FileText,
  TrendingUp,
  Scale,
  Shield,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useWeb3Form } from "../../../hooks/useWeb3Form";

export const MergersAcquisitions: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    requirements: "",
    agreeToTerms: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isSubmitting, result, submitForm } = useWeb3Form();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formPayload = new FormData();
    formPayload.append("fullName", formData.fullName);
    formPayload.append("mobile", formData.mobile);
    formPayload.append("email", formData.email);
    formPayload.append("requirements", formData.requirements);

    const response = await submitForm(formPayload);

    if (response.success) {
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        mobile: "",
        email: "",
        requirements: "",
        agreeToTerms: false,
      });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
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
    "Comprehensive due diligence support",
    "Strategic transaction planning",
    "Regulatory compliance guidance",
    "Risk assessment and mitigation",
    "Valuation and negotiation support",
    "Post-merger integration assistance",
  ];

  const services = [
    "Merger and acquisition advisory",
    "Due diligence coordination",
    "Transaction documentation",
    "Regulatory approvals and filings",
    "Shareholder agreement drafting",
    "Corporate restructuring support",
  ];

  const steps = [
    {
      icon: Users,
      title: "Initial Consultation",
      description: "Understanding your M&A objectives and strategic goals",
    },
    {
      icon: FileText,
      title: "Due Diligence",
      description:
        "Comprehensive legal, financial, and operational due diligence",
    },
    {
      icon: Scale,
      title: "Transaction Structuring",
      description: "Optimal transaction structure and legal documentation",
    },
    {
      icon: Shield,
      title: "Closing Support",
      description:
        "Complete support through transaction closing and integration",
    },
  ];

  return (
    <div className="pt-28 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services/corporate-commercial"
            className="inline-flex items-center text-lg px-4 py-2 rounded-md text-slate-600 hover:text-slate-900 transition-colors mb-6"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Back to Corporate & Commercial Services
          </Link>

          <div className="flex items-center space-x-3 mb-4">
            <TrendingUp className="h-8 w-8 text-slate-700" />
            <h1 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900">
              Mergers & Acquisitions
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            Complete M&A advisory and legal support for complex business
            transactions
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
                About Mergers & Acquisitions
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Mergers and acquisitions are complex transactions that require
                careful planning, thorough due diligence, and expert legal
                guidance. Our comprehensive M&A services help businesses
                navigate these strategic transactions while minimizing risks and
                maximizing value.
              </p>
              <p className="text-slate-700 leading-relaxed">
                From initial strategic planning to post-transaction integration,
                our experienced team provides end-to-end support for mergers,
                acquisitions, joint ventures, and corporate restructuring
                initiatives.
              </p>
            </motion.div>

            {/* Services Offered */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our M&A Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-slate-600 flex-shrink-0" />
                    <span className="text-slate-700">{service}</span>
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
                  Get M&A Advisory Services
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Fill out the form and our M&A experts will contact you soon.
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
                        Transaction Details
                      </label>
                      <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                        placeholder="Tell us about your M&A requirements..."
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
                      disabled={isSubmitting}
                      className={`w-full py-3 rounded-md font-semibold transition-colors ${
                        isSubmitting
                          ? "bg-slate-500 cursor-not-allowed"
                          : "bg-slate-800 text-white hover:bg-slate-700"
                      }`}
                    >
                      {isSubmitting
                        ? "Submitting..."
                        : "Get M&A Advisory Services"}
                    </button>

                    {result && (
                      <div
                        className={`p-3 rounded-md text-center text-sm ${
                          result.isSuccess
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {result.message}
                      </div>
                    )}
                  </form>
                )}

                <div className="mt-4 p-3 bg-blue-50 rounded-md">
                  <p className="text-xs text-blue-800 text-center">
                    We'll get back to you within 24 hours
                  </p>
                </div>

                <div className="mt-4 p-3 bg-green-50 rounded-md">
                  {/* <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">
                      Completion: 60-180 business days
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
