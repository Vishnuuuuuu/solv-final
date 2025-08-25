import { useState } from "react";

interface FormResult {
  message: string;
  isSuccess: boolean;
}

export const useWeb3Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<FormResult | null>(null);

  const submitForm = async (formData: FormData) => {
    setIsSubmitting(true);
    setResult(null);

    try {
      // Append the access key from environment variables
      formData.append("access_key", import.meta.env.VITE_WEB3_FORMS_ACCESS_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult({
          message:
            "Form submitted successfully! Our team will contact you shortly.",
          isSuccess: true,
        });
        return { success: true };
      } else {
        setResult({
          message: data.message || "Error submitting form. Please try again.",
          isSuccess: false,
        });
        return { success: false };
      }
    } catch (error) {
      setResult({
        message: "Network error. Please check your connection and try again.",
        isSuccess: false,
      });
      return { success: false };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    result,
    submitForm,
  };
};
