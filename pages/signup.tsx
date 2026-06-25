import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SignupPage() {
  const router = useRouter();
  const plan = router.query.plan as string | undefined;
  const bundle = router.query.bundle as string | undefined;
  const [submitted, setSubmitted] = useState(false);

  const planLabel = plan ? plan.charAt(0).toUpperCase() + plan.slice(1) : bundle ? bundle.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) : "Free";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Sign Up — D3VONN.IO</title>
        <meta name="description" content="Create your D3VONN.IO account and start deploying AI agents in minutes. Free tier available, no credit card required." />
        <link rel="canonical" href="https://d3vonn.io/signup" />
      </Head>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="text-center py-16">
              <div className="mx-auto h-16 w-16 rounded-full bg-cyan-900/50 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Welcome to D3VONN.IO!</h2>
              <p className="text-gray-400 mb-6">Your account has been created. Check your email to verify.</p>
              <Link href="/" className="text-sm text-cyan-400 hover:text-cyan-300">
                Go to Dashboard &rarr;
              </Link>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-white">Create your account</h1>
                <p className="mt-2 text-sm text-gray-400">
                  {plan || bundle ? (
                    <>Starting with the <span className="text-cyan-400 font-medium">{planLabel}</span> plan</>
                  ) : (
                    "Start free, no credit card required"
                  )}
                </p>
              </div>

              {/* Social Sign-up */}
              <div className="space-y-3 mb-6">
                <button className="w-full flex items-center justify-center gap-3 rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  Continue with GitHub
                </button>
                <button className="w-full flex items-center justify-center gap-3 rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Continue with Google
                </button>
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-gray-950 px-4 text-gray-500">or continue with email</span>
                </div>
              </div>

              {/* Email Sign-up Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">Full name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
                  <input
                    type="password"
                    id="password"
                    required
                    minLength={8}
                    className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    placeholder="Min. 8 characters"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-white hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/25"
                >
                  Create Account
                </button>
              </form>

              <p className="mt-6 text-center text-xs text-gray-500">
                By signing up, you agree to our{" "}
                <Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
                {" "}and{" "}
                <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>.
              </p>

              <p className="mt-4 text-center text-sm text-gray-400">
                Already have an account?{" "}
                <Link href="/login" className="text-cyan-400 hover:text-cyan-300 font-medium">Sign in</Link>
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
