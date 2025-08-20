import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  FileText,
  Gavel,
  Scale,
  CheckCircle,
  ArrowRight,
  Phone,
} from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const QuickLegalServices: React.FC = () => {
  const navigate = useNavigate();

  const quickServices = [
    {
      icon: Gavel,
      title: "Legal Consultation",
      description: "Video/Audio consultation with expert lawyers",
      features: [
        "One-on-one consultation",
        "Actionable guidance",
        "Confidential & secure",
      ],
      duration: "30-60 minutes",
    },
    {
      icon: Scale,
      title: "Legal Notice",
      description: "Legal notice drafting and sending services",
      features: [
        "Tailored notice drafting",
        "Lawyer review",
        "Dispatch & tracking support",
      ],
      duration: "1-2 business days",
    },
    {
      icon: BookOpen,
      title: "Legal Opinion",
      description: "Expert legal opinion and advisory services",
      features: [
        "Detailed research",
        "Citations to applicable law",
        "Clear recommendations",
      ],
      duration: "2-3 business days",
    },
    {
      icon: FileText,
      title: "Contract Drafting",
      description: "Professional contract drafting and review services",
      features: [
        "Custom drafting",
        "Risk & compliance review",
        "Two iterations included",
      ],
      duration: "3-5 business days",
    },
  ];

  return (
    <div className="pt-28 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>

          <div className="flex items-center space-x-3 mb-4">
            <Phone className="h-8 w-8 text-slate-700" />
            <h1 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900">
              Quick Legal Services
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            Book consultations, get notices drafted, request legal opinions, and
            more — fast and professional.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold font-serif text-slate-900 mb-4">
              Choose a Quick Service
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Pick the service that fits your need. Our team will reach out
              within 24 hours after you submit the form.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-slate-100 rounded-lg mb-4 group-hover:bg-slate-200 transition-colors">
                  <service.icon className="h-8 w-8 text-slate-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  {service.description}
                </p>

                <div className="space-y-2 mb-4">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="text-slate-500">Typical duration</span>
                  <span className="font-medium text-slate-700">
                    {service.duration}
                  </span>
                </div>

                <button
                  onClick={() => {
                    if (service.title === "Legal Consultation")
                      navigate("/services/quick-legal-services/consultation");
                    else if (service.title === "Legal Notice")
                      navigate("/services/quick-legal-services/legal-notice");
                    else if (service.title === "Legal Opinion")
                      navigate("/services/quick-legal-services/legal-opinion");
                    else
                      navigate(
                        "/services/quick-legal-services/contract-drafting"
                      );
                  }}
                  className="w-full bg-slate-800 text-white py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
