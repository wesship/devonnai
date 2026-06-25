import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function ContactPage() {
  const router = useRouter();
  const inquiry = router.query.inquiry as string | undefined;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact Sales — D3VONN.IO</title>
        <meta name="description" content="Contact the D3VONN.IO sales team for enterprise pricing, custom deployments, and partnership inquiries." />
        <link rel="canonical" href="https://d3vonn.io/contact" />
      </Head>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              {inquiry === "enterprise" ? "Enterprise Sales" : "Contact Us"}
            </h1>
            <p className="mt-4 text-lg text-gray-400">
              {inquiry === "enterprise"
                ? "Let's build a custom AI agent deployment for your organization."
                : "Have questions? We'd love to hear from you."}
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16">
              <div className="mx-auto h-16 w-16 rounded-full bg-green-900/50 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Message sent!</h2>
              <p className="text-gray-400">Our team will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">First name</label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">Last name</label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Work email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  required
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  placeholder="Acme Inc"
                />
              </div>

              <div>
                <label htmlFor="teamSize" className="block text-sm font-medium text-gray-300 mb-2">Team size</label>
                <select
                  id="teamSize"
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                >
                  <option value="">Select team size</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-1000">201-1000</option>
                  <option value="1000+">1000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">What are you interested in?</label>
                <select
                  id="interest"
                  defaultValue={inquiry || ""}
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                >
                  <option value="">Select an option</option>
                  <option value="enterprise">Enterprise plan</option>
                  <option value="enterprise-bundle">Enterprise AI Workforce Bundle</option>
                  <option value="custom-agents">Custom agent development</option>
                  <option value="on-premise">On-premise deployment</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 resize-none"
                  placeholder="Tell us about your use case..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-white hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/25"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
