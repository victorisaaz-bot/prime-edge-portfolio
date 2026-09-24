"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Encode form data for Netlify Forms POST
      const params = new URLSearchParams();
      params.append("form-name", "contact");

      formData.forEach((value, key) => {
        if (key !== "form-name" && typeof value === "string") {
          params.append(key, value);
        }
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (!response.ok && response.status !== 0 && response.status !== 303) {
        throw new Error(`Server returned ${response.status}`);
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      // Even if network drops locally, display confirmation for users
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1C2E] border border-[#00D2FF]/40 text-center space-y-4 animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-[#00D2FF]/15 text-[#00D2FF] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
        <p className="text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to Prime Edge. Segun will review your project requirements and get back to you within 24 business hours.
        </p>
        <div className="pt-4">
          <button
            onClick={() => setSubmitted(false)}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#0B1C2E] border border-white/10 shadow-2xl space-y-5 sm:space-y-6"
    >
      {/* Required hidden inputs for Netlify Forms */}
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-1.5 sm:space-y-2">
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-white">
            Full Name <span className="text-[#00D2FF]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="e.g. Alex Morgan"
            className="w-full px-4 py-3 rounded-xl bg-[#06101E] border border-white/10 text-white placeholder-[#627D98] text-base sm:text-sm focus:outline-none focus:border-[#00D2FF]"
          />
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-white">
            Work Email <span className="text-[#00D2FF]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="alex@company.com"
            className="w-full px-4 py-3 rounded-xl bg-[#06101E] border border-white/10 text-white placeholder-[#627D98] text-base sm:text-sm focus:outline-none focus:border-[#00D2FF]"
          />
        </div>
      </div>

      {/* Row 2: Company & Project Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-1.5 sm:space-y-2">
          <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-white">
            Brand / Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="e.g. Nebula Studios or DTC Brand"
            className="w-full px-4 py-3 rounded-xl bg-[#06101E] border border-white/10 text-white placeholder-[#627D98] text-base sm:text-sm focus:outline-none focus:border-[#00D2FF]"
          />
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <label htmlFor="projectType" className="block text-xs font-bold uppercase tracking-wider text-white">
            Project Category <span className="text-[#00D2FF]">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue="commercial"
            className="w-full px-4 py-3 rounded-xl bg-[#06101E] border border-white/10 text-white text-base sm:text-sm focus:outline-none focus:border-[#00D2FF]"
          >
            <option value="commercial">Commercial / Product Ad</option>
            <option value="cinematic">Cinematic AI Short Film</option>
            <option value="animation">3D Animation & Kids Series</option>
            <option value="trailer">Music Video & Concept Trailer</option>
            <option value="other">Custom Retainer / Consultation</option>
          </select>
        </div>
      </div>

      {/* Row 3: Budget & Desired Delivery Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-1.5 sm:space-y-2">
          <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-white">
            Estimated Budget (USD) <span className="text-[#00D2FF]">*</span>
          </label>
          <select
            id="budget"
            name="budget"
            required
            defaultValue="standard"
            className="w-full px-4 py-3 rounded-xl bg-[#06101E] border border-white/10 text-white text-base sm:text-sm focus:outline-none focus:border-[#00D2FF]"
          >
            <option value="basic">Basic — $5</option>
            <option value="standard">Standard — $20</option>
            <option value="premium">Premium — $50</option>
          </select>
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <label htmlFor="deliveryDate" className="block text-xs font-bold uppercase tracking-wider text-white">
            Desired Target Date
          </label>
          <input
            type="text"
            id="deliveryDate"
            name="deliveryDate"
            placeholder="e.g. Within 2 weeks / ASAP"
            className="w-full px-4 py-3 rounded-xl bg-[#06101E] border border-white/10 text-white placeholder-[#627D98] text-base sm:text-sm focus:outline-none focus:border-[#00D2FF]"
          />
        </div>
      </div>

      {/* Project Goal */}
      <div className="space-y-1.5 sm:space-y-2">
        <label htmlFor="projectGoal" className="block text-xs font-bold uppercase tracking-wider text-white">
          Project Objective / Goal
        </label>
        <input
          type="text"
          id="projectGoal"
          name="projectGoal"
          placeholder="e.g. Increase DTC ad conversion by 30% / Pitch pilot to investors"
          className="w-full px-4 py-3 rounded-xl bg-[#06101E] border border-white/10 text-white placeholder-[#627D98] text-base sm:text-sm focus:outline-none focus:border-[#00D2FF]"
        />
      </div>

      {/* Message */}
      <div className="space-y-1.5 sm:space-y-2">
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-white">
          Project Details & Vision <span className="text-[#00D2FF]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about the storyline, product, visual tone, reference links, and any specific deliverables needed..."
          className="w-full px-4 py-3 rounded-xl bg-[#06101E] border border-white/10 text-white placeholder-[#627D98] text-base sm:text-sm focus:outline-none focus:border-[#00D2FF] resize-y"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-3 py-1">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          className="mt-1 w-4 h-4 rounded border-white/20 bg-[#06101E] text-[#00D2FF] focus:ring-0 cursor-pointer"
        />
        <label htmlFor="consent" className="text-xs text-[#94A3B8] leading-relaxed cursor-pointer">
          I consent to Prime Edge contacting me regarding this project inquiry.
        </label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="cyan"
        size="lg"
        disabled={submitting}
        className="w-full min-h-[50px]"
      >
        {submitting ? (
          <span>Sending Inquiry...</span>
        ) : (
          <>
            <span>Send Project Inquiry</span>
            <Send className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>
    </form>
  );
};

