import { motion } from "framer-motion";
import { Calendar, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const FreeConsultationBanner: React.FC = () => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="relative z-[60] bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-semibold text-sm sm:text-base">
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            <span>FREE In-Person Legal Consultation</span>
            <span className="hidden sm:inline text-slate-800">&mdash;</span>
            <span>
              Every Monday, 6&ndash;9 PM &middot; 30 min per person &middot;
              Prior appointment required
            </span>
          </div>
          <Link
            to="/services/quick-legal-services/consultation"
            className="flex-shrink-0 bg-slate-900 text-white px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap"
          >
            Book Your Slot
          </Link>
        </div>
      </div>
      <button
        onClick={() => setIsDismissed(true)}
        aria-label="Dismiss announcement"
        className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 p-1 text-slate-800 hover:text-slate-950 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
};
