import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Target, BarChart3, Zap, Users, Shield, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Targeted Lead Generation',
    description: 'Identify and attract your ideal customers with precision targeting and advanced analytics.'
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Conversion Optimization',
    description: 'Optimize your funnels and landing pages to convert more visitors into paying customers.'
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Automated Workflows',
    description: 'Set up automated email sequences and follow-ups to nurture leads without manual work.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'CRM Integration',
    description: 'Seamlessly integrate with your existing CRM to manage and track all your leads in one place.'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Data Security',
    description: 'Enterprise-grade security ensures your customer data is always protected and compliant.'
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Performance Analytics',
    description: 'Track ROI, conversion rates, and campaign performance with detailed reporting dashboards.'
  }
]

export function Features() {
  return (
    <section className="py-20 bg-muted/30" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            Everything You Need to Generate More Leads
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools and strategies you need to attract, convert, and retain more customers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
