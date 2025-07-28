import { ContactForm } from '@/components/contact/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: 'nikbubis.adv@gmail.com',
    description: 'Send us an email anytime'
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+1 (555) 123-4567',
    description: 'Call us during business hours'
  },
  {
    icon: MapPin,
    title: 'Location',
    details: 'San Francisco, CA',
    description: 'We work with clients globally'
  },
  {
    icon: Clock,
    title: 'Response Time',
    details: '< 24 hours',
    description: 'We reply to all inquiries quickly'
  }
];

export default function Contact() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Get Your Free Marketing Audit
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
          Ready to scale your business with data-driven marketing? Tell us about your goals 
          and we'll show you exactly how to achieve them.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-sky-600 to-sky-500 mr-4">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">{info.title}</div>
                      <div className="text-sky-600 font-medium">{info.details}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">{info.description}</div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What Happens Next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900 text-sky-600 text-sm font-bold mr-3 mt-1">
                  1
                </div>
                <div>
                  <div className="font-medium text-slate-900 dark:text-white">We Review Your Info</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Our team analyzes your current marketing setup</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900 text-sky-600 text-sm font-bold mr-3 mt-1">
                  2
                </div>
                <div>
                  <div className="font-medium text-slate-900 dark:text-white">Strategy Call</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">We discuss your goals and opportunities</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900 text-sky-600 text-sm font-bold mr-3 mt-1">
                  3
                </div>
                <div>
                  <div className="font-medium text-slate-900 dark:text-white">Custom Proposal</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Receive a tailored growth strategy</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">How long does an audit take?</h3>
            <p className="text-slate-600 dark:text-slate-400">Most audits are completed within 2-3 business days, depending on the complexity of your current setup.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What's included in the free audit?</h3>
            <p className="text-slate-600 dark:text-slate-400">Campaign analysis, conversion tracking review, competitor benchmarking, and actionable recommendations.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Do you work with small businesses?</h3>
            <p className="text-slate-600 dark:text-slate-400">Yes! We work with businesses of all sizes, from startups to enterprise companies.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What if I'm not ready to start?</h3>
            <p className="text-slate-600 dark:text-slate-400">No pressure! The audit provides valuable insights you can use whenever you're ready to scale.</p>
          </div>
        </div>
      </div>
    </div>
  );
}