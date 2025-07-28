import { clientLogos } from '@/lib/data';

export function ClientLogos() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Trusted by Growing Companies
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We've helped businesses across industries achieve remarkable growth through strategic digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
          {clientLogos.map((client, index) => (
            <div key={index} className="flex justify-center">
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 w-24 h-16 flex items-center justify-center">
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Snippets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
            <div className="text-3xl font-bold text-amber-600 mb-2">240%</div>
            <div className="text-slate-900 dark:text-white font-semibold mb-1">Revenue Increase</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              E-commerce client achieved 240% revenue growth through optimized Google Ads campaigns.
            </div>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">180%</div>
            <div className="text-slate-900 dark:text-white font-semibold mb-1">Lead Generation</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              SaaS company increased qualified leads by 180% with targeted LinkedIn campaigns.
            </div>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.2x</div>
            <div className="text-slate-900 dark:text-white font-semibold mb-1">ROAS Improvement</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Local service business achieved 4.2x return on ad spend with geo-targeted Facebook ads.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}