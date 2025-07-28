import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Target, BarChart3 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Drive Growth with{' '}
                <span className="bg-gradient-to-r from-sky-600 to-sky-500 bg-clip-text text-transparent">
                  Data-Driven
                </span>{' '}
                Marketing
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-lg">
                We scale businesses through strategic paid traffic, intelligent automation, 
                and transparent analytics that deliver measurable results.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600"
              >
                <Link href="/contact" className="flex items-center">
                  Get Your Free Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/cases">View Case Studies</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-sky-500" />
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">240%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Avg Revenue Growth</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Target className="h-6 w-6 text-sky-500" />
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">4.2x</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Average ROAS</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <BarChart3 className="h-6 w-6 text-sky-500" />
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">50+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Clients Scaled</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg"
                alt="Marketing Dashboard"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-600/20 to-transparent"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 max-w-xs">
              <div className="text-sm font-medium text-slate-900 dark:text-white">Campaign Performance</div>
              <div className="text-2xl font-bold text-green-600">+165% ROAS</div>
              <div className="text-xs text-slate-500">vs. previous period</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4">
              <div className="text-sm font-medium text-slate-900 dark:text-white">Live Conversions</div>
              <div className="text-2xl font-bold text-sky-600">324</div>
              <div className="text-xs text-slate-500">This month</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}