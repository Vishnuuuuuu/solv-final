import { motion } from 'framer-motion';
import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Changed items-center -> items-start */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900 mb-6">
                About Us
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                <strong>Solv. Advocates and Consultants</strong> is a
                Bengaluru-based law firm dedicated to providing practical and
                solution-oriented legal services. We believe that effective
                legal advice should be clear, accessible, and tailored to each
                client’s needs.
              </p>
              <p className="text-lg text-slate-700 mb-6">
                Our areas of practice include{' '}
                <strong>
                  property law, civil litigation, consumer disputes, tax law,
                  corporate law, insurance claims, banking matters, and family
                  law
                </strong>{' '}
                such as succession, partition, and matrimonial disputes. We also
                advise individuals, businesses, and institutions on{' '}
                <strong>regulatory compliance, contracts, and documentation</strong>
                , ensuring their interests are safeguarded at every stage.
              </p>
              <p className="text-lg text-slate-700 mb-6">
                At Solv., we place strong emphasis on{' '}
                <strong>
                  meticulous drafting, precise pleadings, and well-prepared
                  representation
                </strong>
                . This attention to detail allows us to deliver reliable
                outcomes both inside and outside the courtroom.
              </p>
              <p className="text-lg text-slate-700 mb-6">
                What makes us distinct is our{' '}
                <strong>personalized approach</strong>. We recognize that no two
                matters are the same and work closely with our clients to
                develop strategies that are both legally sound and practically
                effective. Our goal is not only to resolve disputes but also to
                provide <strong>preventive legal guidance</strong> that reduces
                risks in the future.
              </p>
              <p className="text-lg text-slate-700">
                With a commitment to{' '}
                <strong>clarity, integrity, and results</strong>, Solv.
                Advocates and  Consultants serves as a trusted partner for
                clients navigating complex legal challenges with confidence.
              </p>
            </motion.div>

            {/* Added mt-2 to align better with heading */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mt-2"
            >
              <img
                src="/about.jpg"
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
                Meet the visionary behind Solv. Advocates and Consultants, delivering practical, solution-oriented legal services with a personal touch.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center"
            >
              <div className="flex justify-center my-6">
  <img
    src="/founder.png"
    alt="Navya Shetty Raju"
    className="w-48 h-55 object-cover rounded-lg shadow-md"
  />
</div>

              <div className="p-8 lg:p-12 flex flex-col justify-center w-full">
                <h3 className="text-2xl lg:text-3xl font-bold font-serif text-slate-900 mb-4 text-center">
                  Navya Shetty Raju
                </h3>
                <p className="text-lg text-slate-700 font-medium mb-4 text-center">
                  Founder, <strong>Solv. Advocates and Consultants</strong>
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Navya Shetty Raju is the Founder of <strong>Solv. Advocates and Consultants</strong>,
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
                  <strong> Solv. Advocates and Consultants</strong> with integrity and a client-first approach.
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
