import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  FileText,
  Scale,
  Shield,
  Users,
  AlertTriangle,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useWeb3Form } from "../../../hooks/useWeb3Form";

export const PropertyDispute: React.FC = () => {
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
    "Expert legal analysis of property disputes",
    "Cost-effective resolution strategies",
    "Negotiation and mediation support",
    "Court representation when required",
    "Document preparation and evidence",
    "Settlement agreement drafting",
  ];

  const services = [
    "Property dispute case analysis",
    "Legal notice drafting and service",
    "Negotiation and mediation services",
    "Court filing and representation",
    "Evidence collection and documentation",
    "Settlement agreement preparation",
    "Injunction and interim relief applications",
    "Appeal and revision petitions",
  ];

  const steps = [
    {
      icon: AlertTriangle,
      title: "Dispute Assessment",
      description:
        "Comprehensive analysis of the property dispute and legal merits",
    },
    {
      icon: FileText,
      title: "Strategy Development",
      description:
        "Develop optimal resolution strategy based on case specifics",
    },
    {
      icon: Users,
      title: "Resolution Attempts",
      description:
        "Attempt amicable resolution through negotiation and mediation",
    },
    {
      icon: Scale,
      title: "Legal Proceedings",
      description:
        "Initiate court proceedings and provide representation if needed",
    },
  ];

  const disputeTypes = [
    {
      type: "Title Disputes",
      description: "Ownership and title-related conflicts",
      examples: [
        "Multiple ownership claims",
        "Forged documents",
        "Inheritance disputes",
        "Boundary conflicts",
      ],
    },
    {
      type: "Possession Disputes",
      description: "Physical possession and occupancy issues",
      examples: [
        "Illegal occupation",
        "Tenant-landlord conflicts",
        "Encroachment issues",
        "Eviction matters",
      ],
    },
    {
      type: "Transaction Disputes",
      description: "Sale, purchase, and agreement conflicts",
      examples: [
        "Breach of agreement",
        "Payment defaults",
        "Delivery delays",
        "Fraud claims",
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
            <Scale className="h-8 w-8 text-slate-700" />
            <h1 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900">
              Property Dispute Resolution
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            Legal support for property-related disputes and conflict resolution
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
                About Property Dispute Resolution
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Property disputes can arise from various issues including title
                conflicts, boundary disputes, possession matters, and
                transaction disagreements. Our expert legal team provides
                comprehensive dispute resolution services to protect your
                property rights and achieve favorable outcomes.
              </p>
              <p className="text-slate-700 leading-relaxed">
                We prioritize amicable resolution through negotiation and
                mediation, while being fully prepared to represent your
                interests in court when necessary. Our goal is to resolve
                disputes efficiently and cost-effectively.
              </p>
            </motion.div>

            {/* Dispute Types */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Types of Property Disputes We Handle
              </h2>
              <div className="space-y-4">
                {disputeTypes.map((dispute, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-lg p-4"
                  >
                    <div className="mb-3">
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {dispute.type}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {dispute.description}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                      {dispute.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0" />
                          <span className="text-sm text-slate-700">
                            {example}
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
                    <Shield className="h-5 w-5 text-slate-600 flex-shrink-0" />
                    <span className="text-slate-700">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Resolution Approach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-teal-50 rounded-lg p-6 border border-teal-200"
            >
              <h3 className="font-semibold text-teal-900 mb-2">
                Our Resolution Approach
              </h3>
              <ul className="text-teal-800 text-sm space-y-1">
                <li>
                  • <strong>Prevention First:</strong> Legal advice to prevent
                  disputes
                </li>
                <li>
                  • <strong>Early Intervention:</strong> Quick action to
                  minimize escalation
                </li>
                <li>
                  • <strong>Amicable Settlement:</strong> Negotiation and
                  mediation preferred
                </li>
                <li>
                  • <strong>Strategic Litigation:</strong> Court action when
                  necessary
                </li>
                <li>
                  • <strong>Cost Management:</strong> Efficient and
                  budget-conscious approach
                </li>
                <li>
                  • <strong>Long-term Solution:</strong> Durable resolution
                  strategies
                </li>
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
                  Get Property Dispute Support
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Fill out the form and our property dispute experts will
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
                        Dispute Details
                      </label>
                      <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                        placeholder="Please describe your property dispute situation..."
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
                        : "Get Property Dispute Support"}
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
                    Urgent cases will be prioritized
                  </p>
                </div>

                <div className="mt-4 p-3 bg-green-50 rounded-md">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">
                      Response: Within 24 hours
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
