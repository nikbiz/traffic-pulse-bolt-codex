import { services } from '@/lib/data';
import { ServiceCard } from '@/components/services/service-card';

export default function Services() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Our Services
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Comprehensive digital marketing solutions designed to scale your business 
          and deliver measurable results across all channels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Need a Custom Solution?
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Every business is unique. Let's discuss how we can create a tailored marketing strategy for your specific goals.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-medium rounded-lg hover:from-amber-700 hover:to-amber-600 transition-all duration-300"
        >
          Get Your Free Consultation
        </a>
      </div>
    </div>
  );
}