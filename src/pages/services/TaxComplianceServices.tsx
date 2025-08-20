import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calculator, CheckCircle } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const TaxComplianceServices: React.FC = () => {
  const navigate = useNavigate();

  const taxServices = [
    {
      title: "GST Registration",
      description: "Complete GST registration process for your business",
      features: [
        "GST Number Generation",
        "Digital Signature Setup",
        "Compliance Guidelines",
      ],
      // ...existing code...
      duration: "3-5 days",
      slug: "gst-registration",
    },
    {
      title: "Income Tax Filing",
      description: "Professional income tax return filing services",
      features: ["ITR Preparation", "Tax Optimization", "Refund Processing"],
      // ...existing code...
      duration: "2-3 days",
      slug: "income-tax-filing",
    },
    {
      title: "TDS Return Filing",
      description: "TDS return filing and compliance management",
      features: ["Quarterly Returns", "TDS Certificates", "Penalty Avoidance"],
      // ...existing code...
      duration: "1-2 days",
      slug: "tds-return-filing",
    },
    {
      title: "Corporate Tax Advisory",
      description: "Strategic tax planning for corporations",
      features: [
        "Tax Structure Planning",
        "Compliance Review",
        "Advisory Services",
      ],
      // ...existing code...
      duration: "5-7 days",
      slug: "corporate-tax-advisory",
    },
    {
      title: "FSSAI Registration",
      description: "Food business license and registration",
      features: [
        "License Application",
        "Documentation Support",
        "Renewal Services",
      ],
      // ...existing code...
      duration: "7-10 days",
      slug: "fssai-registration",
    },
    {
      title: "MSME Registration",
      description: "Micro, Small & Medium Enterprise registration",
      features: [
        "Udyam Registration",
        "Certificate Generation",
        "Benefits Guidance",
      ],
      // ...existing code...
      duration: "3-5 days",
      slug: "msme-registration",
    },
    {
      title: "Import Export Code (IEC)",
      description: "IEC registration for import/export business",
      features: [
        "IEC Application",
        "Document Verification",
        "Digital Certificate",
      ],
      // ...existing code...
      duration: "5-7 days",
      slug: "iec-registration",
    },
    {
      title: "Professional Tax Registration",
      description: "Professional tax registration and compliance",
      features: [
        "State Registration",
        "Monthly Returns",
        "Compliance Calendar",
      ],
      // ...existing code...
      duration: "2-3 days",
      slug: "professional-tax",
    },
    {
      title: "ESI & PF Registration",
      description: "Employee State Insurance and Provident Fund setup",
      features: ["ESI Registration", "PF Registration", "Monthly Returns"],
      // ...existing code...
      duration: "5-7 days",
      slug: "esi-pf-registration",
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
            <Calculator className="h-8 w-8 text-slate-700" />
            <h1 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900">
              Tax & Compliance Services
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            Comprehensive tax planning and compliance services for individuals
            and businesses
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold font-serif text-slate-900 mb-4">
              Our Tax & Compliance Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From GST registration to income tax filing, we provide end-to-end
              tax and compliance solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {taxServices.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300 group cursor-pointer"
                onClick={() =>
                  navigate(`/services/tax-compliance/${service.slug}`)
                }
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <div className="flex items-center justify-end mb-3">
                    <div className="text-sm text-right">
                      <span className="text-slate-500">Duration</span>
                      <div className="font-medium text-slate-700">
                        {service.duration}
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-slate-800 text-white py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition-colors group-hover:scale-105 inline-flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold font-serif text-slate-900 mb-4">
              Why Choose Our Tax Services?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Expert tax professionals ensuring compliance and optimization for
              your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Calculator className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Expert Tax Professionals
              </h3>
              <p className="text-slate-600">
                Certified tax experts with years of experience in Indian tax
                laws
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                100% Compliance
              </h3>
              <p className="text-slate-600">
                Ensuring full compliance with all tax regulations and deadlines
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <ArrowRight className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Fast Processing
              </h3>
              <p className="text-slate-600">
                Quick turnaround times with efficient document processing
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
