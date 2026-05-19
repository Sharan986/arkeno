import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';

const budgetOptions = [
  'Select a budget range',
  '$5,000 – $10,000',
  '$10,000 – $25,000',
  '$25,000 – $50,000',
  '$50,000+',
];

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputBase =
    'w-full bg-transparent border border-[#D7E2EA]/20 rounded-2xl px-5 py-4 text-[#D7E2EA] font-light text-sm sm:text-base placeholder:text-[#D7E2EA]/30 focus:outline-none focus:border-[#D7E2EA]/50 transition-colors duration-300';

  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-6"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Let&apos;s talk
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <p className="text-[#D7E2EA]/60 text-center font-light text-sm sm:text-base md:text-lg max-w-md mx-auto mb-16 sm:mb-20 md:mb-28">
            Have a project in mind? Tell us about it and we&apos;ll get back to you within 24 hours.
          </p>
        </FadeIn>

        {/* Form */}
        <FadeIn delay={0.2} y={30}>
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto flex flex-col gap-5 sm:gap-6"
          >
            {/* Name & Email row */}
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                className={inputBase}
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
                className={inputBase}
              />
            </div>

            {/* Budget */}
            <div className="relative">
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className={`${inputBase} appearance-none cursor-pointer ${!form.budget ? 'text-[#D7E2EA]/30' : ''
                  }`}
              >
                {budgetOptions.map((opt, i) => (
                  <option
                    key={opt}
                    value={i === 0 ? '' : opt}
                    disabled={i === 0}
                    className="bg-[#0C0C0C] text-[#D7E2EA]"
                  >
                    {opt}
                  </option>
                ))}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="#D7E2EA"
                    strokeOpacity="0.4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className={`${inputBase} resize-none`}
            />

            {/* Submit */}
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="rounded-full px-10 py-4 sm:px-14 sm:py-5 text-sm sm:text-base text-white font-medium uppercase tracking-widest cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
                style={{
                  background:
                    'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  boxShadow:
                    '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                  outline: '2px solid white',
                  outlineOffset: '-3px',
                }}
              >
                {submitted ? 'Message Sent ✓' : 'Send Message'}
              </button>
            </div>
          </form>
        </FadeIn>

        {/* Contact info */}
        <FadeIn delay={0.3} y={20}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mt-16 sm:mt-20 md:mt-28">
            <a
              href="mailto:hello@arkeno.dev"
              className="text-[#D7E2EA]/50 font-light text-sm sm:text-base hover:text-[#D7E2EA] transition-colors duration-200"
            >
              hello@arkeno.dev
            </a>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-[#D7E2EA]/30" />
            <span className="text-[#D7E2EA]/50 font-light text-sm sm:text-base">
              arkeno.dev
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactSection;
