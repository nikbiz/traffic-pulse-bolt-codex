import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, Search, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    name: 'Marketing Audits',
    description: 'Comprehensive analysis of your current marketing efforts',
    features: ['Campaign performance review', 'Competitor analysis', 'Growth opportunity identification', 'Actionable recommendations'],
    icon: Search,
    duration: '2-3 weeks',
    deliverable: 'Detailed audit report + strategy presentation'
  },
  {
    name: 'Strategy Development',
    description: 'Custom marketing strategies aligned with your business goals',
    features: ['Market research and analysis', 'Customer persona development', 'Channel strategy planning', 'KPI framework setup'],
    icon: Users,
    duration: '3-4 weeks',
    deliverable: 'Complete marketing strategy document'
  },
  {
    name: 'Monthly Support',
    description: 'Ongoing guidance and optimization support',
    features: ['Monthly strategy calls', 'Performance reviews', 'Campaign optimization advice', 'Team training sessions'],
    icon: Calendar,
    duration: 'Ongoing',
    deliverable: 'Monthly reports + consultation calls'
  }
];

const auditIncludes = [
  'Current campaign performance analysis',
  'Conversion funnel optimization review',
  'Competitor benchmarking study',
  'Technical setup audit (tracking, pixels, etc.)',
  'Budget allocation recommendations',
  'Growth opportunity identification',
  'Priority action plan with timelines',
  'ROI improvement projections'
];

export default function Consulting() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-sky-600 to-sky-500">
            <Users className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Marketing Consulting
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
          Get expert guidance to accelerate your marketing success. Our strategic consulting 
          helps you make smarter decisions and achieve better results faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-sky-600 to-sky-500">
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/cases">See Results</Link>
          </Button>
        </div>
      </div>

      {/* Services */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          Consulting Services
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-sky-600 to-sky-500 mr-3">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2">
                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3">
                      <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">Duration</div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">{service.duration}</div>
                    </div>
                    <div className="bg-sky-50 dark:bg-sky-900/20 rounded-lg p-3">
                      <div className="text-xs font-medium text-sky-600 dark:text-sky-400 uppercase tracking-wide">Deliverable</div>
                      <div className="text-sm font-semibold text-sky-800 dark:text-sky-200">{service.deliverable}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Audit Deep Dive */}
      <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Free Marketing Audit
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Get a comprehensive analysis of your marketing performance with actionable 
              recommendations to improve your ROI and accelerate growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {auditIncludes.slice(0, 4).map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">What You'll Receive</h3>
              <div className="space-y-3">
                {auditIncludes.slice(4).map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-sky-50 dark:bg-sky-900/20 rounded-lg">
                <div className="text-sm font-semibold text-sky-800 dark:text-sky-200">
                  Average value: $2,500 - Yours FREE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Story */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          Client Success Story
        </h2>
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <blockquote className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                "TrafficPulse's marketing audit revealed critical gaps in our funnel that we never noticed. 
                Their recommendations helped us increase our conversion rate by 65% and reduce acquisition costs by 40%."
              </blockquote>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Marcus Johnson</div>
                  <div className="text-sm text-slate-500">CEO, TechFlow Solutions</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600">65%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Conversion Increase</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">40%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          Our Consulting Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Discovery', description: 'Understanding your business goals and current challenges' },
            { step: '02', title: 'Analysis', description: 'Deep dive into your data and marketing performance' },
            { step: '03', title: 'Strategy', description: 'Developing customized recommendations and action plans' },
            { step: '04', title: 'Implementation', description: 'Guiding you through execution and optimization' }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-sky-500 text-white font-bold text-lg mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-sky-600 to-sky-500 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Growth?</h2>
        <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
          Book a free consultation to discuss your marketing challenges and discover how 
          our expert guidance can help you achieve your business goals faster.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/contact" className="flex items-center">
            Book Free Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}