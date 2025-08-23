import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Building, CheckCircle } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const CorporateCommercialServices: React.FC = () => {
  const navigate = useNavigate();

  const corporateCommercialServices = [
    {
      title: "Company Incorporation",
      description: "Complete company registration and incorporation services",
      features: [
        "Private Limited Company",
        "LLP Registration",
        "One Person Company",
      ],
      duration: "7-15 days",
      slug: "company-incorporation",
    },
    {
      title: "Contract Drafting & Review",
      description: "Professional contract drafting and legal review services",
      features: ["Business Contracts", "Service Agreements", "Legal Review"],
      duration: "3-7 days",
      slug: "contract-drafting-review",
    },
    {
      title: "Mergers & Acquisitions",
      description: "Complete M&A advisory and legal support services",
      features: ["Due Diligence", "Transaction Support", "Legal Documentation"],
      duration: "60-180 days",
      slug: "mergers-acquisitions",
    },
    {
      title: "Corporate Governance",
      description: "Corporate governance advisory and compliance services",
      features: [
        "Board Meetings",
        "Compliance Management",
        "Governance Policies",
      ],
      duration: "Ongoing",
      slug: "corporate-governance",
    },
    {
      title: "Business Compliance",
      description: "Comprehensive business compliance and regulatory services",
      features: ["Regulatory Compliance", "Filing Services", "Legal Updates"],
      duration: "Ongoing",
      slug: "business-compliance",
    },
    {
      title: "Partnership Agreements",
      description: "Partnership and joint venture agreement drafting",
      features: ["Partnership Deeds", "JV Agreements", "Profit Sharing Terms"],
      duration: "5-10 days",
      slug: "partnership-agreements",
    },
    {
      title: "Shareholder Agreements",
      description: "Comprehensive shareholder agreement preparation",
      features: ["Share Transfer Rules", "Voting Rights", "Exit Mechanisms"],
      duration: "7-12 days",
      slug: "shareholder-agreements",
    },
    {
      title: "Employment Contracts",
      description: "Employment agreements and HR legal documentation",
      features: [
        "Employment Terms",
        "Non-Disclosure Agreements",
        "HR Policies",
      ],
      duration: "2-5 days",
      slug: "employment-contracts",
    },
    {
      title: "Commercial Leases",
      description: "Commercial property lease agreements and documentation",
      features: ["Lease Negotiations", "Terms & Conditions", "Renewal Clauses"],
      duration: "3-7 days",
      slug: "commercial-leases",
    },
    // {
    //   title: "Business Restructuring",
    //   description: "Corporate restructuring and reorganization services",
    //   features: [
    //     "Restructuring Plans",
    //     "Legal Documentation",
    //     "Compliance Support",
    //   ],
    //   duration: "30-90 days",
    //   slug: "business-restructuring",
    // },
    // {
    //   title: "Foreign Investment Advisory",
    //   description: "FDI and foreign investment compliance services",
    //   features: ["FDI Compliance", "FEMA Advisory", "Investment Documentation"],
    //   duration: "15-30 days",
    //   slug: "foreign-investment-advisory",
    // },
    // {
    //   title: "Corporate Secretarial Services",
    //   description: "Complete corporate secretarial and statutory compliance",
    //   features: ["Annual Filings", "Board Resolutions", "Statutory Registers"],
    //   duration: "Ongoing",
    //   slug: "corporate-secretarial",
    // },
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
            <Building className="h-8 w-8 text-slate-700" />
            <h1 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900">
              Corporate & Commercial Services
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            Comprehensive corporate legal services for businesses of all sizes,
            from startups to established enterprises
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
              Our Corporate & Commercial Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From company incorporation to complex M&A transactions, we provide
              complete corporate legal solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateCommercialServices.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300 group cursor-pointer"
                onClick={() =>
                  navigate(`/services/corporate-commercial/${service.slug}`)
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
              Why Choose Our Corporate Services?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Expert corporate lawyers providing strategic business solutions
              and comprehensive legal support
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
                <Building className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Corporate Law Experts
              </h3>
              <p className="text-slate-600">
                Specialized corporate lawyers with extensive business law
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
                Strategic Business Solutions
              </h3>
              <p className="text-slate-600">
                Tailored legal strategies to support your business growth and
                objectives
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
                Complete corporate legal support from inception to complex
                transactions
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
