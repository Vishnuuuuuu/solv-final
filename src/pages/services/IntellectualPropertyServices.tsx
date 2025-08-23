import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, Shield } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const IntellectualPropertyServices: React.FC = () => {
  const navigate = useNavigate();

  const intellectualPropertyServices = [
    {
      title: "Trademark Registration",
      description:
        "Complete trademark registration and brand protection services",
      features: ["Trademark Search", "Application Filing", "Brand Protection"],
      duration: "8-12 months",
      slug: "trademark-registration",
    },
    {
      title: "Patent Applications",
      description:
        "Patent filing and intellectual property protection services",
      features: ["Patent Search", "Application Drafting", "Patent Filing"],
      duration: "12-18 months",
      slug: "patent-applications",
    },
    {
      title: "Copyright Registration",
      description: "Copyright protection for creative and literary works",
      features: ["Copyright Filing", "Work Protection", "Legal Documentation"],
      duration: "4-6 months",
      slug: "copyright-registration",
    },
    {
      title: "IP Litigation",
      description: "Intellectual property infringement and litigation services",
      features: [
        "Infringement Cases",
        "IP Enforcement",
        "Court Representation",
      ],
      duration: "6-24 months",
      slug: "ip-litigation",
    },
    {
      title: "Licensing Agreements",
      description: "IP licensing and technology transfer agreements",
      features: ["License Drafting", "Royalty Terms", "IP Monetization"],
      duration: "15-30 days",
      slug: "licensing-agreements",
    },
    {
      title: "Trade Secret Protection",
      description: "Trade secret protection and confidentiality services",
      features: [
        "NDA Preparation",
        "Trade Secret Audits",
        "Protection Strategies",
      ],
      duration: "7-15 days",
      slug: "trade-secret-protection",
    },
    {
      title: "Design Registration",
      description: "Industrial design registration and protection",
      features: [
        "Design Application",
        "Design Protection",
        "Registration Process",
      ],
      duration: "6-12 months",
      slug: "design-registration",
    },
    {
      title: "Domain Disputes",
      description: "Domain name disputes and cybersquatting issues",
      features: [
        "UDRP Proceedings",
        "Domain Recovery",
        "Online Brand Protection",
      ],
      duration: "2-6 months",
      slug: "domain-disputes",
    },
    {
      title: "IP Portfolio Management",
      description: "Comprehensive intellectual property portfolio management",
      features: ["Portfolio Strategy", "IP Maintenance", "Asset Valuation"],
      duration: "Ongoing",
      slug: "ip-portfolio-management",
    },
    {
      title: "IP Due Diligence",
      description: "Intellectual property due diligence for transactions",
      features: ["IP Audits", "Asset Verification", "Risk Assessment"],
      duration: "15-45 days",
      slug: "ip-due-diligence",
    },
    {
      title: "Brand Enforcement",
      description: "Brand protection and enforcement services",
      features: [
        "Brand Monitoring",
        "Enforcement Actions",
        "Anti-Counterfeiting",
      ],
      duration: "Ongoing",
      slug: "brand-enforcement",
    },
    {
      title: "IP Strategy & Consulting",
      description: "Strategic intellectual property consulting and planning",
      features: ["IP Strategy", "Competitive Analysis", "Protection Planning"],
      duration: "Variable",
      slug: "ip-strategy-consulting",
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
            <Shield className="h-8 w-8 text-slate-700" />
            <h1 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900">
              Intellectual Property Services
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            Protect and maximize your intellectual assets with comprehensive IP
            legal services and strategic guidance
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
              Our Intellectual Property Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From trademark registration to patent protection, we safeguard
              your intellectual property and innovative ideas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {intellectualPropertyServices.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300 group cursor-pointer"
                onClick={() =>
                  navigate(`/services/intellectual-property/${service.slug}`)
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
              Why Choose Our IP Services?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Expert intellectual property lawyers dedicated to protecting and
              maximizing your creative and innovative assets
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
                <Shield className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                IP Law Specialists
              </h3>
              <p className="text-slate-600">
                Specialized intellectual property lawyers with deep technical
                and legal expertise
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
                Comprehensive Protection
              </h3>
              <p className="text-slate-600">
                Full spectrum IP protection from registration to enforcement and
                monetization
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
                Strategic IP Management
              </h3>
              <p className="text-slate-600">
                Strategic approach to building and managing valuable IP
                portfolios
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
