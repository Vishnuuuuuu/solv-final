import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Scale } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const PreLitigationAdvisory: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    disputeDescription: '',
    amountInvolved: '',
    requirements: '',
    agreeToTerms: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        mobile: '',
        email: '',
        disputeDescription: '',
        amountInvolved: '',
        requirements: '',
        agreeToTerms: false
      });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const faqs = [
    {
      question: "What is pre-litigation advisory and why is it important?",
      answer: "Pre-litigation advisory helps you evaluate legal disputes before initiating formal proceedings. It's a proactive approach that can save significant time and resources by resolving conflicts through negotiation, legal notices, and settlement offers. This early analysis minimizes risks and clarifies your position, often preventing escalation into full-blown litigation."
    },
    {
      question: "Can Solv. help me settle a dispute without going to court?",
      answer: "Yes. Solv. specializes in early-stage resolution strategies. Our legal team crafts tailored settlement options and communicates professionally with the opposing party to reach amicable agreements—avoiding the need for costly court proceedings wherever possible."
    },
    {
      question: "What types of disputes qualify for this service?",
      answer: "We assist with a broad range of pre-litigation matters including contract breaches, unpaid invoices, consumer complaints, employment-related issues, defamation, harassment, commercial disagreements, and intellectual property conflicts. If the matter involves a potential claim or demand, it likely qualifies."
    },
    {
      question: "How do I start the process?",
      answer: "Just fill out our secure intake form with a summary of your dispute and relevant documents. Our legal team will assess your submission and provide a customized strategy based on the nature of the conflict, applicable laws, and urgency."
    },
    {
      question: "Will I receive a legal notice or settlement draft as part of this service?",
      answer: "Absolutely. Based on your case, we'll draft legally compliant documents including notices, settlement proposals, or response letters. These are designed to assert your position firmly while remaining professional and enforceable."
    },
    {
      question: "Does Solv. communicate directly with the other party?",
      answer: "If you authorize us to do so, yes. We can engage with the counterparty or their legal representative to present your case, propose settlement terms, and track progress—ensuring that communication is clear, constructive, and legally sound."
    },
    {
      question: "Is this service legally valid and recognized?",
      answer: "Yes. All communications, notices, and settlement documents prepared by Solv. are aligned with Indian law and legal best practices. They can be used as evidence or foundational material should the matter later proceed to formal litigation."
    },
    {
      question: "What if the negotiation fails?",
      answer: "If a resolution isn't possible through pre-litigation efforts, Solv. will guide you on next steps, including formal legal action. You can also connect with experienced advocates through our Find a Lawyer section for further representation."
    },
    {
      question: "How long does it take to resolve a dispute through this service?",
      answer: "Timelines vary depending on the complexity and responsiveness of the other party. Many disputes are resolved within 7–14 days, but multi-round negotiations may take longer. We stay involved until your matter reaches closure or requires escalation."
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Share Your Dispute Details",
      description: "Submit a brief summary of your dispute along with any relevant documents through our secure online form."
    },
    {
      number: "2",
      title: "Legal Assessment & Strategy",
      description: "Our legal experts analyze your case, assess risks, and craft a personalized settlement or negotiation strategy."
    },
    {
      number: "3",
      title: "Drafting & Communication",
      description: "We prepare strong legal notices, draft settlement offers, and guide you through communication with the other party."
    },
    {
      number: "4",
      title: "Resolution & Closure",
      description: "We help you achieve an amicable settlement or prepare you for the next legal steps if required—saving you time, stress, and litigation costs."
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
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
            <Scale className="h-8 w-8 text-slate-700" />
            <h1 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900">
              Pre-Litigation Advisory and Negotiation Support
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            Dispute Resolution and Settlement
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
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Legal Service</h2>
              <p className="text-slate-700 leading-relaxed">
                At Solv., we help businesses, professionals, and individuals resolve legal disputes early through Pre-Litigation Advisory & Negotiation Support. Before stepping into costly and time-consuming litigation, our legal experts assess the strengths and weaknesses of your case, identify risks, and develop tailored settlement strategies designed to protect your interests.
              </p>
            </motion.div>

            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">How It Works:</h2>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Why Choose Solv. */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Solv.?</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Our approach focuses on early dispute resolution, practical negotiation, and the drafting of clear, enforceable settlement agreements to help you avoid unnecessary lawsuits while safeguarding your legal rights. We handle a wide range of pre-litigation matters, including contract disputes, payment recovery, employment issues, consumer complaints, commercial disagreements, and IP conflicts.
              </p>
              <p className="text-slate-700 leading-relaxed">
                By working with Solv., you benefit from cost-effective, confidential, and legally robust solutions that aim to preserve relationships, minimize financial exposure, and achieve timely closure of disputes without litigation.
              </p>
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">FAQs</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="border border-slate-200 rounded-lg">
                    <summary className="p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                      {index + 1}. {faq.question}
                    </summary>
                    <div className="p-4 pt-0 text-slate-700">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </motion.div>

            <div className="text-center py-8">
              <p className="text-lg font-medium text-slate-900 mb-2">
                Let Solv. help you settle smart, protect your position, and avoid legal battles before they begin.
              </p>
            </div>
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
                <h3 className="text-xl font-bold text-slate-900 mb-4">Request this Service</h3>
                <p className="text-sm text-slate-600 mb-6">
                  Fill out the form and our legal team will contact you soon.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Request Submitted!</h3>
                    <p className="text-slate-600">Our legal team will contact you within 24 hours.</p>
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
                        Brief Description of the Dispute
                      </label>
                      <textarea
                        name="disputeDescription"
                        value={formData.disputeDescription}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Approximate Amount Involved
                      </label>
                      <input
                        type="text"
                        name="amountInvolved"
                        value={formData.amountInvolved}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Describe your requirements
                      </label>
                      <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
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
                        I agree to the <Link to="/disclaimer" className="text-slate-800 hover:underline">Terms and Conditions</Link>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-slate-800 text-white py-3 rounded-md font-semibold hover:bg-slate-700 transition-colors"
                    >
                      Proceed
                    </button>
                  </form>
                )}

                {/* Pricing Breakdown */}
                <div className="mt-8 pt-6 border-t border-slate-300">
                  <h4 className="font-semibold text-slate-900 mb-4">Pricing Breakdown</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Service Fee</span>
                      <span className="text-slate-900">₹0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">GST (18%)</span>
                      <span className="text-slate-900">₹0</span>
                    </div>
                    <div className="flex justify-between font-semibold text-base pt-2 border-t border-slate-200">
                      <span className="text-slate-900">Total</span>
                      <span className="text-slate-900">₹0</span>
                    </div>
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
