import { motion } from 'framer-motion';
import { Heart, Lightbulb, Target } from 'lucide-react';
import React from 'react';

export const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah J. Mitchell',
      position: 'Managing Partner',
      specialization: 'Corporate Law & M&A',
      experience: '15+ years',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. Michael Chen',
      position: 'Senior Partner',
      specialization: 'Intellectual Property',
      experience: '12+ years',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Partner',
      specialization: 'Technology & Privacy Law',
      experience: '10+ years',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'James Thompson',
      position: 'Partner',
      specialization: 'Dispute Resolution',
      experience: '14+ years',
      image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every legal strategy is crafted with meticulous attention to detail and strategic foresight.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge legal technologies and methodologies to deliver superior outcomes.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Our commitment to ethical practice and transparency forms the foundation of every client relationship.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-6">About SOLV.</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A distinguished legal practice founded on the principles of excellence, innovation, and unwavering commitment to client success.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-700 mb-6">
                Founded in 2010, Solv. emerged from a vision to revolutionize legal practice through innovative thinking, 
                technological advancement, and an unwavering commitment to client success. Our founding partners recognized 
                the need for a law firm that could navigate the complexities of modern business while maintaining the highest 
                standards of legal excellence.
              </p>
              <p className="text-lg text-slate-700 mb-6">
                Over the past decade, we have grown from a boutique practice to a recognized leader in corporate law, 
                intellectual property, and technology law. Our success is measured not just by the cases we win, 
                but by the lasting relationships we build and the innovative solutions we create.
              </p>
              <p className="text-lg text-slate-700">
                Today, Solv. serves clients across multiple industries, from emerging startups to Fortune 500 companies, 
                providing strategic legal counsel that drives business success and protects valuable assets.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Solv. Office"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">08+</div>
                <div className="text-slate-300">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every service we provide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              >
                <value.icon className="h-12 w-12 text-slate-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Outlook - Commented Out */}
      {/* 
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Globe className="h-16 w-16 text-slate-700 mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900 mb-6">Global Outlook</h2>
              <p className="text-lg text-slate-700 mb-6">
                In today's interconnected world, legal challenges transcend borders. Solv. maintains a global perspective, 
                working closely with international partners and understanding cross-border regulations to serve clients 
                operating in multiple jurisdictions.
              </p>
              <p className="text-lg text-slate-700 mb-6">
                Our team stays current with international legal developments, ensuring our clients receive comprehensive 
                counsel that considers global implications and opportunities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-slate-900">15+</div>
                  <div className="text-slate-600">Countries Served</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-slate-900">50+</div>
                  <div className="text-slate-600">International Partners</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Global Network"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      */}

      {/* About Founder */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900 mb-4">About Founder</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Meet the visionary behind Solv. Advocates and Legal Consultants, delivering practical, solution-oriented legal services with a personal touch.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center"
            >
              <div className="w-full relative h-80 lg:h-96">
                <img
                  src="/public/founder-1.jpeg"
                  alt="Navya Shetty Raju"
                  className="w-full h-full object-cover"
                  style={{ maxHeight: '400px' }}
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center w-full">
                <h3 className="text-2xl lg:text-3xl font-bold font-serif text-slate-900 mb-4 text-center">
                  Navya Shetty Raju
                </h3>
                <p className="text-lg text-slate-700 font-medium mb-4 text-center">
                  Founder, <strong>Solv. Advocates and Legal Consultants</strong>
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Navya Shetty Raju is the Founder of <strong>Solv. Advocates and Legal Consultants</strong>,
                  a Bengaluru-based law firm known for delivering practical, solution-oriented legal services
                  with a personal touch. With eight years of combined experience in litigation, legal drafting,
                  and academic instruction, she brings a rare blend of courtroom acumen and scholarly insight
                  to every matter she handles.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  A practicing advocate, Navya specializes in <strong>property law, civil litigation, consumer disputes,
                  insurance claims, banking matters</strong>, and <strong>family law</strong>, including succession, partition,
                  and matrimonial disputes. Her legal practice is distinguished by meticulous documentation,
                  precise pleadings, and strategic courtroom representation. She also advises on regulatory
                  compliance and documentation for individuals, businesses, and institutions, combining a deep
                  understanding of the law with a commitment to protecting her clients’ interests.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Navya’s professional journey spans both the legal profession and academia. She has served as an
                  <strong>Assistant Professor</strong> at RV Institute of Legal Studies and as a
                  <strong> Visiting Faculty</strong> at prestigious institutions such as Bishop Cotton Women’s Christian
                  Law College and BMS College of Law. Her teaching repertoire includes
                  <strong> Constitutional Law, Labour Law, Company Law, Civil Procedure Code, and Taxation Law</strong>.
                  Known for her interactive and analytical approach, she bridges theory with practice, often
                  integrating real-world legal experiences into her classroom sessions. This dual engagement allows
                  her to mentor aspiring lawyers with both academic rigor and practical wisdom.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Academically accomplished, Navya holds an <strong>LL.M. in Commercial and Corporate Law</strong> from
                  Christ (Deemed to be University) and a <strong>BBA LL.B.</strong> from Bishop Cotton Women’s Christian
                  Law College. She is currently pursuing her <strong>Ph.D. in Law</strong> at Alliance University, further
                  deepening her expertise.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Her intellectual contributions include presenting and publishing research papers at national and
                  international conferences on diverse topics such as cyber security, e-waste management, socio-economic
                  justice, and consumer protection. These engagements reflect her commitment to continuous learning
                  and to contributing to the legal discourse in emerging and critical areas of law.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Driven by a vision to provide accessible, effective, and ethical legal solutions, Navya leads
                  <strong> Solv. Advocates and Legal Consultants</strong> with integrity and a client-first approach.
                  Whether representing clients in court, advising on complex legal transactions, or mentoring the
                  next generation of legal professionals, she remains dedicated to upholding justice and delivering
                  results that matter.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg text-center"></div>
                  <div className="bg-slate-50 p-4 rounded-lg text-center"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};