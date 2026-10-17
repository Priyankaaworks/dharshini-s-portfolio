import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Github, 
  Linkedin, 
  Phone,
  Copy, 
  Check, 
  Sparkles,
  Clock
} from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'fallback'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please write a brief message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate backend transmission and offer direct mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus('success');
    }, 800);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(portfolioConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText(portfolioConfig.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const openMailClient = () => {
    const mailto = `mailto:${portfolioConfig.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Hi ${portfolioConfig.name},\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    )}`;
    window.location.href = mailto;
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-2xl">
        <span className="text-xs font-bold tracking-[0.2em] text-[#D88C76] uppercase block">
          Get in Touch
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#292720] tracking-tight font-normal">
          Let's Start a Conversation
        </h1>
        <p className="text-base text-[#5F5A50] leading-relaxed">
          Whether you have an upcoming project, an opportunity, or simply want to connect over code and design, I would love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Contact Info & Socials */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-8 border border-[#EADBCE] shadow-sm space-y-6">
            <h2 className="font-serif text-2xl text-[#292720] font-medium">
              Contact Details
            </h2>

            {/* Email Card with Copy button */}
            <div className="p-4 rounded-2xl bg-[#FCF8F3] border border-[#EADBCE] space-y-2">
              <span className="text-xs font-semibold text-[#5F5A50] uppercase tracking-wider block">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${portfolioConfig.email}`}
                  className="text-sm font-medium text-[#292720] hover:text-[#D88C76] transition-colors truncate"
                >
                  {portfolioConfig.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  aria-label="Copy email address"
                  className="p-1.5 rounded-lg text-[#5F5A50] hover:text-[#D88C76] hover:bg-[#E9E1D5]/40 transition-colors shrink-0"
                  title="Copy to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#8A9678]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedEmail && (
                <p className="text-[11px] text-[#8A9678] font-medium">
                  Copied email to clipboard!
                </p>
              )}
            </div>

            {/* Phone Card with Copy & Call button */}
            <div className="p-4 rounded-2xl bg-[#FCF8F3] border border-[#EADBCE] space-y-2">
              <span className="text-xs font-semibold text-[#5F5A50] uppercase tracking-wider block">
                Direct Phone
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`tel:${portfolioConfig.phone}`}
                  className="text-sm font-medium text-[#292720] hover:text-[#D88C76] transition-colors truncate flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-[#D88C76]" />
                  <span>{portfolioConfig.phoneFormatted || portfolioConfig.phone}</span>
                </a>
                <button
                  type="button"
                  onClick={copyPhoneToClipboard}
                  aria-label="Copy phone number"
                  className="p-1.5 rounded-lg text-[#5F5A50] hover:text-[#D88C76] hover:bg-[#E9E1D5]/40 transition-colors shrink-0"
                  title="Copy to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-[#8A9678]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedPhone && (
                <p className="text-[11px] text-[#8A9678] font-medium">
                  Copied phone number to clipboard!
                </p>
              )}
            </div>

            {/* Location */}
            <div className="p-4 rounded-2xl bg-[#FCF8F3] border border-[#EADBCE] space-y-1">
              <span className="text-xs font-semibold text-[#5F5A50] uppercase tracking-wider block">
                Location
              </span>
              <div className="flex items-center gap-2 text-sm text-[#292720]">
                <MapPin className="w-4 h-4 text-[#D88C76]" />
                <span>{portfolioConfig.location}</span>
              </div>
            </div>

            {/* Availability */}
            <div className="p-4 rounded-2xl bg-[#FCF8F3] border border-[#EADBCE] space-y-1">
              <span className="text-xs font-semibold text-[#5F5A50] uppercase tracking-wider block">
                Current Status
              </span>
              <div className="flex items-center gap-2 text-xs font-medium text-[#8A9678]">
                <Sparkles className="w-4 h-4 text-[#8A9678]" />
                <span>{portfolioConfig.statusText}</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-[#5F5A50] uppercase tracking-wider block mb-3">
                Social Profiles & Connect
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={portfolioConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[#FCF8F3] border border-[#EADBCE] text-[#292720] hover:text-[#D88C76] hover:border-[#D88C76] transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${portfolioConfig.email}`}
                  className="p-3 rounded-2xl bg-[#FCF8F3] border border-[#EADBCE] text-[#292720] hover:text-[#D88C76] hover:border-[#D88C76] transition-all"
                  aria-label="Direct Email"
                  title="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={`tel:${portfolioConfig.phone}`}
                  className="p-3 rounded-2xl bg-[#FCF8F3] border border-[#EADBCE] text-[#292720] hover:text-[#D88C76] hover:border-[#D88C76] transition-all"
                  aria-label="Direct Phone Call"
                  title="Call Phone"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href={portfolioConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[#FCF8F3] border border-[#EADBCE] text-[#292720] hover:text-[#D88C76] hover:border-[#D88C76] transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADBCE] shadow-sm space-y-6">
            <h2 className="font-serif text-2xl text-[#292720] font-medium">
              Send a Message
            </h2>

            {submissionStatus === 'success' ? (
              <div className="bg-[#F2F5ED] rounded-2xl p-6 border border-[#D9DFD0] space-y-4 animate-in fade-in">
                <div className="w-10 h-10 rounded-full bg-[#8A9678]/20 flex items-center justify-center text-[#8A9678]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl text-[#292720] font-semibold">
                    Thank you, {formData.name}!
                  </h3>
                  <p className="text-sm text-[#5F5A50] leading-relaxed">
                    Your message draft is validated. Because client-only static hosting does not send emails directly without backend credentials, you can also launch your local email client with this pre-filled message:
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={openMailClient}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#D88C76] hover:bg-[#C67862] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Email App</span>
                  </button>

                  <button
                    onClick={() => {
                      setSubmissionStatus('idle');
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2.5 rounded-full text-xs font-semibold text-[#5F5A50] hover:text-[#292720] bg-white border border-[#EADBCE] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-[#292720] uppercase tracking-wider">
                    Your Name <span className="text-[#D88C76]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className={`w-full px-4 py-2.5 text-sm bg-[#FCF8F3] border rounded-xl text-[#292720] placeholder-[#5F5A50]/60 focus:outline-none focus:ring-2 focus:ring-[#D88C76]/50 ${
                      errors.name ? 'border-red-400' : 'border-[#EADBCE] focus:border-[#D88C76]'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-[#292720] uppercase tracking-wider">
                    Your Email <span className="text-[#D88C76]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. jane@example.com"
                    className={`w-full px-4 py-2.5 text-sm bg-[#FCF8F3] border rounded-xl text-[#292720] placeholder-[#5F5A50]/60 focus:outline-none focus:ring-2 focus:ring-[#D88C76]/50 ${
                      errors.email ? 'border-red-400' : 'border-[#EADBCE] focus:border-[#D88C76]'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-[#292720] uppercase tracking-wider">
                    Subject <span className="text-[#D88C76]">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Project inquiry or developer opportunity"
                    className={`w-full px-4 py-2.5 text-sm bg-[#FCF8F3] border rounded-xl text-[#292720] placeholder-[#5F5A50]/60 focus:outline-none focus:ring-2 focus:ring-[#D88C76]/50 ${
                      errors.subject ? 'border-red-400' : 'border-[#EADBCE] focus:border-[#D88C76]'
                    }`}
                  />
                  {errors.subject && <p className="text-xs text-red-600">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[#292720] uppercase tracking-wider">
                    Message <span className="text-[#D88C76]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, or question..."
                    className={`w-full px-4 py-2.5 text-sm bg-[#FCF8F3] border rounded-xl text-[#292720] placeholder-[#5F5A50]/60 focus:outline-none focus:ring-2 focus:ring-[#D88C76]/50 ${
                      errors.message ? 'border-red-400' : 'border-[#EADBCE] focus:border-[#D88C76]'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#D88C76] hover:bg-[#C67862] shadow-sm hover:shadow transition-all disabled:opacity-70 cursor-pointer active:scale-95"
                >
                  {isSubmitting ? (
                    <span>Validating & Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
