import { teamMembers } from '@/lib/data';
import { TeamCard } from '@/components/about/team-card';
import { PartnerBadges } from '@/components/about/partner-badges';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    title: 'Data-Driven Decisions',
    description: 'Every strategy is backed by comprehensive data analysis and proven methodologies.',
    icon: TrendingUp
  },
  {
    title: 'Transparent Results',
    description: 'Clear reporting and open communication ensure you always know how your campaigns are performing.',
    icon: Target
  },
  {
    title: 'Client Success First',
    description: 'Your growth is our success. We align our efforts with your business objectives.',
    icon: Users
  }
];

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          About TrafficPulse
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          We're a team of digital marketing experts passionate about driving measurable growth 
          for ambitious businesses through data-driven strategies and innovative solutions.
        </p>
      </div>

      {/* Mission */}
      <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Founded in 2019, TrafficPulse emerged from a simple belief: every business deserves 
              access to world-class digital marketing expertise. We've grown from a small team of 
              specialists to a full-service agency, but our core mission remains unchanged.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              We combine cutting-edge technology with human expertise to deliver marketing solutions 
              that drive real business growth. Our approach is rooted in transparency, accountability, 
              and results that matter to your bottom line.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
              alt="Team collaboration"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* Partner Badges */}
      <div className="mb-16">
        <PartnerBadges />
      </div>

      {/* Stats */}
      <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          Our Track Record
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">50+</div>
            <div className="text-slate-600 dark:text-slate-400">Clients Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">$50M+</div>
            <div className="text-slate-600 dark:text-slate-400">Ad Spend Managed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">240%</div>
            <div className="text-slate-600 dark:text-slate-400">Avg Revenue Growth</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">4.2x</div>
            <div className="text-slate-600 dark:text-slate-400">Average ROAS</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
        <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
          Join the growing list of businesses that trust TrafficPulse to drive their digital marketing success.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/contact" className="flex items-center">
            Get Started Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}