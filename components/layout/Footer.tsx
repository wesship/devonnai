import Link from "next/link";

const footerLinks = {
  product: [
    { href: "/demo", label: "Command Center Demo" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/docs", label: "Documentation" },
  ],
  trust: [
    { href: "/security", label: "Security" },
    { href: "/status", label: "Status" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/changelog", label: "Changelog" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/security", label: "Responsible Disclosure" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <span className="text-[10px] font-bold text-white">D3</span>
              </div>
              <span className="text-sm font-bold text-white">
                D3VONN<span className="text-cyan-400">.IO</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 max-w-xs">
              AI Business Operating System for deploying, monitoring, and controlling autonomous AI workers.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Trust</h4>
            <ul className="space-y-2">
              {footerLinks.trust.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} D3VONN.IO. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/wesship" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300 transition-colors" aria-label="GitHub">
              GitHub
            </a>
            <a href="https://twitter.com/d3vonn" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300 transition-colors" aria-label="Twitter">
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
