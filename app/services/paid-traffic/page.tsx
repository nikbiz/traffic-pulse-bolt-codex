import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Target, TrendingUp, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const platforms = [
  {
    name: 'Google Ads',
    description: 'Search, Shopping, Display, and YouTube campaigns',
    features: ['Keyword research & optimization', 'Ad copy testing', 'Landing page optimization', 'Conversion tracking'],
    results: 'Average 320% ROAS increase'
  },
  {
    name: 'Facebook & Instagram Ads',
    description: 'Social media advertising across Meta platforms',
    features: ['Audience research & targeting', 'Creative development', 'Pixel implementation', 'Retargeting campaigns'],
    results: 'Average 240% lead increase'
  },
  {
    name: 'TikTok Ads',
    description: 'Engaging video campaigns for younger demographics',
    features: ['Video creative strategy', 'Trend-based campaigns', 'Influencer partnerships', 'Viral content optimization'],
    results: 'Average 180% engagement boost'
  },
  {
    name: 'LinkedIn Ads',
    description: 'B2B focused advertising and lead generation',
    features: ['Professional targeting', 'Lead forms optimization', 'Account-based marketing', 'Industry-specific campaigns'],
    results: 'Average 165% B2B lead growth'
  }
];

const benefits = [
  'Dedicated account manager',
  'Weekly performance reports',
  'Monthly strategy calls',
  'Advanced tracking setup',
  'Competitor analysis',
  '24/7 campaign monitoring'
];

export default function PaidTraffic() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-sky-600 to-sky-500">
            <Target className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Paid Traffic Suite
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
          Scale your business with strategic paid advertising across Google, Facebook, TikTok, and LinkedIn. 
          Our data-driven approach delivers consistent, profitable growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-sky-600 to-sky-500">
            <Link href="/contact">Get Free Audit</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/cases">View Case Studies</Link>
          </Button>
        </div>
      </div>

      {/* Platforms */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          Advertising Platforms We Master
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {platforms.map((platform, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{platform.name}</CardTitle>
                <CardDescription>{platform.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-sky-50 dark:bg-sky-900/20 rounded-lg p-3">
                  <div className="text-sm font-semibold text-sky-800 dark:text-sky-200">
                    {platform.results}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="flex justify-center mb-2">
              <TrendingUp className="h-8 w-8 text-sky-500" />
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">$50M+</div>
            <div className="text-slate-600 dark:text-slate-400">Ad Spend Managed</div>
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <Target className="h-8 w-8 text-sky-500" />
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">4.2x</div>
            <div className="text-slate-600 dark:text-slate-400">Average ROAS</div>
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <Users className="h-8 w-8 text-sky-500" />
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">200+</div>
            <div className="text-slate-600 dark:text-slate-400">Campaigns Launched</div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            What's Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-slate-600 dark:text-slate-400">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg"
            alt="Marketing Dashboard"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-sky-600 to-sky-500 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Traffic?</h2>
        <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
          Get a free audit of your current advertising efforts and discover untapped growth opportunities.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/contact" className="flex items-center">
            Get Your Free Audit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}