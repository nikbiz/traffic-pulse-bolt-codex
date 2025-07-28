import { Badge } from '@/components/ui/badge';

const partners = [
  { name: 'Google Partner', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' },
  { name: 'Meta Business Partner', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' },
  { name: 'LinkedIn Partner', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' },
  { name: 'TikTok Partner', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300' },
];

export function PartnerBadges() {
  return (
    <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8">
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
        Certified Partners
      </h3>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {partners.map((partner) => (
          <div key={partner.name} className="text-center">
            <div className="bg-white dark:bg-slate-700 rounded-lg p-4 mb-2 shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-500 rounded-full mx-auto mb-2"></div>
            </div>
            <Badge variant="secondary" className={partner.color}>
              {partner.name}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}