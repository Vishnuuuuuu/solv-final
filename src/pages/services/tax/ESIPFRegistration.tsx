import { motion } from "framer-motion";
import {
  ArrowLeft,
  Users,
  CheckCircle,
  Clock,
  FileText,
  Shield,
  Award,
  Heart,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ESIPFRegistration: React.FC = () => {
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
    "Medical benefits for employees and dependents",
    "Maternity and disability benefits",
    "Retirement savings through provident fund",
    "Legal compliance with labor laws",
    "Enhanced employee satisfaction and retention",
    "Tax benefits on employer contributions",
    "Social security for workforce",
    "Government-backed employee welfare schemes",
  ];

  const documents = [
    "Certificate of incorporation/registration",
    "PAN card of the company",
    "Address proof of business premises",
    "List of employees with salary details",
    "Bank account details and cancelled cheque",
    "Rent agreement or ownership documents",
    "Board resolution (for companies)",
    "Aadhaar and PAN of employees",
  ];

  const steps = [
    {
      icon: FileText,
      title: "Document Collection",
      description:
        "We help you gather all required documents for ESI and PF registration",
    },
    {
      icon: Users,
      title: "Registration Process",
      description:
        "Submit applications to ESIC and EPFO with complete documentation",
    },
    {
      icon: Shield,
      title: "Compliance Setup",
      description:
        "Set up monthly return filing system and employee enrollment",
    },
    {
      icon: Award,
      title: "Registration Numbers",
      description:
        "Receive ESI and PF registration numbers with ongoing compliance support",
    },
  ];

  const registrationTypes = [
    {
      type: "ESI Registration",
      applicability: "Establishments with 10+ employees",
      contribution: "3.25% (Employer) + 0.75% (Employee)",
      benefits: "Medical care, cash benefits, maternity benefits",
    },
    {
      type: "PF Registration",
      applicability: "Establishments with 20+ employees",
      contribution: "12% (Employer) + 12% (Employee)",
      benefits: "Retirement savings, partial withdrawals, pension",
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
            <Heart className="h-8 w-8 text-slate-700" />
            <h1 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900">
              ESI & PF Registration
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            Employee State Insurance and Provident Fund registration for
            employee welfare
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
                About ESI & PF Registration
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Employee State Insurance (ESI) and Provident Fund (PF) are
                mandatory social security schemes in India. ESI provides medical
                care and cash benefits to employees, while PF ensures retirement
                savings and financial security. These registrations are required
                for establishments meeting specific employee thresholds.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Our expert team handles the complete registration process,
                ensures ongoing compliance, and provides continuous support for
                monthly returns and employee welfare management.
              </p>
            </motion.div>

            {/* Registration Types */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Registration Types
              </h2>
              <div className="space-y-4">
                {registrationTypes.map((reg, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-lg p-6"
                  >
                    <h3 className="font-semibold text-slate-900 mb-3">
                      {reg.type}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm font-medium text-slate-600 mb-1">
                          Applicability
                        </p>
                        <p className="text-sm text-slate-700">
                          {reg.applicability}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-600 mb-1">
                          Contribution
                        </p>
                        <p className="text-sm text-slate-700">
                          {reg.contribution}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-600 mb-1">
                          Benefits
                        </p>
                        <p className="text-sm text-slate-700">{reg.benefits}</p>
                      </div>
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

            {/* Compliance Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-green-50 rounded-lg p-6 border border-green-200"
            >
              <h3 className="font-semibold text-green-900 mb-2">
                Monthly Compliance Requirements
              </h3>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• ESI monthly returns by 21st of following month</li>
                <li>• PF monthly returns by 25th of following month</li>
                <li>• Annual returns for both ESI and PF</li>
                <li>• Employee joining and exit formalities</li>
                <li>• Maintenance of employee registers and records</li>
                <li>• Periodic compliance audits and renewals</li>
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
                  Get ESI & PF Registration
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Fill out the form and our employee welfare experts will
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
                        placeholder="Tell us about your employee count and ESI/PF requirements..."
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
                      Get ESI & PF Registration
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
                      Completion: 5-7 business days
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
