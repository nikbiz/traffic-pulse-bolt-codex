import Link from 'next/link';
import { Zap, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-amber-600 to-amber-500">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold">TrafficPulse</span>
            </Link>
            <p className="text-slate-400 text-sm">
              Driving measurable growth through strategic digital marketing and data-driven optimization.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:hello@trafficpulse.com" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/paid-traffic" className="text-slate-400 hover:text-white transition-colors">Paid Traffic</Link></li>
              <li><Link href="/services/automation-cro" className="text-slate-400 hover:text-white transition-colors">Automation & CRO</Link></li>
              <li><Link href="/services/data-dashboards" className="text-slate-400 hover:text-white transition-colors">Data & Dashboards</Link></li>
              <li><Link href="/services/consulting" className="text-slate-400 hover:text-white transition-colors">Consulting</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/cases" className="text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <p>hello@trafficpulse.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} TrafficPulse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}