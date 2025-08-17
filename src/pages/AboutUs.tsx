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
                Advocates and Legal Consultants serves as a trusted partner for
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
    </div>
  );
};
