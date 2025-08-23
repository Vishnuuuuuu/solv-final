import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, Heart } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const PersonalFamilyServices: React.FC = () => {
  const navigate = useNavigate();

  const personalFamilyServices = [
    {
      title: "Will & Testament",
      description: "Comprehensive will drafting and estate planning services",
      features: ["Will Drafting", "Legal Review", "Registration Support"],
      duration: "3-5 days",
      slug: "will-testament",
    },
    {
      title: "Divorce Proceedings",
      description: "Complete divorce proceedings and legal representation",
      features: [
        "Mutual Consent Divorce",
        "Contested Divorce",
        "Legal Documentation",
      ],
      duration: "30-90 days",
      slug: "divorce-proceedings",
    },
    {
      title: "Child Custody",
      description: "Child custody and visitation rights legal services",
      features: [
        "Custody Agreements",
        "Visitation Rights",
        "Legal Representation",
      ],
      duration: "15-30 days",
      slug: "child-custody",
    },
    {
      title: "Family Settlements",
      description: "Family property and dispute settlement services",
      features: [
        "Property Division",
        "Settlement Agreements",
        "Legal Documentation",
      ],
      duration: "10-15 days",
      slug: "family-settlements",
    },
    {
      title: "Adoption Services",
      description: "Complete adoption legal procedures and documentation",
      features: ["Adoption Papers", "Court Representation", "Legal Compliance"],
      duration: "45-60 days",
      slug: "adoption-services",
    },
    {
      title: "Domestic Violence",
      description: "Legal protection and support for domestic violence cases",
      features: [
        "Protection Orders",
        "Legal Representation",
        "Court Proceedings",
      ],
      duration: "7-14 days",
      slug: "domestic-violence",
    },
    {
      title: "Marriage Registration",
      description: "Marriage registration and related legal services",
      features: [
        "Court Marriage",
        "Registration Process",
        "Certificate Issuance",
      ],
      duration: "5-7 days",
      slug: "marriage-registration",
    },
    {
      title: "Succession Planning",
      description: "Estate and succession planning for families",
      features: ["Estate Planning", "Legal Succession", "Tax Planning"],
      duration: "7-10 days",
      slug: "succession-planning",
    },
    {
      title: "Guardianship",
      description: "Legal guardianship proceedings and documentation",
      features: [
        "Guardian Appointment",
        "Court Applications",
        "Legal Documentation",
      ],
      duration: "20-30 days",
      slug: "guardianship",
    },
    // {
    //   title: "Maintenance & Alimony",
    //   description: "Maintenance and alimony proceedings and agreements",
    //   features: ["Maintenance Orders", "Alimony Calculations", "Legal Support"],
    //   duration: "15-25 days",
    //   slug: "maintenance-alimony",
    // },
    // {
    //   title: "Property Inheritance",
    //   description: "Property inheritance and succession legal services",
    //   features: [
    //     "Inheritance Claims",
    //     "Legal Verification",
    //     "Property Transfer",
    //   ],
    //   duration: "20-30 days",
    //   slug: "property-inheritance",
    // },
    // {
    //   title: "Family Court Matters",
    //   description: "Representation in various family court proceedings",
    //   features: [
    //     "Court Representation",
    //     "Legal Proceedings",
    //     "Document Filing",
    //   ],
    //   duration: "Variable",
    //   slug: "family-court-matters",
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
            <Heart className="h-8 w-8 text-slate-700" />
            <h1 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900">
              Personal & Family Services
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            Compassionate legal support for personal and family matters with
            expert guidance through life's important decisions
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
              Our Personal & Family Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From family planning to estate management, we provide
              comprehensive legal solutions for all your personal and family
              needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalFamilyServices.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300 group cursor-pointer"
                onClick={() =>
                  navigate(`/services/personal-family/${service.slug}`)
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
              Why Choose Our Personal & Family Services?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Compassionate legal professionals providing sensitive and
              personalized support for your family matters
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
                <Heart className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Compassionate Support
              </h3>
              <p className="text-slate-600">
                Understanding and empathetic approach to sensitive family
                matters
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
                Confidential & Secure
              </h3>
              <p className="text-slate-600">
                Complete privacy and confidentiality for all family legal
                matters
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
                Expert Family Lawyers
              </h3>
              <p className="text-slate-600">
                Specialized family law experts with years of experience
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
