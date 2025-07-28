import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, Settings, BarChart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    name: 'Make.com Integration',
    description: 'Visual workflow automation for seamless data flow',
    features: ['Multi-app integrations', 'Real-time data sync', 'Custom workflows', 'Error handling'],
    icon: Settings
  },
  {
    name: 'n8n Workflows',
    description: 'Advanced automation for complex business processes',
    features: ['Custom node development', 'API integrations', 'Conditional logic', 'Webhook triggers'],
    icon: Zap
  },
  {
    name: 'Server-side Tracking',
    description: 'Enhanced data accuracy and privacy compliance',
    features: ['Google Tag Manager setup', 'Facebook Conversions API', 'Data layer implementation', 'Privacy compliance'],
    icon: BarChart
  },
  {
    name: 'A/B Testing',
    description: 'Data-driven optimization of campaigns and websites',
    features: ['Test design and setup', 'Statistical analysis', 'Performance monitoring', 'Implementation guidance'],
    icon: BarChart
  }
];

const automationBenefits = [
  'Reduce manual tasks by 80%',
  'Improve data accuracy by 95%',
  'Increase conversion rates by 35%',
  'Save 20+ hours per week',
  'Eliminate human errors',
  'Scale operations efficiently'
];

export default function AutomationCRO() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-amber-600 to-amber-500">
            <Zap className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Automation & CRO
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
          Streamline your operations and maximize conversions with intelligent automation. 
          Our systems work 24/7 to optimize your marketing performance and eliminate manual tasks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-amber-600 to-amber-500">
            <Link href="/contact">Start Automation</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/cases">View Results</Link>
          </Button>
        </div>
      </div>

      {/* Services */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          Automation Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 mr-3">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          Automation Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automationBenefits.map((benefit, index) => (
            <div key={index} className="flex items-center bg-white dark:bg-slate-700 rounded-lg p-4">
              <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
              <span className="font-medium text-slate-900 dark:text-white">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          Our Implementation Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Audit', description: 'Analyze current processes and identify automation opportunities' },
            { step: '02', title: 'Design', description: 'Create custom workflows and optimization strategies' },
            { step: '03', title: 'Build', description: 'Implement automations and tracking systems' },
            { step: '04', title: 'Optimize', description: 'Monitor performance and continuously improve' }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-600 to-amber-500 text-white font-bold text-lg mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Highlight */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Real Results
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            A SaaS client reduced their lead processing time from 4 hours to 15 minutes using our automation workflows, 
            while increasing conversion rates by 45%.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">95%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Time Saved</div>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-amber-600">45%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Higher Conversions</div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
            alt="Automation Dashboard"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Success?</h2>
        <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
          Let us build custom automation workflows that save time, reduce errors, and boost your conversion rates.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/contact" className="flex items-center">
            Get Started Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}