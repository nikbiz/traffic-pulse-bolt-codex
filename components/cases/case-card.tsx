import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CaseStudy } from '@/lib/types';

interface CaseCardProps {
  caseStudy: CaseStudy;
}

export function CaseCard({ caseStudy }: CaseCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300">
      <div className="aspect-video overflow-hidden rounded-t-lg">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">{caseStudy.industry}</Badge>
          <Badge variant="outline">{caseStudy.channel}</Badge>
        </div>
        <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
        <CardDescription className="text-slate-600 dark:text-slate-400">
          {caseStudy.client}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Challenge</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">{caseStudy.problem}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Solution</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">{caseStudy.solution}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Results</h4>
          <div className="grid grid-cols-1 gap-3">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-900 dark:text-white">
                    {result.metric}
                  </span>
                  <span className="text-sm font-bold text-green-600">
                    {result.improvement}
                  </span>
                </div>
                <div className="text-lg font-bold text-slate-900 dark:text-white">
                  {result.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}