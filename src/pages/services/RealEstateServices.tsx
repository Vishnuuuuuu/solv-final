import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, Home } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const RealEstateServices: React.FC = () => {
  const navigate = useNavigate();

  const realEstateServices = [
    {
      title: "Property Sale Agreement",
      description: "Comprehensive property sale agreement drafting and review",
      features: [
        "Sale Deed Preparation",
        "Legal Verification",
        "Registration Support",
      ],
      // ...existing code...
      // duration: "3-5 days",
      slug: "property-sale-agreement",
    },
    {
      title: "Rent Agreement",
      description: "Residential and commercial rent agreement preparation",
      features: [
        "11-Month Lease",
        "Police Verification",
        "Stamp Paper Arrangement",
      ],
      // ...existing code...
      // duration: "1-2 days",
      slug: "rent-agreement",
    },
    {
      title: "Property Title Verification",
      description: "Complete property title and document verification",
      features: [
        "Chain Title Verification",
        "Encumbrance Check",
        "Legal Opinion",
      ],
      // ...existing code...
      // duration: "7-10 days",
      slug: "title-verification",
    },
    {
      title: "Property Registration",
      description: "End-to-end property registration services",
      features: [
        "Document Preparation",
        "Stamp Duty Calculation",
        "Registration Process",
      ],
      // ...existing code...
      // duration: "5-7 days",
      slug: "property-registration",
    },
    {
      title: "Lease Agreement",
      description: "Commercial and residential lease agreement drafting",
      features: ["Long-term Lease", "Renewal Clauses", "Legal Compliance"],
      // ...existing code...
      // duration: "2-3 days",
      slug: "lease-agreement",
    },
    {
      title: "Property Management Agreement",
      description: "Property management and maintenance agreements",
      features: [
        "Management Terms",
        "Maintenance Clauses",
        "Service Agreements",
      ],
      // ...existing code...
      // duration: "2-3 days",
      slug: "property-management",
    },
    {
      title: "Power of Attorney",
      description: "Property-related power of attorney documents",
      features: ["General POA", "Special POA", "Revocation Documents"],
      // ...existing code...
      // duration: "1-2 days",
      slug: "power-of-attorney",
    },
    {
      title: "Joint Development Agreement",
      description: "Joint development agreements for real estate projects",
      features: ["Development Terms", "Profit Sharing", "Compliance Check"],
      // ...existing code...
      // duration: "7-10 days",
      slug: "joint-development-agreement",
    },
    {
      title: "Property Dispute Resolution",
      description: "Legal support for property-related disputes",
      features: ["Dispute Analysis", "Settlement Negotiation", "Legal Notice"],
      // ...existing code...
      // duration: "5-7 days",
      slug: "property-dispute",
    },
  ];

  return (
    <div className="pt-32 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center text-lg px-4 py-2 rounded-md text-slate-600 hover:text-slate-900 transition-colors mb-6"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Back to Services
          </Link>

          <div className="flex items-center space-x-3 mb-4">
            <Home className="h-8 w-8 text-slate-700" />
            <h1 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900">
              Real Estate Services
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            Complete real estate legal services and documentation for all your
            property needs
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
              Our Real Estate Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From property agreements to title verification, we provide
              comprehensive real estate legal solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realEstateServices.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300 group cursor-pointer"
                onClick={() =>
                  navigate(`/services/real-estate/${service.slug}`)
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
                      {/* <span className="text-slate-500">Duration</span> */}
                      <div className="font-medium text-slate-700">
                        {/* {service.duration} */}
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
              Why Choose Our Real Estate Services?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Expert legal support for all your property transactions and
              documentation needs
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
                <Home className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Property Law Experts
              </h3>
              <p className="text-slate-600">
                Specialized legal professionals with extensive real estate
                experience
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
                Secure Transactions
              </h3>
              <p className="text-slate-600">
                Ensuring all property transactions are legally sound and secure
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
                End-to-End Support
              </h3>
              <p className="text-slate-600">
                Complete assistance from documentation to registration
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
