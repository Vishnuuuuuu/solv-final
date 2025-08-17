import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useDisclaimer } from './DisclaimerManager';

export const DisclaimerPopup: React.FC = () => {
  const { hasAccepted, acceptDisclaimer } = useDisclaimer();
  const showPopup = !hasAccepted;

  const handleAccept = () => {
    acceptDisclaimer();
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <>
          {/* Dark Overlay Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/10 z-[9999]"
            style={{ pointerEvents: 'auto' }}
          />

          {/* Disclaimer Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ pointerEvents: 'auto' }}
          >
            <div className="bg-black/60 backdrop-blur-md border border-gray-600/30 rounded-lg shadow-2xl w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl overflow-y-auto my-8 mx-2 sm:mx-4 p-4 sm:p-8" style={{ maxHeight: '90vh' }}>
              <div className="text-center py-4 px-2 sm:py-8 sm:px-10">
                <h1 className="text-xl sm:text-3xl font-bold text-white mb-6 tracking-wider">
                  DISCLAIMER
                </h1>
                {/* Mobile Short Disclaimer as bullet points */}
                <div className="block sm:hidden text-white text-left space-y-3 leading-relaxed text-xs">
                  <ul className="list-disc pl-5">
                    <li>No solicitation or advertisement.</li>
                    <li>You are seeking info on your own.</li>
                    <li>No legal advice or lawyer-client relationship.</li>
                    <li>Accuracy not guaranteed; seek independent advice.</li>
                  </ul>
                </div>
                {/* Full Disclaimer for larger screens */}
                <div className="hidden sm:block text-white text-left space-y-5 leading-relaxed text-base">
                  <p>
                    The rules of the Bar Council of India do not permit advocates to solicit work or advertise in any manner. This website has been created only for informational purposes and is not intended to constitute solicitation, invitation, advertisement or inducement of any sort whatsoever from us or any of our members to solicit any work in any manner. By clicking on 'Agree' below, you acknowledge and confirm the following:
                  </p>
                  <p>
                    <strong>a)</strong> there has been no solicitation, invitation, advertisement or inducement of any sort whatsoever from us or any of our members to solicit any work through this website;
                  </p>
                  <p>
                    <strong>b)</strong> you are desirous of obtaining further information about us on your own accord and for your use;
                  </p>
                  <p>
                    <strong>c)</strong> no information or material provided on this website is to be construed as a legal opinion and use of this website will not create any lawyer-client relationship;
                  </p>
                  <p>
                    <strong>d)</strong> while reasonable care has been taken in ensuring the accuracy of the contents of the website, Argus Partners shall not be responsible for the results of any actions taken on the basis of information provided in this website or for any error or omission in the website; and
                  </p>
                  <p>
                    <strong>e)</strong> in cases where the user has any legal issues, the user must seek independent legal advice.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4">
                  <button
                    onClick={handleAccept}
                    className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-3 rounded transition-colors duration-200 text-base shadow-lg w-full sm:w-auto"
                  >
                    I AGREE
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
