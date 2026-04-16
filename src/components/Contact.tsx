"use client";
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { personal } from "@/data/portfolio";

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const contactDetails = [
  {
    label: "Email",
    text: personal.email,
    href: `mailto:${personal.email}`,
    external: false,
    icon: <EmailIcon />,
  },
  {
    label: "LinkedIn",
    text: "linkedin.com/in/asneha",
    href: personal.linkedin,
    external: true,
    icon: <LinkedInIcon />,
  },
  {
    label: "Availability",
    text: "Available for opportunities and collaborations",
    href: null,
    external: false,
    icon: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = form;
    const safeMessage = message.replace(/[<>"'&]/g, "");
    const mailto = `mailto:${personal.email}?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${safeMessage}`)}`;
    window.location.href = mailto;
    setSent(true);
  };

  const inputClass =
    "text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all duration-200 w-full";

  return (
    <SectionWrapper id="contact" title="Get in Touch" className="bg-gray-50">
      <p className="text-sm text-gray-400 -mt-7 mb-8">
        Open to opportunities and collaborations.
      </p>

      <div className="grid md:grid-cols-2 gap-5">

        {/* Details card */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col gap-5 hover:shadow-md transition-all duration-300">
          {contactDetails.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                {item.label}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition-colors duration-150 break-all"
                >
                  {item.icon}
                  {item.text}
                </a>
              ) : (
                <p className="text-sm text-gray-400 italic">{item.text}</p>
              )}
            </div>
          ))}
        </div>

        {/* Form card */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-2 py-8">
              <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 text-base mb-1">
                ✓
              </div>
              <p className="font-semibold text-gray-900 text-sm">Message ready!</p>
              <p className="text-xs text-gray-400">Your email client should have opened.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <p className="text-sm font-medium text-gray-700 mb-1">
                Have an opportunity or question? Let&apos;s connect.
              </p>

              {[
                { key: "name", label: "Name", type: "text", placeholder: "Your name" },
                { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              ].map((field) => (
                <div key={field.key} className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    value={form[field.key as "name" | "email"]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className={inputClass}
                  />
                </div>
              ))}

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Your message..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="text-sm font-medium bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-gray-700 hover:-translate-y-px active:translate-y-0 transition-all duration-200 shadow-sm hover:shadow mt-1"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>
    </SectionWrapper>
  );
}
