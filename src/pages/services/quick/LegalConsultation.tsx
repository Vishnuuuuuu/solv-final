import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  MapPin,
  PhoneCall,
} from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useWeb3Form } from "../../../hooks/useWeb3Form";
import { supabase } from "../../../lib/supabase";

const SLOT_TIMES = ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"];

// Next `count` upcoming Mondays (including today if today is a Monday), formatted as yyyy-mm-dd
function getUpcomingMondays(count: number): string[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // getDay(): 0=Sun, 1=Mon, ..., 6=Sat. Days until the next Monday (0 if today is Monday).
  const daysUntilMonday = (1 - today.getDay() + 7) % 7;

  const firstMonday = new Date(today);
  firstMonday.setDate(today.getDate() + daysUntilMonday);

  const mondays: string[] = [];
  for (let i = 0; i < count; i++) {
    const d = new Date(firstMonday);
    d.setDate(firstMonday.getDate() + i * 7);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    mondays.push(`${yyyy}-${mm}-${dd}`);
  }
  return mondays;
}

function formatDate(isoDate: string): string {
  return new Date(isoDate + "T00:00:00").toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export const LegalConsultation: React.FC = () => {
  const upcomingMondays = useMemo(() => getUpcomingMondays(6), []);

  const [selectedDate, setSelectedDate] = useState(upcomingMondays[0]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookedTimes, setBookedTimes] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    requirements: "",
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { submitForm: sendBookingEmail } = useWeb3Form();

  useEffect(() => {
    let cancelled = false;
    setSelectedTime(null);
    setLoadingSlots(true);

    supabase
      .from("consultation_booked_slots")
      .select("slot_time")
      .eq("slot_date", selectedDate)
      .then(({ data, error }) => {
        if (cancelled) return;
        if (!error && data) {
          setBookedTimes(data.map((row) => row.slot_time));
        }
        setLoadingSlots(false);
      });

    return () => {
      cancelled = true;
    };
  }, [selectedDate]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTime) {
      setSubmitError("Please choose a time slot.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const { error } = await supabase.from("consultation_bookings").insert({
      full_name: formData.fullName,
      mobile: formData.mobile,
      email: formData.email,
      requirements: formData.requirements || null,
      slot_date: selectedDate,
      slot_time: selectedTime,
    });

    setIsSubmitting(false);

    if (error) {
      if (error.code === "23505") {
        setSubmitError(
          "That slot was just booked by someone else. Please pick another time."
        );
        setBookedTimes((prev) => [...prev, selectedTime]);
        setSelectedTime(null);
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
      return;
    }

    const emailPayload = new FormData();
    emailPayload.append("subject", "New Free Consultation Booking");
    emailPayload.append("fullName", formData.fullName);
    emailPayload.append("mobile", formData.mobile);
    emailPayload.append("email", formData.email);
    emailPayload.append("requirements", formData.requirements || "-");
    emailPayload.append("date", formatDate(selectedDate));
    emailPayload.append("time", selectedTime);
    sendBookingEmail(emailPayload);

    setIsSubmitted(true);
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      requirements: "",
      agreeToTerms: false,
    });
    setSelectedTime(null);
  };

  const benefits = [
    "Free, in-person session with an experienced advocate",
    "One-on-one — no shared or group slots",
    "30 minutes fully dedicated to your matter",
    "Confidential consultation at our office",
  ];

  const steps = [
    {
      icon: Calendar,
      title: "Pick a Monday Slot",
      description: "Choose an available 30-minute slot between 6–9 PM",
    },
    {
      icon: PhoneCall,
      title: "Confirm Your Booking",
      description: "Share your details and we'll lock in your appointment",
    },
    {
      icon: CheckCircle,
      title: "Visit Our Office",
      description: "Meet your advocate in person at the scheduled time",
    },
  ];

  return (
    <div className="pt-28 min-h-screen bg-white">
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
            <PhoneCall className="h-8 w-8 text-slate-700" />
            <h1 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900">
              Free In-Person Legal Consultation
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            Every Monday, 6–9 PM. 30 minutes, one-on-one, by prior appointment
            only.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Why Book This Consultation?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How It Works
              </h2>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-slate-700" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start space-x-3 bg-slate-50 border border-slate-200 rounded-lg p-4"
            >
              <MapPin className="h-5 w-5 text-slate-700 flex-shrink-0 mt-0.5" />
              <p className="text-slate-600 text-sm">
                Consultations are held at our office: No. 45, First Floor,
                19th cross road, 7th Main Rd, BTM 2nd Stage, Bengaluru,
                Karnataka 560076.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-amber-50 border border-amber-200 rounded-lg p-5"
            >
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-amber-900 mb-1">Note</p>
                  <ul className="text-sm text-amber-800 space-y-1.5 list-disc list-inside">
                    <li>The free consultation provides general legal information only. It does not include document reviews, title searches, or real estate due diligence.</li>
                    <li>Appointments/slots are confirmed only after confirmation by email or phone call.</li>
                    <li>No walk-ins.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-24"
            >
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Book Your Free Slot
                </h3>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Slot Booked!
                    </h3>
                    <p className="text-slate-600">
                      Your free in-person consultation is confirmed. We'll
                      send a reminder before your appointment.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-sm font-medium text-slate-700 hover:underline"
                    >
                      Book another slot
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Choose a Monday
                      </label>
                      <select
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      >
                        {upcomingMondays.map((date) => (
                          <option key={date} value={date}>
                            {formatDate(date)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Choose a Time Slot
                      </label>
                      {loadingSlots ? (
                        <p className="text-sm text-slate-500">
                          Checking availability...
                        </p>
                      ) : (
                        <div className="grid grid-cols-2 gap-2">
                          {SLOT_TIMES.map((time) => {
                            const isBooked = bookedTimes.includes(time);
                            const isSelected = selectedTime === time;
                            return (
                              <button
                                type="button"
                                key={time}
                                disabled={isBooked}
                                onClick={() => setSelectedTime(time)}
                                className={`px-3 py-2 rounded-md text-sm font-medium border transition-colors ${
                                  isBooked
                                    ? "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed line-through"
                                    : isSelected
                                    ? "bg-slate-800 text-white border-slate-800"
                                    : "bg-white text-slate-700 border-slate-300 hover:border-slate-500"
                                }`}
                              >
                                {time}
                              </button>
                            );
                          })}
                        </div>
                      )}
                      {!loadingSlots && bookedTimes.length === SLOT_TIMES.length && (
                        <p className="text-sm text-red-600 mt-2">
                          All slots for this date are booked. Please choose
                          another Monday.
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Full Name
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
                        Requirements
                      </label>
                      <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                        placeholder="Tell us about your matter..."
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
                        I agree to the{" "}
                        <Link
                          to="/disclaimer"
                          className="text-slate-800 hover:underline"
                        >
                          Terms and Conditions
                        </Link>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !selectedTime}
                      className={`w-full py-3 rounded-md font-semibold transition-colors ${
                        isSubmitting || !selectedTime
                          ? "bg-slate-400 cursor-not-allowed"
                          : "bg-slate-800 text-white hover:bg-slate-700"
                      }`}
                    >
                      {isSubmitting ? "Booking..." : "Confirm Free Slot"}
                    </button>

                    {submitError && (
                      <div className="p-3 rounded-md text-center text-sm bg-red-100 text-red-800">
                        {submitError}
                      </div>
                    )}
                  </form>
                )}

                <div className="mt-4 p-3 bg-amber-50 rounded-md">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span className="text-sm font-medium text-amber-800">
                      Free · Mondays 6–9 PM · 30 min · In person
                    </span>
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
