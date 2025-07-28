import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, BarChart3, PieChart, LineChart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const dashboardTypes = [
  {
    name: 'Looker Studio Reports',
    description: 'Custom dashboards with real-time data visualization',
    features: ['Multi-source data integration', 'Interactive charts and graphs', 'Automated reporting', 'Custom branding'],
    icon: BarChart3,
    example: 'Marketing Performance Dashboard'
  },
  {
    name: 'GA4 Implementation',
    description: 'Advanced Google Analytics 4 setup and configuration',
    features: ['Enhanced ecommerce tracking', 'Custom events and conversions', 'Audience segmentation', 'Attribution modeling'],
    icon: PieChart,
    example: 'User Journey Analysis'
  },
  {
    name: 'Custom Dashboards',
    description: 'Tailored reporting solutions for specific business needs',
    features: ['Business-specific KPIs', 'Automated data pipelines', 'Alert systems', 'Mobile optimization'],
    icon: LineChart,
    example: 'Executive Summary Dashboard'
  }
];

const metrics = [
  'Revenue Attribution',
  'Customer Lifetime Value',
  'Marketing ROI',
  'Conversion Funnels',
  'Campaign Performance',
  'Audience Insights'
];

export default function DataDashboards() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-amber-600 to-amber-500">
            <BarChart3 className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Data & Dashboards
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
          Transform raw data into actionable insights with custom dashboards and advanced analytics. 
          Make data-driven decisions that accelerate your business growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-amber-600 to-amber-500">
            <Link href="/contact">Get Custom Dashboard</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/cases">View Examples</Link>
          </Button>
        </div>
      </div>

      {/* Dashboard Types */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          Dashboard Solutions
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {dashboardTypes.map((dashboard, index) => {
            const Icon = dashboard.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 mr-3">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{dashboard.name}</CardTitle>
                  <CardDescription>{dashboard.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-2 mb-4 flex-1">
                    {dashboard.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
                    <div className="text-sm font-semibold text-amber-800 dark:text-amber-200">
                      Example: {dashboard.example}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Metrics We Track */}
      <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          Key Metrics We Track
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center bg-white dark:bg-slate-700 rounded-lg p-4">
              <BarChart3 className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0" />
              <span className="font-medium text-slate-900 dark:text-white">{metric}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sample Dashboard */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          Sample Dashboard
        </h2>
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">$2.1M</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Total Revenue</div>
              <div className="text-xs text-green-600">+240% vs last month</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600">4.2x</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">ROAS</div>
              <div className="text-xs text-green-600">+165% vs last month</div>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-amber-600">1,247</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Conversions</div>
              <div className="text-xs text-green-600">+85% vs last month</div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">$45</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Cost per Acquisition</div>
              <div className="text-xs text-green-600">-52% vs last month</div>
            </div>
          </div>
          
          <div className="aspect-video bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="h-16 w-16 text-slate-400 mx-auto mb-4" />
              <div className="text-slate-600 dark:text-slate-400">Interactive Chart Visualization</div>
              <div className="text-sm text-slate-500">Campaign Performance Over Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Why Custom Dashboards Matter
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">Real-time Insights</div>
                <div className="text-slate-600 dark:text-slate-400">Monitor performance as it happens with live data updates</div>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">Automated Reporting</div>
                <div className="text-slate-600 dark:text-slate-400">Save hours with automated reports delivered to your inbox</div>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">Better Decisions</div>
                <div className="text-slate-600 dark:text-slate-400">Make informed choices based on accurate, consolidated data</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg"
            alt="Analytics Dashboard"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready for Better Data Insights?</h2>
        <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
          Transform your data into a competitive advantage with custom dashboards that provide 
          the insights you need to grow your business.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/contact" className="flex items-center">
            Get Your Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}