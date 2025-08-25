import { motion } from "framer-motion";
import {
  ArrowLeft,
  FileCheck,
  CheckCircle,
  Clock,
  FileText,
  Users,
  Award,
  Calendar,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useWeb3Form } from "../../../hooks/useWeb3Form";

export const ProfessionalTax: React.FC = () => {
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
    "Legal compliance with state tax laws",
    "Avoid penalties and legal consequences",
    "Smooth business operations",
    "Employee tax deduction management",
    "Professional credibility enhancement",
    "Government contract eligibility",
    "Compliance with labor laws",
    "Streamlined payroll processing",
  ];

  const documents = [
    "PAN card of the business",
    "Certificate of incorporation/registration",
    "Aadhaar card of authorized signatory",
    "Address proof of business premises",
    "Employee list with salary details",
    "Bank account details",
    "Partnership deed (for partnerships)",
    "Power of attorney (if applicable)",
  ];

  const steps = [
    {
      icon: FileText,
      title: "Document Preparation",
      description:
        "We help you prepare all required documents for Professional Tax registration",
    },
    {
      icon: Users,
      title: "State Registration",
      description:
        "Submit application to respective state Professional Tax department",
    },
    {
      icon: Calendar,
      title: "Monthly Compliance",
      description: "Set up system for monthly Professional Tax return filing",
    },
    {
      icon: Award,
      title: "Registration Certificate",
      description:
        "Receive Professional Tax registration certificate and compliance calendar",
    },
  ];

  const stateInfo = [
    {
      state: "Maharashtra",
      threshold: "₹21,000/month",
      rate: "₹175-200/month",
    },
    {
      state: "Karnataka",
      threshold: "₹15,000/month",
      rate: "₹60-300/month",
    },
    {
      state: "West Bengal",
      threshold: "₹15,000/month",
      rate: "₹110-300/month",
    },
    {
      state: "Tamil Nadu",
      threshold: "₹21,000/month",
      rate: "₹100-200/month",
    },
  ];

  return (
    <div className="pt-28 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services/tax-compliance"
            className="inline-flex items-center text-lg px-4 py-2 rounded-md text-slate-600 hover:text-slate-900 transition-colors mb-6"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Back to Tax Services
          </Link>

          <div className="flex items-center space-x-3 mb-4">
            <FileCheck className="h-8 w-8 text-slate-700" />
            <h1 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900">
              Professional Tax Registration
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            State-level tax registration and monthly compliance management
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
                About Professional Tax Registration
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Professional Tax is a state-level tax imposed on professions,
                trades, callings, and employment. It's mandatory for businesses
                and employers in states like Maharashtra, Karnataka, West
                Bengal, Tamil Nadu, and others. The tax is deducted from
                employee salaries and remitted to the state government monthly.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Our Professional Tax registration service ensures complete
                compliance with state regulations, timely registration, and
                ongoing support for monthly return filing and payments.
              </p>
            </motion.div>

            {/* State-wise Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                State-wise Professional Tax
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stateInfo.map((info, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-lg p-4"
                  >
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {info.state}
                    </h3>
                    <p className="text-sm text-slate-600 mb-1">
                      Threshold: {info.threshold}
                    </p>
                    <p className="text-sm text-slate-600">
                      Tax Rate: {info.rate}
                    </p>
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

            {/* Required Documents */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
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

            {/* Compliance Calendar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-blue-50 rounded-lg p-6 border border-blue-200"
            >
              <h3 className="font-semibold text-blue-900 mb-2">
                Monthly Compliance Requirements
              </h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>
                  • Monthly Professional Tax return filing by 15th of next month
                </li>
                <li>• Quarterly return filing for some states</li>
                <li>• Annual return filing by 30th June</li>
                <li>• Maintain proper records of tax deductions</li>
                <li>• Issue Professional Tax certificates to employees</li>
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
                  Get Professional Tax Registration
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Fill out the form and our Professional Tax experts will
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
                        placeholder="Tell us about your state location and Professional Tax requirements..."
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
                        : "Get Professional Tax Registration"}
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
                      Completion: 2-3 business days
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
