import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, Gavel } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const DisputeResolutionServices: React.FC = () => {
  const navigate = useNavigate();

  const disputeResolutionServices = [
    {
      title: "Commercial Litigation",
      description:
        "Expert representation in commercial disputes and litigation",
      features: [
        "Business Disputes",
        "Contract Litigation",
        "Court Representation",
      ],
      // duration: "30-180 days",
      slug: "commercial-litigation",
    },
    {
      title: "Arbitration Services",
      description:
        "Alternative dispute resolution through arbitration proceedings",
      features: [
        "Arbitration Proceedings",
        "Award Enforcement",
        "Legal Representation",
      ],
      // duration: "60-120 days",
      slug: "arbitration-services",
    },
    {
      title: "Mediation Services",
      description: "Mediation and settlement services for dispute resolution",
      features: [
        "Settlement Negotiations",
        "Mediation Proceedings",
        "Dispute Settlement",
      ],
      // duration: "15-45 days",
      slug: "mediation-services",
    },
    {
      title: "Contract Disputes",
      description: "Resolution of contract-related disputes and breaches",
      features: ["Breach of Contract", "Contract Analysis", "Legal Remedies"],
      // duration: "30-90 days",
      slug: "contract-disputes",
    },
    {
      title: "Employment Disputes",
      description: "Employment and labor dispute resolution services",
      features: [
        "Wrongful Termination",
        "Labor Law Issues",
        "Employment Rights",
      ],
      // duration: "20-60 days",
      slug: "employment-disputes",
    },
    {
      title: "Consumer Complaints",
      description: "Consumer protection and complaint resolution services",
      features: ["Consumer Rights", "Product Liability", "Service Complaints"],
      // duration: "15-30 days",
      slug: "consumer-complaints",
    },
    {
      title: "Debt Recovery",
      description: "Legal debt recovery and collection services",
      features: [
        "Debt Collection",
        "Recovery Proceedings",
        "Settlement Negotiations",
      ],
      // duration: "30-90 days",
      slug: "debt-recovery",
    },
    {
      title: "Property Disputes",
      description: "Real estate and property dispute resolution",
      features: ["Property Rights", "Boundary Disputes", "Title Disputes"],
      // duration: "60-180 days",
      slug: "property-disputes",
    },
    {
      title: "Partnership Disputes",
      description: "Business partnership and joint venture dispute resolution",
      features: [
        "Partnership Dissolution",
        "Profit Sharing Disputes",
        "Business Mediation",
      ],
      // duration: "45-120 days",
      slug: "partnership-disputes",
    },
    // {
    //   title: "Intellectual Property Disputes",
    //   description:
    //     "IP infringement and intellectual property dispute resolution",
    //   features: [
    //     "Patent Disputes",
    //     "Trademark Infringement",
    //     "Copyright Issues",
    //   ],
    //   duration: "90-180 days",
    //   slug: "ip-disputes",
    // },
    // {
    //   title: "Insurance Claims",
    //   description: "Insurance claim disputes and policy coverage issues",
    //   features: ["Claim Denials", "Coverage Disputes", "Policy Interpretation"],
    //   duration: "30-90 days",
    //   slug: "insurance-claims",
    // },
    // {
    //   title: "Banking & Finance Disputes",
    //   description: "Financial disputes and banking-related legal issues",
    //   features: ["Loan Disputes", "Banking Issues", "Financial Recovery"],
    //   duration: "45-120 days",
    //   slug: "banking-finance-disputes",
    // },
  ];

  return (
    <div className="pt-28 min-h-screen bg-white">
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
            <Gavel className="h-8 w-8 text-slate-700" />
            <h1 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900">
              Dispute Resolution Services
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            Expert litigation and alternative dispute resolution services for
            comprehensive conflict resolution and legal representation
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
              Our Dispute Resolution Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From commercial litigation to mediation, we provide comprehensive
              dispute resolution services to protect your interests
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {disputeResolutionServices.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300 group cursor-pointer"
                onClick={() =>
                  navigate(`/services/dispute-resolution/${service.slug}`)
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
              Why Choose Our Dispute Resolution Services?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experienced litigation and dispute resolution professionals
              committed to achieving the best outcomes for our clients
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
                <Gavel className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Expert Litigators
              </h3>
              <p className="text-slate-600">
                Seasoned legal professionals with proven track record in dispute
                resolution
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
                Strategic Solutions
              </h3>
              <p className="text-slate-600">
                Comprehensive dispute resolution strategies tailored to your
                specific needs
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
                Alternative Dispute Resolution
              </h3>
              <p className="text-slate-600">
                Efficient mediation and arbitration services to avoid lengthy
                court proceedings
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
