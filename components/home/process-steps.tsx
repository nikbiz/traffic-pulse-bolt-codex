import { processSteps } from '@/lib/data';
import { Search, Target, Settings, TrendingUp } from 'lucide-react';

const iconMap = {
  search: Search,
  target: Target,
  settings: Settings,
  'trending-up': TrendingUp,
};

export function ProcessSteps() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            How We Drive Results
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Our proven 4-step process ensures measurable growth and sustainable success for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            
            return (
              <div key={step.id} className="relative">
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 mr-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-amber-600">
                      {step.step.toString().padStart(2, '0')}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>
                </div>

                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-amber-600 to-amber-500 transform -translate-y-1/2"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}