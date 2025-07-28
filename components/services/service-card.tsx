import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Zap, BarChart3, Users } from 'lucide-react';
import { Service } from '@/lib/types';

const iconMap = {
  target: Target,
  zap: Zap,
  'bar-chart-3': BarChart3,
  users: Users,
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap];

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 group">
      <CardHeader>
        <div className="flex items-center mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 group-hover:from-amber-700 group-hover:to-amber-600 transition-all duration-300">
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
        <CardDescription className="text-slate-600 dark:text-slate-400">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        <ul className="space-y-2 mb-6 flex-1">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></div>
              <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button asChild variant="outline" className="group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
          <Link href={service.href} className="flex items-center">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}